"use client";

import Navbar from "@/components/layout/Navbar";
import Features from "@/sections/Features";
import Header from "@/sections/Header";

export default function Home() {
	return (
		<main className="sm:w-[90%] md:w-[90%] lg:w-[80%] xl:w-[77%] mx-auto">
			<Navbar />
			<Header />
			<Features />
		</main>
	);
}
