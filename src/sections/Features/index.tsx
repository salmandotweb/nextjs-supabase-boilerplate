import { Button } from "@/components/ui/button";
import Link from "next/link";

const Features = () => {
	return (
		<div className="w-full flex flex-col items-start gap-6 mt-24">
			<div className="flex items-start gap-4 w-full">
				<div className="flex flex-col items-start gap-4 w-[40%]">
					<h1 className="text-4xl">Why Careersync Stands Out</h1>
					<p className="text-xl text-gray-800 dark:text-gray-400">
						Careersync is the ultimate resume builder for tech professionals. We
						offer a variety of features that will help you create a jaw-dropping
						resume in minutes.
					</p>
					<Link href="/builder">
						<Button size="sm">Explore Resumes</Button>
					</Link>
				</div>
				<div className="w-[60%] rounded-lg bg-slate-800 h-[500px] backdrop-blur-md bg-opacity-40 p-4 shadow-lg"></div>
			</div>
			<div className="flex items-start w-full gap-10">
				<div className="w-[50%] rounded-lg bg-slate-800 h-[500px] backdrop-blur-md bg-opacity-40 p-4 shadow-lg"></div>
				<div className="w-[50%] rounded-lg bg-slate-800 h-[500px] backdrop-blur-md bg-opacity-40 p-4 shadow-lg"></div>
			</div>
		</div>
	);
};

export default Features;
