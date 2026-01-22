import { create } from "zustand";

interface UIState {
  isLoaded: boolean;
  setLoaded: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isLoaded: false,
  setLoaded: () => set({ isLoaded: true }),
}));
