import { User } from "@supabase/gotrue-js";
import create, { SetState, GetState } from "zustand";

type AuthStore = {
	isLoggedIn: boolean;
	currentUser: User | null;
	login: (user: User) => void;
	register: () => void;
	logout: () => void;
};

const useAuthStore = create<AuthStore>(
	(set: SetState<AuthStore>, get: GetState<AuthStore>) => ({
		isLoggedIn: false,
		currentUser: null,
		login: (user) => {
			set({ isLoggedIn: true, currentUser: user });
		},
		register: () => {
			set({ isLoggedIn: true });
		},
		logout: () => {
			set({ isLoggedIn: false });
		},
	})
);

export default useAuthStore;
