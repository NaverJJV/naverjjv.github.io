import { motion } from "framer-motion";

const Hero = () => {
    const photos = [
        "/assets/photo1.jpg",
        "/assets/photo2.jpg",
        "/assets/photo3.jpg",
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
                    className="mt-4 text-xl text-slate-400 font-mono"
                >
                    Software Engineer | 3+ Years Production Experience
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-6 text-lg leading-relaxed text-slate-300"
                >
                    Expert in **Python, SQL, and CI/CD pipelines**. I focus on
                    modernizing enterprise workflows and building durable infrastructure
                    serving **17,000+ users**.
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-10 px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-bold transition-colors"
                >
                    View My Systems
                </motion.button>
            </div>

            {/* Right Side: Orbital Photo Animation */}
            <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                {/* The "Orbit" Path */}
                <div className="absolute w-72 h-72 border border-slate-700 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />

                {photos.map((src, index) => (
                    <motion.div
                        key={index}
                        className="absolute w-32 h-32"
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 7.5, // Offsets the photos so they aren't on top of each other
                        }}
                        style={{ originX: "200px", originY: "50%" }} // Rotates around center
                    >
                        <img
                            src={src}
                            alt="Jacob Vaccaro"
                            className="w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-xl"
                            style={{ transform: `rotate(-${index * 360}deg)` }} // Keeps images upright
                        />
                    </motion.div>
                ))}

                {/* Center Focal Point */}
                <div className="w-24 h-24 bg-blue-600/20 blur-3xl rounded-full animate-pulse" />
            </div>

        </section>
    );
};

export default Hero;
