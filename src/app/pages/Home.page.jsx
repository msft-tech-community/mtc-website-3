// memories assets
import memory1 from "../../assets/memories/memory1.png";
import memory2 from "../../assets/memories/memory2.png";
import memory3 from "../../assets/memories/memory3.png";
import memory4 from "../../assets/memories/memory4.png";
import memory5 from "../../assets/memories/memory5.png";
import memory6 from "../../assets/memories/memory6.png";
import memory7 from "../../assets/memories/memory7.png";
import memory8 from "../../assets/memories/memory8.png";
import memory9 from "../../assets/memories/memory9.png";

import msaLogo from "../../assets/logo.webp"
import { Link } from "react-router-dom";
import Team from "../components/Team";

import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "usehooks-ts";
import CustomImage from "../components/CustomImage";
import Speakers from "../components/Speakers";

export default function HomePage() {
	const matches = useMediaQuery("(min-width: 768px)");

	return (
		<div className="h-full">
			<Fade triggerOnce>
				<section className="grid grid-cols-12 items-center justify-center py-10 md:py-12">
					<div className="col-span-12 mx-auto">
						<h1 className="mb-8 text-center text-4xl font-bold tracking-tight lg:mb-8 lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
							<span className="text-[#3a55b4] dark:text-[#4967d0]">
								Microsoft
							</span>{" "}
							Tech Community
						</h1>
						<h1 className="mb-4 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
							Amity University, Noida, Uttar Pradesh
						</h1>

						<h1 className="mb-4 hidden text-center text-xl font-bold tracking-tight md:block lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
							<q>Silicon valley is a mindset, not a location.</q>
						</h1>
						<div className="flex flex-wrap items-center justify-center gap-8">
							<div className="xtext-[#3a55b4] ">
								<h1 className="mb-2 text-center text-xl font-bold tracking-tight text-[#3a55b4] dark:text-[#4967d0] lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
									7000+
								</h1>
								<span className="mt-1 font-bold uppercase">Attendees</span>
							</div>
							<div className="w-full md:hidden">
								<div className="xbg-[#3a55b4] mx-auto h-0.5 w-3/6 bg-black dark:bg-gray-300 md:block"></div>
							</div>
							<div className="xbg-[#3a55b4] hidden h-20 w-0.5 bg-black dark:bg-gray-300 md:block"></div>
							<div className="">
								<h1 className="mb-2 text-center text-xl font-bold tracking-tight text-[#3a55b4] dark:text-[#4967d0] lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
									30+
								</h1>
								<span className="mt-1 font-bold uppercase">Events</span>
							</div>
						</div>
					</div>
				</section>
			</Fade>

			<Fade triggerOnce>
				<h1 className="mt-8 mb-4 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold">
					In Conjunction with Microsoft Student Ambassadors
					<br />{" "}
					<Link
						to={"https://microsoft.com"}
						target="_blank"
						className="hover:underline"
					>
						Supported by Microsoft & Microsoft Azure
					</Link>
				</h1>
				<div className="flex items-center justify-center gap-4">
					<CustomImage
						src={
							"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=406&hei=230&fit=crop&resSharp=1"
						}
						alt=""
						className="hidden aspect-video h-40 rounded-lg bg-white object-contain p-4 lg:block"
					/>
					<CustomImage
						src={
							"https://logosmarken.com/wp-content/uploads/2021/04/Microsoft-Azure-Logo-2018-heute.png"
						}
						alt=""
						className="hidden aspect-video h-40 rounded-lg bg-white object-contain p-4 lg:block"
					/>
				</div>
			</Fade>

			<Fade triggerOnce>
				<AboutMSA />
			</Fade>

			<Fade triggerOnce>
				<AboutMTC />
			</Fade>

			<Fade triggerOnce>
				<section className="py-8 md:py-10">
					<Perks />
				</section>
			</Fade>
			<Fade triggerOnce>
				<section className="py-8 md:py-10">
					<Memories />
				</section>
			</Fade>
			<Fade triggerOnce>
				<section className="py-8 md:py-10">
					<WorkedWith />
				</section>
			</Fade>
			<Fade triggerOnce>
				<section className="py-8 md:py-10">
					<Speakers limit={5} />
				</section>
			</Fade>
			<Fade triggerOnce>
				<section className="py-8 md:py-28">
					<Team limit={5} />
				</section>
			</Fade>
			<Fade triggerOnce>
				<section className="py-8 md:py-28">
					<div className="mx-auto">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							Find us here.
						</h1>
						<iframe
							loading="lazy"
							title="mtc location"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.859667406162!2d77.33048757549759!3d28.543937475713264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44e80a9461b%3A0x302ec8d3d5cb8d1a!2sAmity%20University%20Noida!5e0!3m2!1sen!2sin!4v1756150799216!5m2!1sen!2sin"
							className="w-full rounded-2xl shadow-lg"
							height="500"
							style={{
								border: 0,
								// width: "100%",
							}}
							allowFullScreen=""
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</section>
			</Fade>
		</div>
	);
}

