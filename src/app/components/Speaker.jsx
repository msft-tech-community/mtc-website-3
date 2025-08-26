import {
	faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CustomImage from "./CustomImage";

export default function Speaker() {
	const { speakerSlug } = useParams();

	const [speakersData, setSpeakersData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			fetch("/assets/speakers.json")
				.then((response) => response.json())
				.then((response) => {
					setSpeakersData(response);
				})
				.catch((err) => console.error(err));
		};
		getData();
	}, []);

	const currentSpeaker = speakersData?.find((s) => s.slug === speakerSlug);
	if (!currentSpeaker) return null;

	return (
		<div className="mx-auto max-w-3xl">
			<div className="mb-8 inline-block text-sm">
				<Link to="/speakers" className="text-gray-700 dark:text-gray-300">
					<FontAwesomeIcon icon={faChevronLeft} />{" "}
					<span className="font-bold hover:underline">Back to Speakers</span>
				</Link>
			</div>

			<div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
				<div className="col-span-full md:col-span-4">
					<CustomImage
						src={currentSpeaker.imageSmall.url}
						alt=""
						className="mx-auto h-60 rounded-lg object-cover"
					/>
				</div>
				<div className="col-span-full flex flex-col gap-4 md:col-span-8">
					<div className="">
						<div className="flex justify-between">
							<div className="text-2xl font-bold">{currentSpeaker.name}</div>
						</div>
					</div>
					<div>
						<div className="font-semibold text-gray-600 dark:text-gray-400">
							About
						</div>
						<p>
							{currentSpeaker.bio ||
								"Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions."}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
