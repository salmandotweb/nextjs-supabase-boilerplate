import { Button } from "@/components/ui/button";

const Header = () => {
	return (
		<div className="w-full min-h-[80vh] flex items-center justify-center flex-col text-center relative overflow-hidden gap-6">
			<h1 className="text-7xl font-bold leading-snug">
				All your business <br />
				expenses in one place.
			</h1>
			<p className="text-[#90A3BF] text-xl leading-normal">
				Your one-stop finance empower platform. <br /> Manage all your business
				expenses with our supafast app.
			</p>
			<div className="flex items-center justify-center gap-6">
				<Button variant="default">Get a Free Demo</Button>
				<Button variant="secondary">See Pricing</Button>
			</div>
		</div>
	);
};

export default Header;
