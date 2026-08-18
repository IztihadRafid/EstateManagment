import { create } from "zustand";

interface AuthModalStore {
  isLoginOpen: boolean;
  isResgisterOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  openRegister: () => void;
  closeRegister: () => void;
  closeAll: () => void;
}
export const useAuthModal = create<AuthModalStore>((set) => ({
  isLoginOpen: false,
  isResgisterOpen: false,
  openLogin: () => set({ isLoginOpen: true, isResgisterOpen: false }),

  closeLogin: () => set({ isLoginOpen: false }),

  openRegister: () => set({ isResgisterOpen: true, isLoginOpen: false }),
  closeRegister: () => set({ isResgisterOpen: false }),
  closeAll: () => set({ isLoginOpen: false, isResgisterOpen: false }),
}));
