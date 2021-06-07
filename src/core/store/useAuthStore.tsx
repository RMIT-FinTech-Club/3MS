import create, { SetState, GetState } from "zustand";

type AuthStore = {
	isLoggedIn: boolean;
	login: () => void;
	register: () => void;
	logout: () => void;
};

const useAuthStore = create<AuthStore>(
	(set: SetState<AuthStore>, get: GetState<AuthStore>) => ({
		isLoggedIn: false,
		login: () => {
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
