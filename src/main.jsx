import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import CanvasCursor froms "./app/components/CanvasCursor";
// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
		      {/* <CanvasCursor /> */}
	</React.StrictMode>
);
