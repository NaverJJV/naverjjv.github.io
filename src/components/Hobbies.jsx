import {motion} from "framer-motion";
import {FaBaseballBall, FaFilm, FaFootballBall, FaFutbol, FaPenFancy, FaTv} from "react-icons/fa";

const Hobbies = () => {
    const mediaFavorites = [
        "Fate/stay night: Unlimited Blade Works",
        "The Rookie",
        "Star Wars: Episode III - Revenge of the Sith",
        "Dragon Ball Z",
        "Cowboy Bebop",
        "The Good, the Bad and the Ugly"
    ];

    return (
        <section id="hobbies" className="w-full py-20 bg-slate-50 text-slate-900">
            <div className="max-w-6xl mx-auto px-10">
                <h2 className="text-4xl font-extrabold text-center mb-16 text-slate-800">
                    Beyond the Screen
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Sports Card */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: false, amount: 0.2}}
                        transition={{delay: 0.1}}
                        className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow md:col-span-2"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-red-600 rounded-full text-white text-xl">
                                <FaFootballBall/>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">Sports & Analytics</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            I am a massive sports fan, bleeding red for my alma mater, the <strong
                            className="text-slate-900">Nebraska Cornhuskers</strong>, and my hometown team, the <strong
                            className="text-slate-900">Kansas City Chiefs</strong>. I rarely miss a primetime football
                            game.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            My love for data heavily translates to <strong className="text-slate-900">Fantasy
                            Football</strong>, where I actively manage multiple dynasty and redraft leagues, constantly
                            analyzing player statistics. Beyond the gridiron, I closely follow the Kansas City Royals
                            and Sporting KC.
                        </p>

                        <div className="flex flex-wrap gap-6 text-3xl text-slate-300">
                            <FaFootballBall className="text-red-500 hover:scale-110 transition-transform"
                                            title="Football"/>
                            <FaBaseballBall className="text-blue-500 hover:scale-110 transition-transform"
                                            title="Baseball"/>
                            <FaFutbol className="text-sky-400 hover:scale-110 transition-transform" title="Soccer"/>
                        </div>
                    </motion.div>

                    {/* Creative Writing Card */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: false, amount: 0.2}}
                        transition={{delay: 0.2}}
                        className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-purple-600 rounded-full text-white text-xl">
                                <FaPenFancy/>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">Creative Writing</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            I spend a lot of my free time architecting high-scale fantasy worlds with intricate lore. I
                            have written hundreds of pages of pure backstory for these universes, with the long-term
                            goal of developing them into full creative works.
                        </p>
                    </motion.div>

                    {/* Media Card */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: false, amount: 0.2}}
                        transition={{delay: 0.3}}
                        className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow md:col-span-3"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-slate-800 rounded-full text-white text-xl">
                                <FaFilm/>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">Favorite Watchlist</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            When sports aren't on, you can usually find me watching a mix of anime, classic
                            cinema, and television. Here are a few all-time favorites:
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {mediaFavorites.map((title, index) => (
                                <span key={index}
                                      className="flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm">
                  <FaTv className="text-slate-400"/> {title}
                </span>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: false, amount: 0.2}}
                        transition={{delay: 0.4}}
                        className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                        {/* Elfsight Instagram Feed | Untitled Instagram Feed */}
                        <script src="https://elfsightcdn.com/platform.js" async></script>
                        <div class="elfsight-app-4160e5f2-d69a-4df3-afbb-c4428f8a5f52" data-elfsight-app-lazy></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hobbies;