export function AboutMTC(params) {
	return (
		<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28">
			<div className="col-span-6 mx-auto md:order-last">
				<CustomImage
					src={
						msaLogo
					}	
					className="mx-auto h-52 object-contain sm:h-96"
					alt="Microsoft Student Ambassadors"
				/>
			</div>
			<div className="col-span-6">
				<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
					About Microsoft Student Ambassadors
				</h1>
				<h1 className="mb-4 text-lg font-medium  lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
					The Microsoft Student Ambassadors (MSA) program is a global initiative
					by Microsoft that empowers university students to become community
					leaders, tech evangelists, and innovators on campus. Ambassadors gain
					access to exclusive resources like Azure credits, technical
					certifications, and mentorship opportunities, while also learning
					leadership skills by organizing workshops, hackathons, and tech talks.
					The program follows a milestone-based journey—Alpha, Beta, and
					Gold—rewarding students for continuous learning and community impact.
					Beyond technical growth, it provides a platform to connect with a
					global network of peers and Microsoft professionals, enabling students
					to inspire others while shaping their own careers in technology.
				</h1>
				<div>
					<Link
						to={"https://mvp.microsoft.com/"}
						target="_blank"
						rel="noreferrer"
						className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
					>
						<span className="">Learn more about MSA Program</span>
					</Link>
				</div>
			</div>
		</section>
	);
}

export function AboutMSA() {
	return (
		<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28">
			<div className="col-span-6 mx-auto">
				<CustomImage
					src={memory1}
					className={`mx-auto mb-8 hidden h-52 object-contain dark:block sm:h-72`}
					alt="mtc 11"
				/>
			</div>
			<div className="col-span-6">
				<h1 className="mb-4 text-4xl font-bold tracking-tight lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
					About Microsoft Tech Community
				</h1>
				<p className="mb-4  text-lg font-medium lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
					The Microsoft Tech Community (MTC) is a student-led initiative built
					around the Microsoft Student Ambassadors (MSA) program, designed to
					bring together learners passionate about technology, innovation, and
					collaboration. These communities exist at the university or regional
					level, where ambassadors and core members organize workshops,
					hackathons, study groups, and hands-on projects to spread knowledge of
					Microsoft technologies like Azure, AI, and Power Platform. The MTC
					provides a supportive environment for students to learn by doing,
					connect with industry professionals, and collaborate on real-world
					challenges. By participating, members not only upskill in cutting-edge
					tech but also build leadership, teamwork, and communication skills,
					making the community a gateway to both personal growth and career
					opportunities in the global tech ecosystem.
				</p>
			</div>
		</section>
	);
}

