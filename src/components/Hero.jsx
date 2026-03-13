import {motion} from "framer-motion";
import {FaJava, FaNodeJs, FaReact} from "react-icons/fa";
import {SiJavascript, SiDotnet, SiPython} from "react-icons/si";
import {TbBrandCSharp, TbDatabase} from "react-icons/tb";
import {VscAzure} from "react-icons/vsc";

const Hero = ({onNavigate}) => {
    const photos = [
        "/photo1.jpg",
        "/photo2.jpg",
        "/photo3.jpg",
    ];

    const techStack = [
        {name: "Python", icon: <SiPython className="text-blue-400 text-lg"/>},
        {name: "C#", icon: <TbBrandCSharp className="text-purple-500 text-lg"/>},
        {name: ".NET", icon: <SiDotnet className="text-blue-500 text-lg"/>},
        {name: "Java", icon: <FaJava className="text-orange-500 text-lg"/>},
        {name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-lg"/>},
        {name: "React", icon: <FaReact className="text-cyan-400 text-lg"/>},
        {name: "Node.js", icon: <FaNodeJs className="text-green-500 text-lg"/>},
        {name: "SQL", icon: <TbDatabase className="text-red-400 text-lg"/>},
        {name: "Azure", icon: <VscAzure className="text-blue-400 text-lg"/>},
        {name: "Full Stack Development"},
        {name: "Web Development & Design"},
    ];

    return (
        <section id="summary"
                 className="relative w-full h-screen mx-auto flex flex-col md:flex-row items-center justify-between px-10 bg-slate-900 text-white overflow-hidden">

            {/* Left Side: Content */}
            <div className="z-10 max-w-2xl">
                <motion.h1
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    className="text-6xl font-extrabold"
                >
                    Jake Vaccaro
                </motion.h1>

                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.5}}
                    className="mt-4 text-xl text-blue-400 font-mono"
                >
                    Software Engineer | Versatile Systems & Application Development
                </motion.p>

                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1}}
                    className="mt-6 text-lg leading-relaxed text-slate-300"
                >
                    With <strong className="text-white">3+ years of production experience</strong> in agile
                    environments, I deliver robust <strong className="text-white">Full Stack solutions</strong> across a
                    wide variety of technologies. I have led cross-functional engineering teams through the complete
                    software lifecycle, guiding award-winning client projects from backend data architecture to
                    intuitive frontend implementations. My work combines hands-on technical versatility with strategic
                    project management to build scalable, high-impact applications.
                </motion.div>

                {/* Breadth of Stack Tags with Icons */}
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1.2}}
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
                    animate={{opacity: 1}}
                    transition={{delay: 1.4}}
                    className="mt-10 flex flex-wrap gap-4"
                >
                    <motion.a
                        href="#experience"
                        onClick={onNavigate}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-bold transition-colors inline-block"
                    >
                        Experience
                    </motion.a>
                    <motion.a
                        href="#projects"
                        onClick={onNavigate}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-full font-bold transition-colors inline-block text-slate-300"
                    >
                        Projects
                    </motion.a>
                    <motion.a
                        href="#education"
                        onClick={onNavigate}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-full font-bold transition-colors inline-block text-slate-300"
                    >
                        Education
                    </motion.a>
                </motion.div>
            </div>

            {/* Right Side: Orbital Photo Animation */}
            <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                <div
                    className="absolute w-72 h-72 border border-slate-700 rounded-full border-dashed animate-[spin_20s_linear_infinite]"/>

                {photos.map((src, index) => {
                    const startAngle = index * 120;
                    return (
                        <motion.div
                            key={index}
                            className="absolute w-32 h-32"
                            initial={{rotate: startAngle}}
                            animate={{rotate: startAngle + 360}}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            style={{originX: "200px", originY: "50%"}}
                        >
                            <motion.img
                                src={src}
                                alt={`Jacob Vaccaro ${index + 1}`}
                                className="w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-xl bg-slate-800"
                                initial={{rotate: -startAngle}}
                                animate={{rotate: -(startAngle + 360)}}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                        </motion.div>
                    );
                })}

                <div className="w-24 h-24 bg-blue-600/20 blur-3xl rounded-full animate-pulse"/>
            </div>

        </section>
    );
};

export default Hero;
