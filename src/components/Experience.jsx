import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Importing tech stack icons
import { FaNodeJs, FaGithub, FaJava, FaDatabase } from 'react-icons/fa';
import { SiCsharp, SiMicrosoftazure, SiMongodb, SiPostgresql } from 'react-icons/si';

const Experience = () => {
    return (
        <section className="w-full py-20 bg-slate-50 text-slate-900">
            <div className="max-w-6xl mx-auto px-10">
                <h2 className="text-4xl font-extrabold text-center mb-16 text-slate-800">
                    Professional Experience
                </h2>

                <VerticalTimeline lineColor="#cbd5e1">

                    {/* Node 1: NPM Year 2 */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#1e293b', color: '#fff', borderRadius: '0.75rem' }}
                        contentArrowStyle={{ borderRight: '7px solid  #1e293b' }}
                        date="August 2025 - Present (Expected May 2026)"
                        dateClassName="text-slate-500 lg:text-slate-800 font-semibold"
                        icon={
                            <img
                                src="/npm-logo.png"
                                alt="Nebraska Public Media Logo"
                                className="w-full h-full object-cover rounded-full bg-white shadow-sm border-2 border-slate-200"
                            />
                        }
                    >
                        <h3 className="text-2xl font-bold">Product Manager & Squad Lead</h3>
                        <h4 className="text-lg text-blue-400 mt-1">Nebraska Public Media (UNL Senior Design)</h4>
                        <p className="mt-4 text-slate-300 font-light leading-relaxed">
                            Asked to return for a second year to lead the development squad. Responsible for managing a cross-functional team of five developers and serving as the primary communication liaison between the engineering team, UNL Faculty, and Nebraska Public Media stakeholders.
                        </p>

                        {/* Tech Stack Badges */}
                        <div className="mt-6 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 px-3 py-1 bg-slate-700 rounded-md text-sm text-slate-200 font-medium border border-slate-600">
                <FaNodeJs className="text-green-500 text-lg" /> Node.js
              </span>
                            <span className="flex items-center gap-2 px-3 py-1 bg-slate-700 rounded-md text-sm text-slate-200 font-medium border border-slate-600">
                <FaGithub className="text-white text-lg" /> GitHub Pages
              </span>
                        </div>
                    </VerticalTimelineElement>

                    {/* Node 2: Quest Analytics */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#f8fafc', color: '#0f172a', border: '1px solid #e2e8f0', borderRadius: '0.75rem' }}
                        contentArrowStyle={{ borderRight: '7px solid  #e2e8f0' }}
                        date="June 2025 - August 2025"
                        dateClassName="text-slate-500 lg:text-slate-800 font-semibold"
                        icon={
                            <img
                                src="/quest-logo.png"
                                alt="Quest Analytics Logo"
                                className="w-full h-full object-contain rounded-full bg-white shadow-sm p-1 border-2 border-slate-200"
                            />
                        }
                    >
                        <h3 className="text-2xl font-bold">Software Engineering Intern</h3>
                        <h4 className="text-lg text-sky-600 mt-1">Quest Analytics, LLC | Overland Park, KS</h4>
                        <p className="mt-4 text-slate-700 font-light leading-relaxed">
                            Assigned to the <strong className="text-slate-900">"Bravo" team</strong> to develop and modernize features for Quest Enterprise Services. Built and maintained tools utilized by healthcare providers to manage provider networks and ensure regulatory compliance.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 px-3 py-1 bg-white rounded-md text-sm text-slate-700 font-medium border border-slate-300 shadow-sm">
                <SiCsharp className="text-purple-600 text-lg" /> C#
              </span>
                            <span className="flex items-center gap-2 px-3 py-1 bg-white rounded-md text-sm text-slate-700 font-medium border border-slate-300 shadow-sm">
                <SiMicrosoftazure className="text-blue-600 text-lg" /> Azure Cloud
              </span>
                            <span className="flex items-center gap-2 px-3 py-1 bg-white rounded-md text-sm text-slate-700 font-medium border border-slate-300 shadow-sm">
                <SiMongodb className="text-green-600 text-lg" /> MongoDB
              </span>
                        </div>
                    </VerticalTimelineElement>

                    {/* Node 3: NPM Year 1 */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#1e293b', color: '#fff', borderRadius: '0.75rem' }}
                        contentArrowStyle={{ borderRight: '7px solid  #1e293b' }}
                        date="August 2024 - May 2025"
                        dateClassName="text-slate-500 lg:text-slate-800 font-semibold"
                        icon={
                            <img
                                src="/npm-logo.png"
                                alt="Nebraska Public Media Logo"
                                className="w-full h-full object-cover rounded-full bg-white shadow-sm border-2 border-slate-200"
                            />
                        }
                    >
                        <h3 className="text-2xl font-bold">Development Manager</h3>
                        <h4 className="text-lg text-blue-400 mt-1">Nebraska Public Media (UNL Senior Design)</h4>
                        <p className="mt-4 text-slate-300 font-light leading-relaxed">
                            Managed the initial architectural setup for a high-stakes production application for the regional PBS affiliate. Integrated proprietary Node-based packages and established the core <strong className="text-white">CI/CD pipelines, GitHub workflows, and release deployments</strong>.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 px-3 py-1 bg-slate-700 rounded-md text-sm text-slate-200 font-medium border border-slate-600">
                <FaNodeJs className="text-green-500 text-lg" /> Node.js
              </span>
                            <span className="flex items-center gap-2 px-3 py-1 bg-slate-700 rounded-md text-sm text-slate-200 font-medium border border-slate-600">
                <FaGithub className="text-white text-lg" /> CI/CD
              </span>
                        </div>
                    </VerticalTimelineElement>

                    {/* Node 4: Building Automation */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#f8fafc', color: '#0f172a', border: '1px solid #e2e8f0', borderRadius: '0.75rem' }}
                        contentArrowStyle={{ borderRight: '7px solid  #e2e8f0' }}
                        date="August 2024 - May 2025"
                        dateClassName="text-slate-500 lg:text-slate-800 font-semibold"
                        icon={
                            <img
                                src="/nebraska-n.jpg"
                                alt="University of Nebraska Logo"
                                className="w-full h-full object-cover rounded-full bg-white shadow-sm p-1 border-2 border-slate-200"
                            />
                        }
                    >
                        <h3 className="text-2xl font-bold">Software Intern</h3>
                        <h4 className="text-lg text-sky-600 mt-1">Operational Technology (University of Nebraska)</h4>
                        <p className="mt-4 text-slate-700 font-light leading-relaxed">
                            Developed features for <strong className="text-slate-900">Redbeam</strong>, a proprietary internal software system used to manage and monitor custom-built HVAC devices across all four University of Nebraska campuses.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 px-3 py-1 bg-white rounded-md text-sm text-slate-700 font-medium border border-slate-300 shadow-sm">
                <FaJava className="text-orange-600 text-lg" /> Java
              </span>
                            <span className="flex items-center gap-2 px-3 py-1 bg-white rounded-md text-sm text-slate-700 font-medium border border-slate-300 shadow-sm">
                <SiPostgresql className="text-blue-500 text-lg" /> PostgreSQL
              </span>
                            <span className="flex items-center gap-2 px-3 py-1 bg-white rounded-md text-sm text-slate-700 font-medium border border-slate-300 shadow-sm">
                <FaDatabase className="text-slate-500 text-lg" /> ClickHouse OLAP
              </span>
                        </div>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </section>
    );
};

export default Experience;