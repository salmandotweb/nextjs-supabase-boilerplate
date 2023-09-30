import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const withFeatures = [
	{
		title:
			"Analyze your business cost easily with group transaction thorugh tagging feature.",
	},
	{
		title:
			"Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment.",
	},
	{
		title:
			"Arrange your business expenses by date, name, etc., with just one click.",
	},
];

const withoutFeatures = [
	{
		title:
			"Complex recording process due to every administrative file in a different place.",
	},
	{
		title:
			"Need more effort to pay manually one by one invoice because there is no payment accommodation.",
	},
	{
		title:
			"Manual data arranging needs a long time because the different months/years are not in the same place.",
	},
];

const WhyUs: React.FC = () => {
	return (
		<div className="flex flex-col items-start justify-start gap-8 min-h-[80vh] px-[50px] lg:px-[200px]">
			<div className="flex flex-col items-start gap-2">
				<p className="font-medium uppercase text-primary">
					Increase Productivity
				</p>
				<h2 className="text-4xl font-semibold">
					Reduce Time in Doing Manual Work <br /> Managing Expenses
				</h2>
			</div>

			<Tabs defaultValue="with" className="w-full">
				<TabsList>
					<TabsTrigger value="with">With Career</TabsTrigger>
					<TabsTrigger value="without">Without Career</TabsTrigger>
				</TabsList>
				<TabsContent value="with">
					<div className="flex items-start gap-2 justify-between w-full mt-16">
						<div className="flex flex-col items-start gap-6">
							<h1 className="text-[24px] font-semibold">
								Track Business Expenses until its Milisecond
							</h1>
							<div className="flex flex-col gap-4">
								{withFeatures.map((feature, index) => (
									<div key={index} className="flex items-start gap-2">
										<Image
											src="/images/pricing/included.svg"
											width={20}
											height={20}
											alt="Included"
										/>
										<p className="text-[#18] font-normal w-[650px] mt-[-2px]">
											{feature.title}
										</p>
									</div>
								))}
							</div>
						</div>
						<div className="min-h-[434px] w-[486px] bg-slate-800 rounded-lg"></div>
					</div>
				</TabsContent>
				<TabsContent value="without">
					<div className="flex items-start gap-2 justify-between w-full mt-16">
						<div className="flex flex-col items-start gap-6">
							<h1 className="text-[24px] font-semibold">
								Taking too long to tidy up administrative files makes <br /> it
								unproductive
							</h1>
							<div className="flex flex-col gap-4">
								{withoutFeatures.map((feature, index) => (
									<div key={index} className="flex items-start gap-2">
										<Image
											src="/images/pricing/close-circle.svg"
											width={20}
											height={20}
											alt="Included"
										/>
										<p className="text-[#18] font-normal w-[650px] mt-[-2px]">
											{feature.title}
										</p>
									</div>
								))}
							</div>
						</div>
						<div className="min-h-[434px] w-[486px] bg-slate-800 rounded-lg"></div>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default WhyUs;
