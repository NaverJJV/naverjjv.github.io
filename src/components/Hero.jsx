import { motion } from "framer-motion";

const Hero = () => {
    const photos = [
        "photo1.jpg",
        "photo2.jpg",
        "photo3.jpg",
    ];

    return (
        <section className="relative w-full h-screen mx-auto flex flex-col md:flex-row items-center justify-between px-10 bg-slate-900 text-white overflow-hidden">

            {/* Left Side: Content */}
            <div className="z-10 max-w-2xl">
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-6xl font-extrabold"
                >
                    Jacob Vaccaro
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 text-xl text-blue-400 font-mono"
                >
                    Software Engineer | Versatile Systems & Application Development
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-6 text-lg leading-relaxed text-slate-300"
                >
                    With over **3 years of production experience**, I build
                    resilient infrastructure across a wide variety of tech stacks. My
                    work ranges from **modernizing .NET legacy systems in Azure**
                    to **architecting real-time data pipelines** using ClickHouse and
                    PostgreSQL. I focus on delivering scalable solutions
                    whether the environment is high-volume automation or enterprise ETL
                    workflows.
                </motion.div>

                {/* Breadth of Stack Tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-8 flex flex-wrap gap-2"
                >
                    {["Python", "C#", ".NET", "Java", "JavaScript", "SQL", "Django", "Azure"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-md text-sm text-slate-400">
              {tech}
            </span>
                    ))}
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-10 px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-bold transition-colors"
                >
                    Explore Projects
                </motion.button>
            </div>

            {/* Right Side: Orbital Photo Animation */}
            <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                <div className="absolute w-72 h-72 border border-slate-700 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />

                {photos.map((src, index) => (
                    <motion.div
                        key={index}
                        className="absolute w-32 h-32"
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 10,
                        }}
                        style={{ originX: "200px", originY: "50%" }}
                    >
                        <img
                            src={src}
                            alt="Jacob Vaccaro"
                            className="w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-xl"
                            style={{ transform: `rotate(-${index * 360}deg)` }}
                        />
                    </motion.div>
                ))}

                <div className="w-24 h-24 bg-blue-600/20 blur-3xl rounded-full animate-pulse" />
            </div>

        </section>
    );
};

export default Hero;
