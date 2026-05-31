import {motion} from "framer-motion";
import {FaJava, FaNodeJs, FaReact} from "react-icons/fa";
import {SiJavascript, SiDotnet, SiPython, SiSnowflake, SiDbt} from "react-icons/si";
import {TbBrandCSharp, TbDatabase} from "react-icons/tb";
import {VscAzure} from "react-icons/vsc";

const Hero = () => {
    const photos = [
        "/photo1.jpg",
        "/photo2.jpg",
        "/photo3.jpg",
        "/photo4.jpg",
        "/photo5.jpg",
        "/photo6.jpg",
        "/photo7.jpg",
    ];

    const techStack = [
        {name: "Python", icon: <SiPython className="text-blue-400 text-lg"/>},
        {name: "Snowflake", icon: <SiSnowflake className="text-blue-400 text-lg"/>},
        {name: "dbt", icon: <SiDbt className="text-blue-400 text-lg"/>},
        {name: "Node.js", icon: <FaNodeJs className="text-green-500 text-lg"/>},
        {name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-lg"/>},
        {name: "React", icon: <FaReact className="text-cyan-400 text-lg"/>},
        {name: "SQL", icon: <TbDatabase className="text-red-400 text-lg"/>},
        {name: "Java", icon: <FaJava className="text-orange-500 text-lg"/>},
        {name: "Azure", icon: <VscAzure className="text-blue-400 text-lg"/>},
        {name: "C#", icon: <TbBrandCSharp className="text-purple-500 text-lg"/>},
        {name: ".NET", icon: <SiDotnet className="text-blue-500 text-lg"/>},
        {name: "Agile Development"},
        {name: "Project Management"},
        {name: "Full Stack Development"},
        {name: "Web Development & Design"},
        {name: "Leadership"},
    ];

    return (
        <section id="summary"
                 className="relative w-full h-screen mx-auto flex flex-col md:flex-row items-center justify-between px-10 bg-slate-900 text-white overflow-hidden">

            {/* Left Side: Content */}
            <div className="z-10 max-w-2xl">
                <motion.h1
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: false, amount: 0.3}}
                    className="text-6xl font-extrabold"
                >
                    Jake Vaccaro
                </motion.h1>

                <motion.p
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.2}}
                    viewport={{once: false, amount: 0.3}}
                    className="mt-4 text-xl text-blue-400 font-mono"
                >
                    Software & Data Engineer | Omaha Metropolitan Area
                </motion.p>

                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.4}}
                    viewport={{once: false, amount: 0.3}}
                    className="mt-6 text-lg leading-relaxed text-slate-300"
                >
                    With over <strong className="text-white">3 years of production experience</strong>, I thrive in
                    environments where I can take ownership of complex problems and deliver meaningful features. I have
                    a proven track record of architecting scalable data models in <strong
                    className="text-white">Snowflake</strong>, building automated transformation pipelines, and
                    leveraging <strong className="text-white">AI capabilities</strong> to drive operational
                    intelligence. Beyond data systems, I bring extensive experience in full-stack web development,
                    creating intuitive front-end implementations and robust API-driven workflows. I approach engineering
                    as a highly adaptable problem solver, capable of taking on projects with virtually any tech stack
                    and leading cross-functional teams to build high-impact solutions.
                </motion.div>

                {/* Breadth of Stack Tags with Icons */}
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.6}}
                    viewport={{once: false, amount: 0.3}}
                    className="mt-8 flex flex-wrap gap-3"
                >
                    {techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-md text-sm font-medium text-slate-200 shadow-sm"
                        >
              {tech.icon} {tech.name}
            </span>
                    ))}
                </motion.div>

                {/* Navigation Links */}
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.8}}
                    viewport={{once: false, amount: 0.3}}
                    className="mt-10 flex flex-wrap gap-4"
                >
                    <motion.a
                        href="#experience"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-bold transition-colors inline-block"
                    >
                        Experience
                    </motion.a>
                    <motion.a
                        href="#projects"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-full font-bold transition-colors inline-block text-slate-300"
                    >
                        Projects
                    </motion.a>
                    <motion.a
                        href="#education"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-full font-bold transition-colors inline-block text-slate-300"
                    >
                        Education
                    </motion.a>
                    <motion.a
                        href="#hobbies"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-full font-bold transition-colors inline-block text-slate-300"
                    >
                        Hobbies
                    </motion.a>
                </motion.div>
            </div>

            {/* Right Side: Orbital Photo Animation */}
            <div className="relative w-[600px] h-[500px] flex items-center justify-center hidden lg:flex lg:mr-12">
                <div
                    className="absolute w-[450px] h-[450px] border border-slate-700 rounded-full border-dashed animate-[spin_40s_linear_infinite]"/>

                {photos.map((src, index) => {
                    const startAngle = index * (360 / photos.length);

                    return (
                        <motion.div
                            key={index}
                            className="absolute w-[450px] h-[450px]"
                            initial={{rotate: startAngle}}
                            animate={{rotate: startAngle + 360}}
                            transition={{
                                duration: 40, // Increased duration for a smoother, large-scale rotation
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <motion.img
                                src={src}
                                alt={`Jacob Vaccaro ${index + 1}`}
                                // Increased image size to w-28 (112px)
                                className="absolute w-28 h-28 object-cover rounded-full border-2 border-blue-500 shadow-xl bg-slate-800"
                                // 56px is half of the w-28 (112px) size
                                style={{top: "-56px", left: "calc(50% - 56px)"}}
                                initial={{rotate: -startAngle}}
                                animate={{rotate: -(startAngle + 360)}}
                                transition={{
                                    duration: 40,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                        </motion.div>
                    );
                })}

                {/* Center Focal Point scaled up to match */}
                <div className="absolute w-40 h-40 bg-blue-600/10 blur-3xl rounded-full animate-pulse"/>
            </div>

        </section>
    );
};

export default Hero;
