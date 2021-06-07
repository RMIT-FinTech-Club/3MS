import create, { SetState, GetState } from "zustand";
import { supabase } from "../config/supabase-client";

type AuthStore = {
	isLoggedIn: boolean;
	login: ({ email, password }) => void;
	register: () => void;
	logout: () => void;
};

const useAuthStore = create<AuthStore>(
	(set: SetState<AuthStore>, get: GetState<AuthStore>) => ({
		isLoggedIn: false,
		login: ({ email, password }) => {
			supabase.auth.signUp({
				email,
				password,
			});
			set({ isLoggedIn: true });
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
