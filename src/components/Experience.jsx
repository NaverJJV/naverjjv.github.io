import {
    FaNodeJs, FaGithub, FaJava, FaDatabase, FaHtml5, FaBroadcastTower, FaBriefcase
} from 'react-icons/fa';
import {
    SiMongodb, SiPostgresql, SiGoogleanalytics, SiJavascript,
    SiDotnet, SiApachemaven, SiBootstrap
} from 'react-icons/si';
import {TbBrandCSharp} from 'react-icons/tb';
import {VscAzure, VscCode} from 'react-icons/vsc'; // Using VscCode for Visual Studio
import {AiOutlineApi} from 'react-icons/ai';
import {DiMsqlServer} from 'react-icons/di';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";

const Experience = () => {
    // Reusable styling for the tech badges
    const badgeStyle = "flex items-center gap-2 px-3 py-1 rounded-md text-sm font-medium border shadow-sm";

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
                        contentStyle={{background: '#1e293b', color: '#fff', borderRadius: '0.75rem'}}
                        contentArrowStyle={{borderRight: '7px solid  #1e293b'}}
                        date="August 2025 - Present"
                        dateClassName="text-slate-500 lg:text-slate-800 font-semibold"
                        iconStyle={{background: '#2563eb', color: '#fff'}}
                        icon={<FaBriefcase/>}
                    >
                        <h3 className="text-2xl font-bold">Product Manager & Squad Lead</h3>
                        <h4 className="text-lg text-blue-400 mt-1">Nebraska Public Media</h4>
                        <p className="mt-4 text-slate-300 font-light leading-relaxed">
                            Leading the development squad for a production-grade application. I manage a
                            cross-functional team of five developers and serve as the primary liaison between
                            engineering and stakeholders.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
              <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <SiGoogleanalytics className="text-orange-400"/> Google Analytics
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <AiOutlineApi className="text-blue-400"/> APIs
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <SiJavascript className="text-yellow-400"/> JavaScript
              </span>
                        </div>
                    </VerticalTimelineElement>

                    {/* Node 2: Quest Analytics */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: '#f8fafc',
                            color: '#0f172a',
                            border: '1px solid #e2e8f0',
                            borderRadius: '0.75rem'
                        }}
                        contentArrowStyle={{borderRight: '7px solid  #e2e8f0'}}
                        date="June 2025 - August 2025"
                        dateClassName="text-slate-500 lg:text-slate-800 font-semibold"
                        iconStyle={{background: '#0284c7', color: '#fff'}}
                        icon={<FaBriefcase/>}
                    >
                        <h3 className="text-2xl font-bold">Software Engineering Intern</h3>
                        <h4 className="text-lg text-sky-600 mt-1">Quest Analytics, LLC</h4>
                        <p className="mt-4 text-slate-700 font-light leading-relaxed">
                            Modernized features for Quest Enterprise Services within the <strong
                            className="text-slate-900">"Bravo" team</strong>. Focused on healthcare provider management
                            tools and regulatory compliance systems.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
              <span className={`${badgeStyle} bg-white border-slate-300 text-slate-700`}>
                <TbBrandCSharp className="text-purple-600"/> C#
              </span>
                            <span className={`${badgeStyle} bg-white border-slate-300 text-slate-700`}>
                <SiDotnet className="text-blue-700"/> .NET
              </span>
                            <span className={`${badgeStyle} bg-white border-slate-300 text-slate-700`}>
                <DiMsqlServer className="text-red-700"/> SQL Server
              </span>
                            <span className={`${badgeStyle} bg-white border-slate-300 text-slate-700`}>
                <VscCode className="text-purple-500"/> Visual Studio
              </span>
                            <span className={`${badgeStyle} bg-white border-slate-300 text-slate-700`}>
                <VscAzure className="text-blue-500"/> Azure
              </span>
                            <span className={`${badgeStyle} bg-white border-slate-300 text-slate-700`}>
                <SiMongodb className="text-green-600"/> MongoDB
              </span>
                        </div>
                    </VerticalTimelineElement>

                    {/* Node 3: NPM Year 1 */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#1e293b', color: '#fff', borderRadius: '0.75rem'}}
                        contentArrowStyle={{borderRight: '7px solid  #1e293b'}}
                        date="August 2024 - May 2025"
                        dateClassName="text-slate-500 lg:text-slate-800 font-semibold"
                        iconStyle={{background: '#2563eb', color: '#fff'}}
                        icon={<FaBriefcase/>}
                    >
                        <h3 className="text-2xl font-bold">Development Manager</h3>
                        <h4 className="text-lg text-blue-400 mt-1">Nebraska Public Media</h4>
                        <p className="mt-4 text-slate-300 font-light leading-relaxed">
                            Orchestrated the architectural setup and <strong className="text-white">CI/CD
                            pipelines</strong> for the NextGenTV ATSC 3.0 application. Managed release deployments and
                            proprietary framework integrations.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
              <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <FaBroadcastTower className="text-red-400"/> ATSC 3.0
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <FaNodeJs className="text-green-500"/> Node.js
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <SiJavascript className="text-yellow-400"/> JavaScript
              </span>
                            <span className={`${badgeStyle} bg-slate-700 border-slate-600 text-slate-200`}>
                <FaHtml5 className="text-orange-500"/> HTML5
              </span>
                        </div>
                    </VerticalTimelineElement>

                    {/* Node 4: OT */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: '#f8fafc',
                            color: '#0f172a',
                            border: '1px solid #e2e8f0',
                            borderRadius: '0.75rem'
                        }}
                        contentArrowStyle={{borderRight: '7px solid  #e2e8f0'}}
                        date="August 2024 - May 2025"
                        dateClassName="text-slate-500 lg:text-slate-800 font-semibold"
                        iconStyle={{background: '#0284c7', color: '#fff'}}
                        icon={<FaBriefcase/>}
                    >
                        <h3 className="text-2xl font-bold">Software Intern</h3>
                        <h4 className="text-lg text-sky-600 mt-1">Operational Technology (University of Nebraska)</h4>
                        <p className="mt-4 text-slate-700 font-light leading-relaxed">
                            Developed features for <strong className="text-slate-900">Redbeam</strong>, managing
                            in-house HVAC hardware across all four university campuses.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
              <span className={`${badgeStyle} bg-white border-slate-300 text-slate-700`}>
                <FaJava className="text-orange-600"/> Java
              </span>
                            <span className={`${badgeStyle} bg-white border-slate-300 text-slate-700`}>
                <SiApachemaven className="text-red-500"/> Maven
              </span>
                            <span className={`${badgeStyle} bg-white border-slate-300 text-slate-700`}>
                <SiPostgresql className="text-blue-500"/> PostgreSQL
              </span>
                            <span className={`${badgeStyle} bg-white border-slate-300 text-slate-700`}>
                <FaDatabase className="text-slate-500"/> ClickHouse
              </span>
                            <span className={`${badgeStyle} bg-white border-slate-300 text-slate-700`}>
                <SiBootstrap className="text-purple-600"/> Bootstrap
              </span>
                        </div>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </section>
    );
};

export default Experience;