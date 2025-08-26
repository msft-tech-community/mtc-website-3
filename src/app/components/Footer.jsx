import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import routes from "../routes";
import { twMerge } from "tailwind-merge";
import {
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
	return (
		<footer className="container mx-auto p-4 md:px-6 md:py-8">
			<div className="flex flex-col items-center gap-4 sm:justify-between lg:flex-row">
				<div className="hidden flex-wrap items-center gap-2 text-sm lg:flex">
					<Link
						to={"https://rajatrajput.dev/"}
						target="_blank"
						className="font-semibold"
					>
						© 2025 All rights reserved.
					</Link>
				</div>

				<div className="hidden items-center gap-4 md:flex">
					<ul className="ffont-['space_mono'] flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400">
						{routes
							.filter((r) => !r.mobile)
							.filter((r) => !(r.type === "group"))
							.map((route) => (
								<li className="" key={route.title}>
									<NavLink
										target={route.external && "_blank"}
										className={({ isActive, isPending }) =>
											twMerge(
												"hover: focus: block p-4 px-4 text-gray-600 transition-all duration-75 hover:underline focus:font-bold dark:text-gray-400 dark:hover:text-gray-200",
												isActive
													? "font-bold  text-black dark:text-gray-200"
													: isPending
													? ""
													: ""
											)
										}
										to={route.href}
									>
										{route.title}
									</NavLink>
								</li>
							))}
					</ul>
					<div className="hidden lg:block">
						<ThemeToggle />
					</div>
					<Link
						to="https://github.com/msft-tech-community"
						aria-label="github repo"
						target="_blank"
					>
						<FontAwesomeIcon icon={faGithub} className="block h-5 w-5 p-2" />
					</Link>
				</div>
			</div>
		</footer>
	);
}
