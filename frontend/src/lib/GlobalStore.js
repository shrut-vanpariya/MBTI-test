import { create } from 'zustand'


export const useStore = create((set) => ({
    userData: null,
    setUserData: (userData) => set((state) => ({ userData: userData })),
}))