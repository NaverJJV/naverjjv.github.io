import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function App() {
    // State to track if a user clicked a navigation link
    const [hasNavigated, setHasNavigated] = useState(false);

    return (
        <main className="bg-slate-900 min-h-screen font-sans relative">
            {/* Pass the state setter down to the Hero component */}
            <Hero onNavigate={() => setHasNavigated(true)} />
            <Experience />
            <Projects />
            <Education />

            {/* Conditional Floating Back Button */}
            <AnimatePresence>
                {hasNavigated && (
                    <motion.a
                        href="#summary"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        onClick={() => setHasNavigated(false)} // Hides the button once clicked
                        className="fixed bottom-8 right-8 p-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-2xl z-50 transition-colors"
                        aria-label="Back to top"
                    >
                        <FaArrowUp className="text-xl" />
                    </motion.a>
                )}
            </AnimatePresence>

            <footer className="w-full py-10 bg-slate-950 text-center text-slate-400">
                <div className="flex justify-center gap-6 mb-4 text-2xl">
                    <a
                        href="https://www.linkedin.com/in/jacobjvaccaro/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:jacobjvaccaro@gmail.com"
                        className="hover:text-blue-500 transition-colors"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                <p className="text-sm">© {new Date().getFullYear()} Jake Vaccaro. All rights reserved.</p>
                <p className="mt-1 text-xs text-slate-600">913-575-3507</p>
            </footer>
        </main>
    );
}

export default App;
