import { User } from "@supabase/gotrue-js";
import create, { SetState, GetState } from "zustand";
import { persist } from "zustand/middleware";

type AuthStore = {
	isLoggedIn: boolean;
	currentUser: User | null;
	authenticated: (user?: User) => void;
	unauthenticated: () => void;
};

const useAuthStore = create<AuthStore>(
	persist(
		(set: SetState<AuthStore>, get: GetState<AuthStore>) => ({
			isLoggedIn: false,
			currentUser: null,
			authenticated: (user) => {
				if (!user) {
					let tokenData: any = localStorage.getItem("supabase.auth.token");
					let supabaseData = JSON.parse(tokenData);
					let tempUser = supabaseData?.currentSession?.user;
					console.log(tempUser);
					if (tempUser) set({ isLoggedIn: true, currentUser: tempUser });
				} else {
					set({ isLoggedIn: true, currentUser: user as User });
				}
			},
			unauthenticated: () => {
				localStorage.removeItem("supabase.auth.token");
				set({ isLoggedIn: false, currentUser: null });
			},
		}),
		{
			name: "auth-storage", // unique name
			getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
		}
	)
);

export default useAuthStore;
