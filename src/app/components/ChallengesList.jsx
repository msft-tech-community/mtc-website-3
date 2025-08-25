import { useEffect, useState } from "react";
import ChallengeListItem from "./ChallengeListItem";

export default function ChallengesList() {
	const [challengesData, setChallengesData] = useState([]);
	useEffect(() => {
		const getData = async () => {
			fetch("/assets/challenges.json")
				.then((response) => response.json())
				.then((response) => {
					setChallengesData(response);
				})
				.catch((err) => console.error(err));
		};
		getData();
	}, []);
	const enabledChallenges = challengesData?.filter((e) => e.enabled === true);
	return (
		<div>
			<div className="mb-8">
				<div className="mb-4 text-4xl font-bold">Events</div>
				<div className="text-gray-600 dark:text-gray-400">
					See our technical and non-technical events.
				</div>
			</div>
			<div className="flex flex-col gap-8">
				{!!enabledChallenges?.length && (
					<div>
						<div className="grid grid-cols-12 gap-y-4 md:gap-4">
							{enabledChallenges
								.slice()
								.reverse()
								.map((e) => {
									return (
										<div className="col-span-12 md:col-span-4" key={e.slug}>
											<ChallengeListItem data={e} />
										</div>
									);
								})}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
