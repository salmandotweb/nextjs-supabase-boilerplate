import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { useState } from "react";
import data from "./pricing.json";
import PricingCard from "./card";

interface Pricing {
	type: string;
	icon: string;
	title: string;
	subTitle: string;
	pricing: string;
	pricingUnit: string;
	description: string;
	popular?: boolean;
	features: Feature[];
	button: string;
}

interface Feature {
	name: string;
	isIncluded: boolean;
}

const Pricing = () => {
	const [pricingData, setPricingData] = useState<Pricing[]>(data);
	const [isYearly, setIsYearly] = useState(true);

	return (
		<div
			className="flex flex-col items-center justify-center gap-2"
			id="pricing">
			<h1 className="text-3xl font-semibold">Ready to Get Started?</h1>
			<p className="text-[20px]">
				Choose a plan that suits your business needs
			</p>
			<div className="flex items-center gap-4 mt-6">
				<p className="text-[16px] font-medium">Monthly </p>
				<Switch
					checked={isYearly}
					onCheckedChange={(value) => {
						setIsYearly(value);
					}}
				/>
				<p className="text-[16px] font-medium">Yearly</p>
			</div>
			<div className="mt-2 relative">
				<Badge
					className="rounded-full bg-purple-50 px-4 py-2"
					variant="secondary">
					Save 65%
				</Badge>
				<div className="absolute top-0 right-[-50px]">
					<Image src="/images/arrow.png" alt="arrow" width={40} height={40} />
				</div>
			</div>

			<div className="flex items-start gap-6 mt-8 justify-center flex-wrap">
				{pricingData?.map((pricing, index) => {
					return <PricingCard key={index} {...pricing} />;
				})}
			</div>
		</div>
	);
};

export default Pricing;