function Memories() {
	return (
<div>
  <h2 className="mb-12 text-center text-4xl font-bold">
    Memories from Previous Events
  </h2>
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    <div className="grid gap-6">
      <div>
        <CustomImage
          className="h-full w-full rounded-2xl object-contain"
          src={memory1}
          alt=""
        />
      </div>
      <div>
        <CustomImage
          className="h-full w-full rounded-2xl object-contain"
          src={memory2}
          alt=""
        />
      </div>
      <div>
        <CustomImage
          className="h-full w-full rounded-2xl object-contain"
          src={memory3}
          alt=""
        />
      </div>
    </div>
    <div className="grid gap-6">
      <div>
        <CustomImage
          className="h-full w-full rounded-2xl object-contain"
          src={memory4}
          alt=""
        />
      </div>
      <div>
        <CustomImage
          className="h-full w-full rounded-2xl object-contain"
          src={memory5}
          alt=""
        />
      </div>
      <div>
        <CustomImage
          className="h-full w-full rounded-2xl object-contain"
          src={memory6}
          alt=""
        />
      </div>
    </div>
    <div className="grid gap-6">
      <div>
        <CustomImage
          className="h-full w-full rounded-2xl object-contain"
          src={memory7}
          alt=""
        />
      </div>
      <div>
        <CustomImage
          className="h-full w-full rounded-2xl object-contain"
          src={memory8}
          alt=""
        />
      </div>
      <div>
        <CustomImage
          className="hidden h-full w-full rounded-2xl object-contain md:block"
          src={memory9}
          alt=""
        />
      </div>
    </div>
  </div>
</div>

	);
}

function Perks() {
	return (
		<div className="hadow-xl bbg-white rounded-2xl py-24 sm:py-10">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="mb-12 text-center text-4xl font-bold">
					Microsoft Tech Community Perks
				</h2>
				<div className="mx-auto mt-10 grid max-w-lg items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-12">
					<div className="col-span-4 flex flex-col items-center gap-4">
						<CustomImage
							className="h-14 w-14 object-contain"
							src="https://sections-congress.ieee.org/assets/img/site_images/home/network.webp"
							alt=""
						/>
						<div className="text-2xl font-bold">Network</div>
						<p className="text-center">
							Network and build relationships with other people at technical
							events.
						</p>
					</div>
					<div className="col-span-4 flex flex-col items-center gap-4">
						<CustomImage
							className="h-14 w-14 object-contain"
							src="https://sections-congress.ieee.org/assets/img/site_images/home/learn.webp"
							alt=""
						/>
						<div className="text-2xl font-bold">Learn</div>
						<p className="text-center">
							To provide an opportunity for attendees to gain information and
							training skills.
						</p>
					</div>
					<div className="col-span-4 flex flex-col items-center gap-4">
						<CustomImage
							className="h-14 w-14 object-contain"
							src="https://sections-congress.ieee.org/assets/img/site_images/home/goal.webp"
							alt=""
						/>
						<div className="text-2xl font-bold">Plan ahead</div>
						<p className="text-center">
							Collectively shape the future and goals of the Microsoft
							Ecosystem.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

function WorkedWith() {
	return (
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<h2 className="mb-12 text-center text-4xl font-bold">Trusted By</h2>
			<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
				<a
					href="https://zomato.com/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
						src={
							"https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png"
						}
						alt="Zomato"
					/>
				</a>
				<a
					href="https://reskilll.com/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
						src={
							"https://storage.googleapis.com/reskilll/Reskilll-logo-500px500px%20(1)%201cj4CbQU.png"
						}
						alt="Reskilll"
					/>
				</a>
				<a
					href="https://reskilll.com/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
						src={
							"https://storage.googleapis.com/reskilll/azdev-logo-OhXLx4O.png"
						}
						alt="Reskilll"
					/>
				</a>
				<a
					href="https://amity.edu/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
						src={
							"https://upload.wikimedia.org/wikipedia/en/f/ff/Amity_University_logo.png"
						}
						alt="Amity"
					/>
				</a>
			</div>
		</div>
	);
}

