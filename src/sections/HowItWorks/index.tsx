import { Button } from "@/components/ui/button";

const data = [
	{
		step: "01",
		title: "Create Account",
	},
	{
		step: "02",
		title: "Add Bank Account",
	},
	{
		step: "03",
		title: "Add Expenses",
	},
];

const HowItWorks: React.FC = ({}) => {
	return (
		<div className="flex flex-col items-center justify-start gap-16 min-h-[70vh] text-center">
			<div className="flex flex-col items-center justify-center gap-2">
				<p className="font-semibold uppercase text-primary">How it works?</p>
				<h1 className="text-[40px] font-semibold">Few Easy Steps and Done</h1>
				<p className="text-slate-500">
					In just few easy step, you are all set to manage your business
					finances. <br />
					Manage all expenses with Spend.In all in one place.
				</p>
			</div>

			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-20">
				{data.map((item, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-center gap-2 relative">
						<div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-primary absolute top-[-20px] left-[-20px]">
							<p className="text-white">{item.step}</p>
						</div>
						<div className="h-[200px] w-[200px] rounded-lg bg-slate-800"></div>
						<p className="text-slate-500">{item.title}</p>
					</div>
				))}
			</div>

			<div className="flex items-center justify-center gap-4">
				<Button>Get a Free Demo</Button>
				<Button variant="outline">See Pricing</Button>
			</div>
		</div>
	);
};

export default HowItWorks;
