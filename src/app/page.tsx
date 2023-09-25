"use client";

import { ModeToggle } from "@/components/theme-toggle";
import { useUser } from "@/hooks/useUser";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import {
	useSessionContext,
	useSupabaseClient,
} from "@supabase/auth-helpers-react";

export default function Home() {
	const { user } = useUser();
	const { session } = useSessionContext();

	const supabaseClient = useSupabaseClient();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{user ? (
				<ModeToggle />
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
