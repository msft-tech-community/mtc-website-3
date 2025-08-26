function toggleThemeClassname(isLight) {
	["dark"].map((className) =>
		document.documentElement.classList.toggle(className, !isLight) // dark when not light
	);

	["light"].map((className) =>
		document.documentElement.classList.toggle(className, isLight)
	);
}

export default function toggleDarkTheme() {
	const isDark = document.documentElement.classList.contains("dark");

	// toggle and store
	localStorage.setItem("darkMode", !isDark);
	toggleThemeClassname(isDark);
}

export function setInitialTheme() {
	const stored = localStorage.getItem("darkMode");

	// New users: force dark
	if (stored === null) {
		toggleThemeClassname(false); // false = not light → dark
		localStorage.setItem("darkMode", true);
		return;
	}

	// Existing users
	if (JSON.parse(stored) === true) {
		// darkMode = true → dark
		toggleThemeClassname(false);
	} else {
		// darkMode = false → light
		toggleThemeClassname(true);
	}
}
