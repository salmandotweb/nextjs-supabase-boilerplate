import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Features = () => {
	return (
		<div className="w-full flex flex-col items-start gap-6 mt-24">
			<Badge variant="secondary">Explore Features</Badge>
			<h1 className="text-3xl font-medium">
				Empower your hiring: <br />
				explore <span>all-in-one</span> platform.
			</h1>
			<p>
				All-in-one recruiting platform, Evaluating candidates smartly,
				attracting <br /> passive job seekers.
			</p>
			<div className="flex items-center gap-4">
				<Button variant="default">Try for free!</Button>
				<Button variant="outline">View Demo</Button>
			</div>

			<div className="flex items-center justify-between w-full my-10">
				<div className="h-[400px] w-[400px] rounded-xl border flex flex-col items-start relative overflow-hidden">
					<div className="w-full h-1/2 bg-gradient-to-b from-gray-800 to-transparent"></div>
					<div className="w-full h-1/2"></div>
				</div>
				<div className="h-[400px] w-[400px] rounded-xl border flex flex-col items-start relative overflow-hidden">
					<div className="w-full h-1/2 bg-gradient-to-b from-gray-800 to-transparent"></div>
					<div className="w-full h-1/2"></div>
				</div>
				<div className="h-[400px] w-[400px] rounded-xl border flex flex-col items-start relative overflow-hidden">
					<div className="w-full h-1/2 bg-gradient-to-b from-gray-800 to-transparent"></div>
					<div className="w-full h-1/2"></div>
				</div>
			</div>
		</div>
	);
};

export default Features;
