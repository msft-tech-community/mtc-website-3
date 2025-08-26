import { useRef, useState } from "react";

export default function ContactPage() {
	return (
		<div className="h-full">
			<ContactForm />
		</div>
	);
}

export function ContactForm({ title = "Contact us" }) {
	const form = useRef();
	const [isSuccess, setIsSuccess] = useState(false);
	const [isSending, setIsSending] = useState(false);

	const sendMessage = async (e) => {
		e.preventDefault();
		setIsSuccess(false);
		setIsSending(true);

		const formData = new FormData(form.current);
		const firstName = formData.get("first_name");
		const lastName = formData.get("last_name");
		const email = formData.get("email");
		const subject = formData.get("subject");
		const message = formData.get("message");

		// Payload for Discord webhook
		const payload = {
			content: `📩 **New Contact Form Submission**
**Name:** ${firstName} ${lastName}
**Email:** ${email}
**Subject:** ${subject}
**Message:** ${message}`,
		};

		try {
			const res = await fetch("https://discord.com/api/webhooks/1409831038125084672/3mJW5oU7-FA-d6wW3L8wYlxAVjQ93vh8okEpHs5lxxgTjPT88GNSeFz4I7hSTYX58r8s", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			if (res.ok) {
				setIsSuccess(true);
				form.current.reset();
			} else {
				console.error("❌ Failed:", res.status, await res.text());
			}
		} catch (err) {
			console.error("⚠️ Error:", err);
		} finally {
			setIsSending(false);
		}
	};

	return (
		<section className="py-8 lg:py-16">
			<div className="max-w-8xl mx-auto px-4 lg:px-4">
				<div className="xl:mx-64 2xl:mx-80">
					<h1 className="mb-4 text-4xl font-bold lg:mb-7 lg:text-center lg:text-5xl lg:font-extrabold lg:leading-none">
						{title}
					</h1>
					<p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl">
						Let us know what you need and we will get back to you in no time.
					</p>
				</div>
			</div>
			<div className="max-w-8xl mx-auto px-4 lg:px-4">
				<div className="mx-auto max-w-3xl rounded-2xl border-2 border-gray-50 p-4 shadow-md dark:border-gray-800 lg:p-8">
					<form ref={form} onSubmit={sendMessage}>
						<div className="grid md:grid-cols-2 md:gap-8">
							<div className="mb-6">
								<label
									htmlFor="first_name"
									className="mb-2 block text-sm font-medium dark:text-gray-300"
								>
									First name
								</label>
								<input
									required
									type="text"
									id="first_name"
									name="first_name"
									placeholder="John"
									className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
								/>
							</div>
							<div className="mb-6">
								<label
									htmlFor="last_name"
									className="mb-2 block text-sm font-medium dark:text-gray-300"
								>
									Last name
								</label>
								<input
									required
									type="text"
									id="last_name"
									name="last_name"
									placeholder="Doe"
									className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
								/>
							</div>
						</div>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="mb-2 block text-sm font-medium dark:text-gray-300"
							>
								Email address
							</label>
							<input
								required
								type="email"
								id="email"
								name="email"
								placeholder="john.doe@company.com"
								className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="subject"
								className="mb-2 block text-sm font-medium dark:text-gray-300"
							>
								Subject
							</label>
							<input
								required
								type="text"
								id="subject"
								name="subject"
								placeholder="Subject name"
								className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="message"
								className="mb-2 block text-sm font-medium dark:text-gray-300"
							>
								Message
							</label>
							<textarea
								required
								id="message"
								name="message"
								rows={4}
								placeholder="Your message..."
								className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
							/>
						</div>

						<button
							className={`w-full rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white sm:w-auto ${
								isSending ? "opacity-50" : ""
							}`}
							type="submit"
							disabled={isSending}
						>
							{isSending ? "Sending..." : "Send message"}
						</button>

						{isSuccess && (
							<div className="mt-4 rounded-lg bg-green-50 p-4 text-sm text-green-800 dark:bg-gray-800 dark:text-green-400">
								✅ We've received your message and we'll get back to you soon!
							</div>
						)}
					</form>
				</div>
			</div>
		</section>
	);
}
