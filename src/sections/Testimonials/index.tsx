import { Separator } from "@/components/ui/separator";

interface Testimonial {
	title: string;
	description: string;
	user: {
		image: string;
		name: string;
		role: string;
	};
}

const data: Testimonial[] = [
	{
		title: "It’s just incredible!",
		description:
			"It’s just 1 month since I’m using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!",
		user: {
			image: "/images/testimonials/user1.png",
			name: "Rizky Ramadhan",
			role: "CEO of RAR Tech",
		},
	},
	{
		title: "Satisfied User Here!",
		description:
			"Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!",
		user: {
			image: "/images/testimonials/user2.png",
			name: "Natasha Romanoff",
			role: "CEO of Black Widow",
		},
	},
	{
		title: "No doubt, Spend.In is the best!",
		description:
			"“The best”! That’s what I want to say to this platform, didn’t know that there’s a platform to help you manage your business expenses like this! Very recommended to you who have a big business!",
		user: {
			image: "/images/testimonials/user3.png",
			name: "Moritika Kazuki",
			role: "Finance Manager at Mangan",
		},
	},
];

const Testimonials: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-start gap-16 min-h-[70vh] text-center">
			<div className="flex flex-col items-center justify-center gap-2">
				<p className="font-semibold uppercase text-primary">What they say</p>
				<h1 className="text-[40px] font-semibold">Our User Kind Words</h1>
				<p className="text-slate-500">
					Here are some testimonials from our user after using Spend.In <br />{" "}
					to manage their business expenses.
				</p>
			</div>

			<div className="flex items-center gap-8 flex-wrap">
				{data.map((item, index) => (
					<Card key={index} {...item} />
				))}
			</div>
		</div>
	);
};

export default Testimonials;

const Card = ({ title, description, user }: Testimonial) => {
	return (
		<div className="flex flex-col items-start text-start justify-between gap-3 p-6 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-[350px] min-h-[320px]">
			<div className="flex flex-col items-start text-start gap-3">
				<p className="text-[18px] font-medium">{title}</p>
				<p className="text-slate-500 text-[15px] font-light">{description}</p>
			</div>
			<div className="w-full flex flex-col items-start gap-3">
				<Separator />
				<div className="flex items-center gap-3">
					<img
						src={user.image}
						alt={user.name}
						className="w-[60px] h-[60px] rounded-full"
					/>
					<div className="flex flex-col items-start">
						<p className="text-[16px] font-semibold">{user.name}</p>
						<p className="text-slate-500 text-[14px]">{user.role}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
