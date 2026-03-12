import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

function App() {
    return (
        <main className="bg-slate-900 min-h-screen font-sans">
            <Hero />
            <Experience />
            <Projects />
            <Education />

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

                <p className="text-sm">© {new Date().getFullYear()} Jacob Vaccaro. All rights reserved.</p>
                <p className="mt-1 text-xs text-slate-600">913-575-3507</p>
            </footer>
        </main>
    );
}

export default App;
