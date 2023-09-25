"use client";

import { useUser } from "@/hooks/useUser";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Button } from "@/components/ui/button";

export default function Home() {
	const { user } = useUser();

	const supabaseClient = useSupabaseClient();

	const handleLogout = async () => {
		const { error } = await supabaseClient.auth.signOut();

		if (error) {
			console.error(error);
		}
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{user ? (
				<div>
					<Button onClick={handleLogout}>Logout</Button>
				</div>
			) : (
				<div className="w-[300px]">
					<Auth
						supabaseClient={supabaseClient}
						providers={["github"]}
						magicLink={true}
						appearance={{
							theme: ThemeSupa,
							variables: {
								default: {
									colors: {
										brand: "#404040",
										brandAccent: "#22c55e",
									},
								},
							},
						}}
						theme="dark"
					/>
				</div>
			)}
		</main>
	);
}
