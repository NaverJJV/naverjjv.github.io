import {FaGithub, FaLock, FaTv} from 'react-icons/fa';
import {motion} from "framer-motion";

const Projects = () => {
    const projects = [
        {
            title: "NextGenTV ATSC 3.0 Application (Nebraska Public Media)",
            date: "August 2024 - Present",
            type: "Client Project",
            featured: true,
            description: `
        <p class="mb-3">Developed a comprehensive Smart TV application for over-the-air distribution on the ATSC 3.0 standard. Built using the Run3TV framework with a custom Q-Bar navigation system, the suite includes six core sub-applications:</p>
        <ul class="list-disc ml-6 space-y-2 mb-5 text-slate-700">
          <li><strong class="text-slate-900">Live & On-Demand Video:</strong> Built a custom Video.js player to stream three live broadcast channels and integrated private NPM APIs to serve on-demand programming (Backyard Farmer, PBS Newshour, Austin City Limits).</li>
          <li><strong class="text-slate-900">Dynamic Weather:</strong> Connected the National Weather Service API to render zip-code-specific conditions, localized forecasts, and national radar with dynamic UI animations.</li>
          <li><strong class="text-slate-900">Interactive Modules:</strong> Engineered an educational card matching game with global leaderboards, a QR-linked User Guide, and a Connect With Us revolving portal for social media and donations.</li>
        </ul>
        <div class="px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-900 font-medium text-sm shadow-sm">
          🏆 <strong class="text-blue-950">Accolades:</strong> Winner of the UNL Faculty Platinum Award (Top Project 2024-2025). Showcased by PearlTV at the NAB Conference in Las Vegas to demonstrate the capabilities of the Run3TV Framework.
        </div>
      `,
            tech: ["ATSC 3.0", "Run3TV", "Video.js", "NWS API", "REST APIs", "JavaScript", "HTML", "Google Analytics/Google Tag Manager", "TV Development"],
            icon: <FaTv className="text-blue-600"/>
        },
        {
            title: "Folklore & Character Database App",
            date: "March 2026",
            type: "Open Source",
            description: "Developed a centralized archive for storing and displaying character profiles and stories grounded in American folklore. The system is designed to organize narratives and historical research around figures like John Henry and Jesse James.",
            tech: ["React", "Node.js", "PostgreSQL", "Data Archiving", "Full Stack Development"],
            icon: <FaGithub className="text-slate-800"/>,
            link: "https://github.com/NaverJJV/FolkloreCharacterArchive"
        },
        {
            title: "Secure Chat Application",
            date: "October 2025 - December 2025",
            type: "Closed Source",
            description: "Architected a custom-built, self-hostable communication platform to demonstrate <strong className='text-slate-900'>software security principles</strong>. Features end-to-end encrypted messaging and secure user profile management, mimicking modern platforms like WhatsApp.",
            tech: ["Node.js", "React", "WebSockets", "Secure Connections", "Cryptography"],
            icon: <FaLock className="text-slate-400"/>
        },
        {
            title: "Zulip Core Contributions",
            date: "Spring 2024",
            type: "Open Source",
            description: "Contributed to a high-volume open-source communication platform (often described as 'Discord for Developers'). Collaborated with a small team to implement global notification volume controls and customizable alert sound logic.",
            tech: ["TypeScript", "Django", "PostgreSQL"],
            icon: <FaGithub className="text-slate-800"/>,
            link: "https://github.com/zulip/zulip"
        },
        {
            title: "Travel Planner Application",
            date: "May 2023",
            type: "Closed Source",
            description: "Built a multi-layered architecture application for comprehensive trip planning. Connected a Python backend to a MySQL database using <strong className='text-slate-900'>SQLAlchemy</strong> to ensure reliable data persistence and retrieval.",
            tech: ["Python", "Kivy", "MySQL", "SQLAlchemy"],
            icon: <FaLock className="text-slate-400"/>
        },
        {
            title: "Burn Plan Evaluator App",
            date: "December 2022",
            type: "Closed Source",
            description: "Developed an application to evaluate the legality of agricultural burn plans under Tennessee State Law. Integrated a REST API to dynamically gather and process localized weather forecasts to determine compliance.",
            tech: ["REST APIs", "Data Routing", "Java"],
            icon: <FaLock className="text-slate-400"/>
        },
        {
            title: "Athena Automation Agent",
            date: "Late 2022 - Present",
            type: "Closed Source",
            description: "Engineered a production-grade automation agent serving <strong className='text-slate-900'>17,000+ users</strong>. Handled real-time data processing, state management, and NLP logic for probabilistic text generation. Designed a custom JSON-based storage system for moderation and access controls.",
            tech: ["Python", "NLP", "JSON Storage", "Markov Chaining (AI)"],
            icon: <FaLock className="text-slate-400"/>
        }
    ];

    return (
        <section id="projects" className="w-full py-20 bg-white text-slate-900">
            <div className="max-w-6xl mx-auto px-10">
                <h2 className="text-4xl font-extrabold text-center mb-16 text-slate-800">
                    Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: false, amount: 0.1}}
                            transition={{delay: index * 0.1}}
                            className={`flex flex-col bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow ${project.featured ? 'md:col-span-2 lg:col-span-3' : ''}`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                                    <p className="text-sm font-semibold text-blue-600 mt-1">{project.date}</p>
                                </div>
                                {project.link ? (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                                       className="p-2 bg-slate-200 rounded-full hover:bg-slate-300 transition-colors">
                                        {project.icon}
                                    </a>
                                ) : (
                                    <div className="p-2 bg-slate-100 rounded-full">
                                        {project.icon}
                                    </div>
                                )}
                            </div>

                            <div className="mb-4">
                <span
                    className={`text-xs font-bold px-2 py-1 rounded-md ${project.type === 'Open Source' ? 'bg-green-100 text-green-700' : project.type === 'Client Project' ? 'bg-purple-100 text-purple-700' : 'bg-slate-200 text-slate-600'}`}>
                  {project.type}
                </span>
                            </div>

                            {/* Added prose class for better default spacing on the complex HTML block */}
                            <div
                                className="text-slate-600 text-sm leading-relaxed flex-grow"
                                dangerouslySetInnerHTML={{__html: project.description}}
                            />

                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.tech.map((techItem, techIndex) => (
                                    <span key={techIndex}
                                          className="text-xs font-medium px-2 py-1 bg-white border border-slate-300 rounded-md text-slate-700 shadow-sm">
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