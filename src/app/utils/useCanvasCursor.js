import { useEffect } from "react";

const useCanvasCursor = () => {
  function Oscillator(config) {
    this.init(config || {});
  }

  Oscillator.prototype = {
    init: function (c) {
      this.phase = c.phase || 0;
      this.offset = c.offset || 0;
      this.frequency = c.frequency || 0.001;
      this.amplitude = c.amplitude || 1;
      this._val = 0;
    },
    update: function () {
      this.phase += this.frequency;
      this._val = this.offset + Math.sin(this.phase) * this.amplitude;
      return this._val;
    },
    value: function () {
      return this._val;
    },
  };

  function Node() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
  }

  function Line(opts) {
    this.init(opts || {});
  }

  Line.prototype = {
    init: function (opts) {
      this.spring = opts.spring + 0.1 * Math.random() - 0.02;
      this.friction = settings.friction + 0.01 * Math.random() - 0.002;
      this.nodes = [];
      for (let i = 0; i < settings.size; i++) {
        const n = new Node();
        n.x = pos.x;
        n.y = pos.y;
        this.nodes.push(n);
      }
    },
    update: function () {
      let spring = this.spring;
      let t = this.nodes[0];
      t.vx += (pos.x - t.x) * spring;
      t.vy += (pos.y - t.y) * spring;

      for (let i = 0; i < this.nodes.length; i++) {
        t = this.nodes[i];
        if (i > 0) {
          const prev = this.nodes[i - 1];
          t.vx += (prev.x - t.x) * spring;
          t.vy += (prev.y - t.y) * spring;
          t.vx += prev.vx * settings.dampening;
          t.vy += prev.vy * settings.dampening;
        }
        t.vx *= this.friction;
        t.vy *= this.friction;
        t.x += t.vx;
        t.y += t.vy;
        spring *= settings.tension;
      }
    },
    draw: function () {
      let e, t;
      let n = this.nodes[0].x;
      let i = this.nodes[0].y;
      ctx.beginPath();
      ctx.moveTo(n, i);
      for (let a = 1; a < this.nodes.length - 2; a++) {
        e = this.nodes[a];
        t = this.nodes[a + 1];
        n = 0.5 * (e.x + t.x);
        i = 0.5 * (e.y + t.y);
        ctx.quadraticCurveTo(e.x, e.y, n, i);
      }
      e = this.nodes[this.nodes.length - 2];
      t = this.nodes[this.nodes.length - 1];
      ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
      ctx.stroke();
      ctx.closePath();
    },
  };

  let ctx, osc, lines = [];
  const pos = { x: 0, y: 0 };
  const settings = {
    friction: 0.5,
    trails: 20,
    size: 50,
    dampening: 0.25,
    tension: 0.98,
  };

  function createLines() {
    lines = [];
    for (let i = 0; i < settings.trails; i++) {
      lines.push(new Line({ spring: 0.4 + (i / settings.trails) * 0.025 }));
    }
  }

  function handleMouseMove(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
  }

  function handleTouchMove(e) {
    if (e.touches.length) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    }
  }

  function render() {
    if (!ctx?.running) return;
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = `hsla(${Math.round(osc.update())},50%,50%,0.2)`;
    ctx.lineWidth = 1;
    for (const l of lines) {
      l.update();
      l.draw();
    }
    requestAnimationFrame(render);
  }

  function resizeCanvas() {
    if (ctx?.canvas) {
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
    }
  }

  useEffect(() => {
    ctx = document.getElementById("canvas")?.getContext("2d");
    if (!ctx) return;

    ctx.running = true;
    osc = new Oscillator({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });

    createLines();
    resizeCanvas();
    render();

    // listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      ctx.running = false;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
};

export default useCanvasCursor;
