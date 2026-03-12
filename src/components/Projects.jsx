import { motion } from "framer-motion";
import { FaGithub, FaLock, FaExternalLinkAlt } from 'react-icons/fa';
import { SiPython, SiReact, SiNodedotjs, SiMysql, SiDjango } from 'react-icons/si';

const Projects = () => {
    const projects = [
        {
            title: "Athena Automation Agent",
            date: "Late 2022 - Present",
            type: "Closed Source",
            description: "Engineered a production-grade automation agent serving <strong className='text-slate-900'>17,000+ users</strong>. Handled real-time data processing, state management, and NLP logic for probabilistic text generation. Designed a custom JSON-based storage system for moderation and access controls.",
            tech: ["Python", "NLP", "JSON Storage"],
            icon: <FaLock className="text-slate-400" />
        },
        {
            title: "Burn Plan Evaluator App",
            date: "December 2022",
            type: "Closed Source",
            description: "Developed an application to evaluate the legality of agricultural burn plans under Tennessee State Law. Integrated a REST API to dynamically gather and process localized weather forecasts to determine compliance.",
            tech: ["REST APIs", "Data Routing", "Python"],
            icon: <FaLock className="text-slate-400" />
        },
        {
            title: "Travel Planner Application",
            date: "May 2023",
            type: "Closed Source",
            description: "Built a multi-layered architecture application for comprehensive trip planning. Connected a Python backend to a MySQL database using <strong className='text-slate-900'>SQLAlchemy</strong> to ensure reliable data persistence and retrieval.",
            tech: ["Python", "Kivy", "MySQL", "SQLAlchemy"],
            icon: <FaLock className="text-slate-400" />
        },
        {
            title: "Zulip Core Contributions",
            date: "Spring 2024",
            type: "Open Source",
            description: "Contributed to a high-volume open-source communication platform utilized by developers worldwide. Collaborated with a small team to implement global notification volume controls and customizable alert sound logic.",
            tech: ["Python", "Django", "PostgreSQL"],
            icon: <FaGithub className="text-slate-800" />,
            link: "https://github.com/zulip/zulip" // Optional: Link to the main repo
        },
        {
            title: "Secure Chat Application",
            date: "October 2025 - December 2025",
            type: "Closed Source",
            description: "Architected a custom-built, self-hostable communication platform to demonstrate <strong className='text-slate-900'>software security principles</strong>. Features end-to-end encrypted messaging and secure user profile management.",
            tech: ["Node.js", "React", "Cryptography"],
            icon: <FaLock className="text-slate-400" />
        },
        {
            title: "Folklore & Character Database App",
            date: "March 2026",
            type: "Open Source",
            description: "Developed a centralized archive for storing and displaying character profiles and stories grounded in American folklore. The system is designed to organize narratives and historical research around figures like John Henry and Jesse James.",
            tech: ["React", "Data Archiving", "GitHub Pages"],
            icon: <FaGithub className="text-slate-800" />,
            link: "https://github.com/NaverJJV/FolkloreCharacterArchive"
        }
    ];

    return (
        <section className="w-full py-20 bg-white text-slate-900">
            <div className="max-w-6xl mx-auto px-10">
                <h2 className="text-4xl font-extrabold text-center mb-16 text-slate-800">
                    Technical Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                                    <p className="text-sm font-semibold text-blue-600 mt-1">{project.date}</p>
                                </div>
                                {project.link ? (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-200 rounded-full hover:bg-slate-300 transition-colors">
                                        {project.icon}
                                    </a>
                                ) : (
                                    <div className="p-2 bg-slate-100 rounded-full">
                                        {project.icon}
                                    </div>
                                )}
                            </div>

                            <div className="mb-4">
                <span className={`text-xs font-bold px-2 py-1 rounded-md ${project.type === 'Open Source' ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'}`}>
                  {project.type}
                </span>
                            </div>

                            {/* Using dangerouslySetInnerHTML allows the <strong> tags in the string to render properly */}
                            <p
                                className="text-slate-600 text-sm leading-relaxed flex-grow"
                                dangerouslySetInnerHTML={{ __html: project.description }}
                            />

                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.tech.map((techItem, techIndex) => (
                                    <span key={techIndex} className="text-xs font-medium px-2 py-1 bg-white border border-slate-300 rounded-md text-slate-700 shadow-sm">
                    {techItem}
                  </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
