


import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { userStore } from "../store/userStore.js";
export default function LoginPage() {
    const navigate = useNavigate()
    const {login} = userStore()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            await login(email, password)
            toast.success("Login successful")
            navigate("/")
            setEmail("")
            setPassword("")

        } catch (err) {
            toast.error(err)
            throw new Error(err.message)
        }

    }

    return (
      <main className="w-full min-h-[80vh] flex flex-col items-center justify-center bg-bg-dark text-white px-6 py-12">
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
                  Welcome Back
                </h1>
                <p className="text-muted text-xs tracking-wider uppercase">
                  Access Your Spatial Workspace
                </p>
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
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="bg-[#0b0c10] border border-[#232836] p-3 text-sm rounded-sm focus:border-accent focus:outline-none transition-colors"
                />
              </div>
  
              <div className="flex flex-col">
                <label htmlFor="password" className="text-xs uppercase tracking-wider text-muted mb-2 font-semibold flex justify-between">
                  PASSWORD
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="bg-[#0b0c10] border border-[#232836] p-3 text-sm rounded-sm focus:border-accent focus:outline-none transition-colors"
                />
              </div>
  
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-light text-bg-dark font-bold text-xs tracking-[0.25em] py-4 uppercase transition-colors rounded-sm cursor-pointer mt-4"
              >
                LOGIN
              </button>
  
              <div className="text-center mt-6 text-xs text-muted">
                Don't have an account?{" "}
                <Link to="/signup" className="text-accent hover:underline font-semibold">
                  Create Account
                </Link>
              </div>
            </form>
          </motion.div>
        </AnimatePresence>
      </main>
    );
}