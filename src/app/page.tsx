"use client";

import Navbar from "@/components/layout/Navbar";
import Header from "@/sections/Header";
import HowItWorks from "@/sections/HowItWorks";
import Pricing from "@/sections/Pricing";
import Testimonials from "@/sections/Testimonials";
import WhyUs from "@/sections/WhyUs";

export default function Home() {
	return (
		<main>
			<div className="bg-[#0D121F] px-[100px] text-white">
				<Navbar />
				<Header />
			</div>
			<HowItWorks />
			<WhyUs />
			<Testimonials />
			<Pricing />
		</main>
	);
}
