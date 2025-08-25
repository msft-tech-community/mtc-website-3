import LogoOnBlack from "../../assets/Logo on black (Custom).png";
import LightLogo from "../../assets/main logo (3) (Custom).png";
import Logo from "../../assets/main logo black (Custom).png";

// memories assets
// import memory2 from "../../assets/memories/356551992_226751036434551_8933123460754285924_n.jpg";
import memory2 from "../../assets/memories/320777930_2311490175678507_4343281339549131430_n.jpg";
import memory3 from "../../assets/memories/356597928_284785967424808_4014952816457019128_n.jpg";
// import memory4 from "../../assets/memories/356638153_1045852983243072_6319438153536457058_n.jpg";
import memory4 from "../../assets/memories/320890318_2005696479633031_3916944159098055484_n.jpg";
import memory5 from "../../assets/memories/356779690_1021512152540830_7436088057197797763_n.jpg";
// import memory6 from "../../assets/memories/356870057_205006965857961_5503311855628802179_n.jpg";
import memory6 from "../../assets/memories/322250720_721543699171031_4597921719413023052_n.jpg";
import memory7 from "../../assets/memories/356882005_272016892113248_6469925021621114931_n.jpg";
// import memory8 from "../../assets/memories/357311497_1034866187885516_4807505043687124219_n.jpg";
import memory8 from "../../assets/memories/321296201_1206807523592277_5346561523774336230_n.jpg";
import memory9 from "../../assets/memories/358218740_2128948947437461_3099469010629116758_n.jpg";
import memory10 from "../../assets/memories/358619396_222649417397966_6373005098322693727_n.jpg";

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
					<AboutCongress />
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
					<SponsoredBy />
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
							title="tsyp location"
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12851.062625886407!2d10.5328555!3d36.3664548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13029e020677bc0d%3A0x82fe8c3faf57e873!2sDiar%20Lemdina!5e0!3m2!1sen!2stn!4v1682280141809!5m2!1sen!2stn"
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
					src={"https://i.imgur.com/EpXVkCB.png"}
					className="mx-auto h-52 object-contain sm:h-96"
					alt="TSYP 11"
				/>
			</div>
			<div className="col-span-6">
				<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
					About IEEE Tunisia Section.
				</h1>
				<h1 className="mb-4 text-lg font-medium  lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
					Founded in 2008, the IEEE Tunisia Section is dedicated to spreading
					IEEE initiatives throughout Tunisia. This is achieved through
					educational and technical programs, networking opportunities, and the
					advancement of technology and its applications to address humanitarian
					challenges. The section actively supports chapters, special interest
					groups, student activities, and student awards. IEEE has firmly
					established its presence in the Tunisian engineering community, with
					over 43 Student Branches located across various engineering schools,
					faculties, and universities.
				</h1>
				<div>
					<Link
						// type="button"
						to={"https://ieee.tn/"}
						target="_blank"
						rel="noreferrer"
						className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
					>
						{/* <div className="flex flex-wrap items-center justify-start gap-2"> */}
						<span className="">Learn more IEEE Tunisia Section</span>
						{/* </div> */}
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
					src={LogoOnBlack || Logo}
					className={`mx-auto mb-8 hidden h-52 object-contain dark:block ${
						LogoOnBlack ? "" : "dark:invert"
					} sm:h-48`}
					alt="TSYP 11"
				/>

				<CustomImage
					src={LightLogo}
					className="mx-auto h-56 object-contain dark:hidden sm:h-60"
					alt="TSYP 11"
				/>
			</div>
			<div className="col-span-6">
				<h1 className="mb-4 text-4xl font-bold tracking-tight lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
					About IEEE TSYP Congress.
				</h1>
				<p className="mb-4  text-lg font-medium lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
					The Tunisian Students and Young Professionals (TSYP) Congress is an
					annual gathering of IEEE members in Tunisia. Organized by IEEE ESSTHS
					Student Branch and IEEE Tunisia Section, the 11th edition provides a
					unique opportunity to delve into current and future challenges in
					science and engineering, connect with the national and international
					IEEE network, and share experiences, under the theme Silicon Valley.
				</p>
			</div>
		</section>
	);
}

function Memories() {
	return (
		<div>
			<h2 className="mb-12 text-center text-4xl font-bold">
				Memories from Previous Editions
			</h2>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				<div className="grid gap-6">
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory10}
							alt=""
						/>
					</div>
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory2}
							alt=""
						/>
					</div>
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory3}
							alt=""
						/>
					</div>
				</div>
				<div className="grid gap-6">
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory4}
							alt=""
						/>
					</div>
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory5}
							alt=""
						/>
					</div>
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory6}
							alt=""
						/>
					</div>
				</div>
				<div className="grid gap-6">
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory7}
							alt=""
						/>
					</div>
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory8}
							alt=""
						/>
					</div>
					<div>
						<CustomImage
							className="hidden h-full w-full rounded-2xl object-cover md:block "
							src={memory9}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

