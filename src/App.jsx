import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./app/components/AppLayout.jsx";
import Speaker from "./app/components/Speaker.jsx";
import Speakers from "./app/components/Speakers.jsx";
// import CanvasCursor from "./app/components/CanvasCursor.jsx";
import { ErrorPage } from "./app/error-page.jsx";
import AboutUs from "./app/pages/AboutUs.page.jsx";
import ChallengeDetailsPage from "./app/pages/ChallengeDetails.page.jsx";
import { ChallengesPage } from "./app/pages/Challenges.jsx";
import ContactPage from "./app/pages/Contact.page.jsx";
import HomePage from "./app/pages/Home.page.jsx";
import { WinnersPage } from "./app/pages/Winners.jsx";
import { setInitialTheme } from "./app/utils/themeSwitcher.js";

setInitialTheme();

const router = createBrowserRouter([
	{
		element: <AppLayout></AppLayout>,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				// index: true,
				element: <HomePage />,
			},
			{
				path: "challenges/:challengeSlug",
				element: <ChallengeDetailsPage />,
			},
			{
				path: "speakers",
				element: <Speakers />,
			},
			{
				path: "speakers/:speakerSlug",
				element: <Speaker />,
			},
			{
				path: "about-us",
				element: <AboutUs />,
			},
			{
				path: "contact",
				element: <ContactPage />,
			},
			{
				path: "challenges",
				element: <ChallengesPage />,
			},
			{
				path: "awards",
				element: <WinnersPage />,
			},
			{
				path: "*",
				element: <HomePage />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
