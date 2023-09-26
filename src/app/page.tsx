"use client";

import Navbar from "@/components/layout/Navbar";
import Features from "@/sections/Features";
import Header from "@/sections/Header";

export default function Home() {
	return (
		<main className="px-24">
			<Navbar />
			<Header />
			<Features />
		</main>
	);
}
