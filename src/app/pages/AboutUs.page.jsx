import Team from "../components/Team";
import { ContactForm } from "./Contact.page";
import { AboutMSA, AboutMTC } from "./Home.page";
import { Fade } from "react-awesome-reveal";

export default function AboutUs() {
	return (
		<div>
			<Fade triggerOnce>
				<AboutMSA />
				<AboutMTC />
			</Fade>

			<Fade triggerOnce>
				<Team />
			</Fade>

			<Fade triggerOnce>
				<ContactForm />
			</Fade>
		</div>
	);
}
