"use client";

import Navbar from "@/components/layout/Navbar";
import Header from "@/sections/Header";
import Pricing from "@/sections/Pricing";

export default function Home() {
	return (
		<main>
			<div className="bg-[#0D121F] px-[100px] text-white">
				<Navbar />
				<Header />
			</div>
			<Pricing />
		</main>
	);
}
