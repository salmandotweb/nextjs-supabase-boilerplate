"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import {
	useSessionContext,
	useSupabaseClient,
} from "@supabase/auth-helpers-react";

const SignIn = () => {
	const supabaseClient = useSupabaseClient();

	return (
		<div className="grid grid-cols-2 items-center min-h-screen">
			<div className="w-full h-full bg-slate-900"></div>
			<div className="flex items-center justify-center">
				<div className="w-[400px]">
					<Auth
						supabaseClient={supabaseClient}
						providers={["google"]}
						magicLink={true}
						appearance={{
							theme: ThemeSupa,
							variables: {
								default: {
									colors: {
										brand: "#0D121F",
										brandAccent: "#8057f0",
									},
								},
							},
						}}
						theme="light"
					/>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
