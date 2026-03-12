import { motion } from "framer-motion";
import { FaGraduationCap, FaLandmark } from "react-icons/fa";

const Education = () => {
    const coursework = [
        "Machine Learning",
        "Azure Cloud Platforms",
        "Database & System Design",
        "Secure Software Engineering",
        "Software Security",
        "Data Mining",
        "System Resource Management",
        "Design Algorithms"
    ];

    return (
        <section id="education" className="w-full py-20 bg-slate-900 text-slate-50">
            <div className="max-w-6xl mx-auto px-10">
                <h2 className="text-4xl font-extrabold text-center mb-16 text-white">
                    Education & Leadership
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Education Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-800 rounded-xl p-8 border border-slate-700 shadow-lg"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-600 rounded-full text-white text-xl">
                                <FaGraduationCap />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Software Engineering, B.S.</h3>
                                <p className="text-blue-400 font-medium">University of Nebraska-Lincoln</p>
                            </div>
                        </div>

                        <div className="mb-6 space-y-2 text-slate-300">
                            <p><strong className="text-white">College:</strong> School of Computing (College of Engineering)</p>
                            <p><strong className="text-white">Expected Graduation:</strong> May 2026</p>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">Relevant Coursework</p>
                            <div className="flex flex-wrap gap-2">
                                {coursework.map((course, index) => (
                                    <span key={index} className="text-xs font-medium px-2 py-1 bg-slate-700 border border-slate-600 rounded-md text-slate-200">
                    {course}
                  </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Leadership Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-800 rounded-xl p-8 border border-slate-700 shadow-lg"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-purple-600 rounded-full text-white text-xl">
                                <FaLandmark />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Chapter President</h3>
                                <p className="text-purple-400 font-medium">Triangle Fraternity (Nebraska Chapter)</p>
                            </div>
                        </div>

                        <div className="mb-4 space-y-2 text-slate-300">
                            <p><strong className="text-white">Term:</strong> January 2024 - December 2025</p>
                        </div>

                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                            Initiated in Spring 2023 into the nation's only fraternity exclusive to STEM majors. Elected by peers to serve as Chapter President and re-elected for a second term, becoming the <strong className="text-white">only member to serve multiple terms</strong> since the chapter's refounding in 2017.
                        </p>

                        <p className="text-slate-300 text-sm leading-relaxed">
                            Served as the primary campus representative and chairman of the executive council, facilitating all chapter meetings. Acted as the core liaison between the chapter and critical stakeholders, including the <strong className="text-white">National Organization, Alumni Board, Office of Fraternity and Sorority Life (OFSL), and Interfraternity Council (IFC)</strong>.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Education;
