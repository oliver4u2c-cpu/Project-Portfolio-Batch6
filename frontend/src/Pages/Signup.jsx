import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "../components/Loader.jsx";
import { userStore } from "../store/userStore.js";

export default function SignupPage() {
    const navigate = useNavigate();
    const { signup } = userStore();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            await signup(formData);
            toast.success("Account created successfully!");
            setFormData({
                username: "",
                email: "",
                password: ""
            });
            setTimeout(() => {
                navigate("/");
            }, 1500);
        } catch (err) {
            toast.error(err.message || "Registration failed. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="w-full min-h-[85vh] flex flex-col items-center justify-center bg-bg-dark text-white px-6 py-12">
            <ToastContainer theme="dark" />

            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md bg-bg-card border border-[#1e2330] p-8 md:p-10 rounded-sm shadow-xl"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="text-center mb-8">
                            <h1 className="font-serif text-3xl font-bold tracking-tight text-white mb-2">
                                Create Account
                            </h1>
                            <p className="text-muted text-xs tracking-wider uppercase">
                                Join the Spatial Architecture Studio
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="username" className="text-xs uppercase tracking-wider text-muted mb-2 font-semibold">
                                USERNAME
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                required
                                onChange={handleChange}
                                value={formData.username}
                                className="bg-[#0b0c10] border border-[#232836] p-3 text-sm rounded-sm focus:border-accent focus:outline-none transition-colors"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-xs uppercase tracking-wider text-muted mb-2 font-semibold">
                                EMAIL ADDRESS
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                onChange={handleChange}
                                value={formData.email}
                                className="bg-[#0b0c10] border border-[#232836] p-3 text-sm rounded-sm focus:border-accent focus:outline-none transition-colors"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="password" className="text-xs uppercase tracking-wider text-muted mb-2 font-semibold">
                                PASSWORD
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                                onChange={handleChange}
                                value={formData.password}
                                className="bg-[#0b0c10] border border-[#232836] p-3 text-sm rounded-sm focus:border-accent focus:outline-none transition-colors"
                            />
                        </div>

                        <div className="pt-2">
                            {loading ? (
                                <div className="flex justify-center py-2">
                                    <Loader />
                                </div>
                            ) : (
                                <button
                                    type="submit"
                                    className="w-full bg-accent hover:bg-accent-light text-bg-dark font-bold text-xs tracking-[0.25em] py-4 uppercase transition-colors rounded-sm cursor-pointer"
                                >
                                    SIGN UP
                                </button>
                            )}
                        </div>

                        <div className="text-center mt-6 text-xs text-muted">
                            Already have an account?{" "}
                            <Link to="/login" className="text-accent hover:underline font-semibold">
                                Login Here
                            </Link>
                        </div>
                    </form>
                </motion.div>
            </AnimatePresence>
        </main>
    );
}