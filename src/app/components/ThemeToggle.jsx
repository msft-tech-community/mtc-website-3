import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import toggleDarkTheme from "../utils/themeSwitcher";

export default function ThemeToggle() {
	// return null;
	return (
		<button
			type="button"	
			className="inline-flex items-center rounded-lg p-2.5 text-sm text-gray-500 transition hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
			onClick={() => toggleDarkTheme()}
			aria-label="theme toggle"
		>
			<FontAwesomeIcon
				icon={faMoon}
				size="xl"
				className="h-5 w-5 dark:hidden"
			/>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="hidden h-6 w-6 dark:block"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
				/>
			</svg>
		</button>
	);
}
