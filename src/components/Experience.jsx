import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Using stable icon sets to avoid export errors
import {
    FaNodeJs, FaJava, FaDatabase, FaHtml5, FaBroadcastTower, FaBrain, FaReact
} from 'react-icons/fa';
import {
    SiMongodb, SiPostgresql, SiGoogleanalytics, SiJavascript,
    SiDotnet, SiApachemaven, SiBootstrap, SiSnowflake, SiDbt, SiPython, SiTypescript
} from 'react-icons/si';
import { TbBrandCSharp, TbDatabase } from 'react-icons/tb';
import { VscAzure } from 'react-icons/vsc';
import { AiOutlineApi } from 'react-icons/ai';
import { DiVisualstudio } from 'react-icons/di';

const Experience = () => {
    const badgeStyle = "flex items-center gap-2 px-3 py-1 rounded-md text-sm font-medium border shadow-sm";

    return (
        <section id="experience" className="w-full py-20 bg-slate-50 text-slate-900">
            <div className="max-w-6xl mx-auto px-10">
                <h2 className="text-4xl font-extrabold text-center mb-16 text-slate-800">
                    Professional Experience
                </h2>

                <VerticalTimeline lineColor="#cbd5e1">

                    {/* Node 1: RAGE Data Engineer */}
                    <VerticalTimelineElement
                        contentStyle={{ background: '#1e293b', color: '#fff', borderRadius: '0.75rem' }}
                        contentArrowStyle={{ borderRight: '7px solid #1e293b' }}
                        date="May 2026 - Present"
                        dateClassName="text-slate-500 lg:text-slate-800 font-semibold"
                        iconStyle={{ background: '#2563eb', color: '#fff' }}
                    >
                        <h3 className="text-2xl font-bold">Data Engineer</h3>
                        <h4 className="text-lg text-blue-400 mt-1">RAGE Energy (Rasmussen Air and Gas Energy)</h4>
                        <p className="mt-4 text-slate-300 font-light leading-relaxed">
                            I design <strong className="text-white">Snowflake</strong> data models and build dbt, Python, and SQL pipelines that make operational data reliable and useful. I also create Metabase dashboards and support reporting across the business.
                        </p>
                        <p className="mt-4 text-slate-300 font-light leading-relaxed">
                            I build internal web applications, including <strong className="text-white">RAGE Vehicles</strong>, and API integrations connecting platforms such as HubSpot and ERP systems. I help manage the company's <strong className="text-white">SharePoint and website</strong> and take on software projects and new technology initiatives wherever they are needed.
                        </p>
                        <p className="mt-4 text-slate-300 font-light leading-relaxed">
                            I partner with teams across the company to automate workflows and explore practical uses for emerging tools, including Snowflake Cortex.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
              <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <SiSnowflake className="text-sky-400" /> Snowflake
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <SiDbt className="text-orange-500" /> dbt
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <SiPython className="text-blue-400" /> Python
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <TbDatabase className="text-red-400" /> SQL
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <FaBrain className="text-purple-400" /> AI / Cortex
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <AiOutlineApi className="text-green-400" /> APIs
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <SiTypescript className="text-blue-400" /> TypeScript
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <FaReact className="text-cyan-400" /> React
              </span>
                        </div>
                    </VerticalTimelineElement>

                    {/* Node 2: NPM Year 2 */}
                    <VerticalTimelineElement
                        contentStyle={{ background: '#f8fafc', color: '#0f172a', border: '1px solid #e2e8f0', borderRadius: '0.75rem' }}
                        contentArrowStyle={{ borderRight: '7px solid #e2e8f0' }}
                        date="September 2025 - May 2026"
                        dateClassName="text-slate-500 lg:text-slate-800 font-semibold"
                        iconStyle={{ background: '#0284c7', color: '#fff' }}
                    >
                        <h3 className="text-2xl font-bold">Project Manager & Squad Lead</h3>
                        <h4 className="text-lg text-sky-600 mt-1">Nebraska Public Media (UNL Senior Design)</h4>
                        <p className="mt-4 text-slate-700 font-light leading-relaxed">
                            Returned at Nebraska Public Media's request to lead a six-developer squad on the NextGenTV application. I coordinated the roadmap, translated stakeholder needs into development priorities, and kept the team aligned on delivery.
                        </p>
                        <p className="mt-4 text-slate-700 font-light leading-relaxed">
                            I also contributed Google Analytics tracking, live alerts for high-priority local emergencies, and educational games that made the TV experience more interactive.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
              <span className={`${badgeStyle} bg-white border-slate-300 text-slate-700`}>
                <SiGoogleanalytics className="text-orange-400" /> Google Analytics
              </span>
                            <span className={`${badgeStyle} bg-white border-slate-300 text-slate-700`}>
                <AiOutlineApi className="text-blue-500" /> APIs
              </span>
                            <span className={`${badgeStyle} bg-white border-slate-300 text-slate-700`}>
                <SiJavascript className="text-yellow-500" /> JavaScript
              </span>
                        </div>
                    </VerticalTimelineElement>

                    {/* Node 3: Quest Analytics */}
                    <VerticalTimelineElement
                        contentStyle={{ background: '#1e293b', color: '#fff', borderRadius: '0.75rem' }}
                        contentArrowStyle={{ borderRight: '7px solid #1e293b' }}
                        date="May 2025 - August 2025"
                        dateClassName="text-slate-500 lg:text-slate-800 font-semibold"
                        iconStyle={{ background: '#2563eb', color: '#fff' }}
                    >
                        <h3 className="text-2xl font-bold">Software Engineering Intern</h3>
                        <h4 className="text-lg text-blue-400 mt-1">Quest Analytics, LLC | Overland Park, KS</h4>
                        <p className="mt-4 text-slate-300 font-light leading-relaxed">
                            Modernized legacy features for Quest Enterprise Services on the <strong className="text-white">Bravo team</strong>, using C# and .NET in an Azure environment to improve maintainability and performance. Worked with SQL Server and MongoDB in Agile data workflows supporting healthcare provider management and compliance tools.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
              <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <TbBrandCSharp className="text-purple-400" /> C#
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <SiDotnet className="text-blue-400" /> .NET
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <TbDatabase className="text-red-400" /> SQL Server
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <DiVisualstudio className="text-purple-400" /> Visual Studio
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <VscAzure className="text-blue-400" /> Azure
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <SiMongodb className="text-green-400" /> MongoDB
              </span>
                        </div>
                    </VerticalTimelineElement>

                    {/* Node 4: NPM Year 1 */}
                    <VerticalTimelineElement
                        contentStyle={{ background: '#f8fafc', color: '#0f172a', border: '1px solid #e2e8f0', borderRadius: '0.75rem' }}
                        contentArrowStyle={{ borderRight: '7px solid #e2e8f0' }}
                        date="August 2024 - May 2025"
                        dateClassName="text-slate-500 lg:text-slate-800 font-semibold"
                        iconStyle={{ background: '#0284c7', color: '#fff' }}
                    >
                        <h3 className="text-2xl font-bold">Development Manager</h3>
                        <h4 className="text-lg text-sky-600 mt-1">Nebraska Public Media (UNL Senior Design)</h4>
                        <p className="mt-4 text-slate-700 font-light leading-relaxed">
                            Managed Git, development environments, and <strong className="text-slate-900">CI/CD pipelines</strong> for a six-developer team building a NextGenTV ATSC 3.0 application on the Run3TV framework. The project earned UNL's Platinum Award and was shown at NAB 2025.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
              <span className={`${badgeStyle} bg-white border-slate-300 text-slate-700`}>
                <FaBroadcastTower className="text-red-500" /> ATSC 3.0
              </span>
                            <span className={`${badgeStyle} bg-white border-slate-300 text-slate-700`}>
                <FaNodeJs className="text-green-600" /> Node.js
              </span>
                            <span className={`${badgeStyle} bg-white border-slate-300 text-slate-700`}>
                <SiJavascript className="text-yellow-500" /> JavaScript
              </span>
                            <span className={`${badgeStyle} bg-white border-slate-300 text-slate-700`}>
                <FaHtml5 className="text-orange-600" /> HTML5
              </span>
                        </div>
                    </VerticalTimelineElement>

                    {/* Node 5: OT */}
                    <VerticalTimelineElement
                        contentStyle={{ background: '#1e293b', color: '#fff', borderRadius: '0.75rem' }}
                        contentArrowStyle={{ borderRight: '7px solid #1e293b' }}
                        date="August 2024 - May 2025"
                        dateClassName="text-slate-500 lg:text-slate-800 font-semibold"
                        iconStyle={{ background: '#2563eb', color: '#fff' }}
                    >
                        <h3 className="text-2xl font-bold">Software Intern</h3>
                        <h4 className="text-lg text-blue-400 mt-1">Operational Technology (University of Nebraska)</h4>
                        <p className="mt-4 text-slate-300 font-light leading-relaxed">
                            Developed features for <strong className="text-white">Redbeam</strong>, an energy management system used across the University of Nebraska campuses. I improved the Incidents interface, added trend-log and hybrid telemetry support, and built batch tagging and object status displays.
                        </p>
                        <p className="mt-4 text-slate-300 font-light leading-relaxed">
                            I also refined incident notifications and search behavior, created a four-level search guide, and worked with senior developers to debug and deliver updates in an Agile team.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
              <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <FaJava className="text-orange-400" /> Java
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <SiApachemaven className="text-red-400" /> Maven
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <SiPostgresql className="text-blue-400" /> PostgreSQL
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <FaDatabase className="text-slate-400" /> ClickHouse
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <SiBootstrap className="text-purple-400" /> Bootstrap
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <SiJavascript className="text-yellow-400" /> JavaScript
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <FaHtml5 className="text-orange-400" /> HTML
              </span>
                        </div>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </section>
    );
};

export default Experience;
