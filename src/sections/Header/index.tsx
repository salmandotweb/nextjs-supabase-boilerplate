import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
	return (
		<div className="w-full h-[93vh] flex items-center justify-center flex-col text-center relative overflow-hidden gap-6 pt-[500px]">
			<h1 className="text-7xl font-bold leading-snug">
				All your business <br />
				expenses in one place.
			</h1>
			<p className="text-[#90A3BF] text-xl leading-normal">
				Your one-stop finance empower platform. <br /> Manage all your business
				expenses with our supafast app.
			</p>
			<div className="flex items-center justify-center gap-6 mb-[50px]">
				<Button variant="default">Get a Free Demo</Button>
				<Button variant="secondary">See Pricing</Button>
			</div>

			<Image
				src="/images/Dashboard.png"
				alt="Dashboard"
				width={1200}
				height={852}
			/>
		</div>
	);
};

export default Header;