function AboutCongress() {
	return (
		<div className="hadow-xl bbg-white rounded-2xl py-24 sm:py-10">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="mb-12 text-center text-4xl font-bold">
					About TSYP Congress 2023
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
							Network and build relationships with other volunteers within IEEE.
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
							To provide an opportunity for delegates to gain information and
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
							Collectively shape the future and goals of the IEEE.
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
			<h2 className="mb-12 text-center text-4xl font-bold">Powered By</h2>
			<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
				<a
					href="https://ieee.tn/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
						src={"https://i.imgur.com/EpXVkCB.png"}
						alt="IeeeTunisia"
						// width={200}
						// height={200}
					/>
				</a>
				{true && (
					<a
						href="https://yp.ieee.tn/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 dark:invert md:h-[200px] md:w-[200px] lg:col-span-1"
							src={"https://i.imgur.com/0JYgUki.png"}
							alt="YpTunisia"
							// width={200}
							// height={200}
						/>
					</a>
				)}
				<a
					href="http://www.essths.rnu.tn/public/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105 dark:invert"
				>
					<CustomImage
						className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
						src={"https://i.imgur.com/Sdkbxfe.png"}
						alt="essthsLogo"
						// width={200}
						// height={200}
					/>
				</a>
				<a
					href="https://uso.rnu.tn/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105 dark:invert"
				>
					<CustomImage
						className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
						src={"https://i.imgur.com/HalSgE1.png"}
						alt="university of sousse"
						// width={200}
						// height={200}
					/>
				</a>
				<a
					href="https://essths.ieee.tn/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105 dark:invert"
				>
					<CustomImage
						className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
						src={"https://i.imgur.com/Sdkbxfe.png"}
						alt="IEEE ESSTHS SB"
						// width={200}
						// height={200}
					/>
				</a>
			</div>
		</div>
	);
}

function SponsoredBy() {
	return (
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<h2 className="mb-12 text-center text-4xl font-bold">IEEE Partners</h2>
			<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
				<a
					href="https://ieeer8.org/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[180px] md:w-[180px] lg:col-span-1"
						src={"https://i.imgur.com/mFTrYL2.png"}
						alt="Transistor"
						// width={200}
						// height={200}
					/>
				</a>
				<a
					href="https://ieeer8.org/student-activities/sa-committee/sac/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] rounded-full bg-white object-contain p-4 shadow-md shadow-gray-200 transition hover:scale-105 dark:shadow-gray-800 dark:invert md:h-[180px] md:w-[180px] lg:col-span-1"
						src={"https://i.imgur.com/uO5riCW.png"}
						alt="Transistor"
						// width={200}
						// height={200}
					/>
				</a>
				<a
					href="https://ieee-aess.org/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 dark:invert md:h-[180px] md:w-[180px] lg:col-span-1"
						src={"https://i.imgur.com/cV1QOQg.png"}
						alt="Transistor"
						// width={200}
						// height={200}
					/>
				</a>
				<a
					href="https://yp.ieee.org/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[180px] md:w-[180px] lg:col-span-1"
						src={"https://i.imgur.com/rJu8XVi.png"}
						alt="Transistor"
						// width={200}
						// height={200}
					/>
				</a>
				<a
					href="https://mtt.org/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[180px] md:w-[180px] lg:col-span-1"
						src={"https://i.imgur.com/zGQmYnj.jpg"}
						alt="Transistor"
						// width={200}
						// height={200}
					/>
				</a>
				<a
					href="https://www.ieee-ies.org/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[180px] md:w-[180px] lg:col-span-1"
						src={"https://i.imgur.com/Usd3WQr.png"}
						alt="Transistor"
						// width={200}
						// height={200}
					/>
				</a>
				<a
					href="https://life.ieee.org/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[180px] md:w-[180px] lg:col-span-1"
						src={"https://i.imgur.com/y3Ulw1e.png"}
						alt="Transistor"
						// width={200}
						// height={200}
					/>
				</a>
				<a
					href="https://entrepreneurship.ieee.org/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[180px] md:w-[180px] lg:col-span-1"
						src={"https://i.imgur.com/cpdzd8G.png"}
						alt="Transistor"
						// width={200}
						// height={200}
					/>
				</a>
				<a
					href="https://ieee-edusociety.org/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[180px] md:w-[180px] lg:col-span-1"
						src={"https://i.imgur.com/RxAnk66.png"}
						alt="Transistor"
						// width={200}
						// height={200}
					/>
				</a>
			</div>
		</div>
	);
}
