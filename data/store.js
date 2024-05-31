import { create } from "zustand";

export const userStore = create((set, get) => ({
  publicKey: "",
  pinHash: "",
  username: "",
  setPublicKey: (key) => {
    set({ publicKey: key });
  },
  setPinHash: (hash) => {
    set({ pinHash: hash });
  },
}));

export const useAuthState = create((set, get) => ({
  isAuthenticated: false,
  setIsAuthenticated: () => {
    set({ isAuthenticated: !get().isAuthenticated });
  },
}));

export const useSignUp=create((set,get)=>({
  registrationCompleted:false,
  registrationData:{}
}))
