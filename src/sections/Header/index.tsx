import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
	return (
		<div className="w-full min-h-[80vh] my-8 bg-gray-900 py-4 px-16 rounded-lg flex items-center justify-between relative overflow-hidden">
			<div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-gray-800 to-transparent" />
			<div className="flex flex-col items-start gap-4 w-[50%]">
				<p className="font-thin text-slate-200">
					Level Up Your Career in Tech with CareerSync: The Ultimate Resume
					Builder
				</p>
				<h1 className="text-5xl text-white">
					Create a jaw-dropping resume effortlessly, customized for tech
					professionals.
				</h1>
				<Link href="/builder">
					<Button size="sm">Build My Resume Now</Button>
				</Link>
			</div>
			<div className="flex items-center justify-end w-[50%]">
				<div className="h-[650px] w-[600px] bg-gray-800 rounded-lg" />
				{/* <Image
					src="/images/featureTemplate.png"
					width={500}
					height={300}
					alt="careersync"
				/> */}
			</div>
		</div>
	);
};

export default Header;
