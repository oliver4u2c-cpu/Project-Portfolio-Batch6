

import { create } from "zustand";
import { api } from "../api/api.js";

export const userStore = create((set) => ({
    user: null,
    isLoggedIn: false,
    loading: false,

    signup: async ({ username, email, password }) => {
        set({ loading: true });
        try {
            const response = await api.post("/auth/signup", {
                name: username,
                email,
                password
            });
            set({ user: response.data, isLoggedIn: true });
            return response.data;
        } catch (err) {
            console.error(err);
            const errMsg = err.response?.data?.message || "Registration failed";
            throw new Error(errMsg);
        } finally {
            set({ loading: false });
        }
    },

    login: async (email, password) => {
        set({ loading: true });
        try {
            const response = await api.post("/auth/login", {
                email,
                password
            });
            set({ user: response.data, isLoggedIn: true });
            return response.data;
        } catch (err) {
            console.error(err);
            const errMsg = err.response?.data?.message || "Invalid credentials";
            throw new Error(errMsg);
        } finally {
            set({ loading: false });
        }
    },

    logOut: async () => {
        try {
            await api.post("/auth/logout");
        } catch (err) {
            console.error(err);
        } finally {
            set({ user: null, isLoggedIn: false });
        }
    },

    checkAuth: async () => {
        try {
            const response = await api.get("/auth/profile");
            set({ user: response.data, isLoggedIn: true });
        } catch {
            set({ user: null, isLoggedIn: false });
        }
    },

    setUser: (user) => set({ user, isLoggedIn: !!user })
}))