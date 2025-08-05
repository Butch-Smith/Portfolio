import Layout from "../components/Layout";
import { useLanguage } from "../LanguageContext";
import { Link } from "react-router-dom";

const Homepage = () => {
    const { t, switchLanguage, lang } = useLanguage();
    const skillData = [
        {
            id: 1,
            title: "HTML",
            description: t.htmlSkillDescription,
            image: "/html.png",
        },
        {
            id: 2,
            title: "CSS",
            description: t.cssSkillDescription,
            image: "/text.png",
        },
        {
            id: 3,
            title: "JavaScript",
            description: t.jsSkillDescription,
            image: "/js.png",
        },
        {
            id: 4,
            title: "React",
            description: t.reactSkillDescription,
            image: "/react.png",
        },
        {
            id: 5,
            title: "React Native",
            description: t.rnSkillDescription,
            image: "/pngegg.png",
        },
        {
            id: 6,
            title: "Tailwind",
            description: t.tailwindSkillDescription,
            image: "/tailwindlmao.png",
        },
        {
            id: 7,
            title: "Python",
            description: t.pythonSkillDescription,
            image: "/python.png",
        },
    ]


    return (
        <Layout>
            <section className="w-full h-full flex flex-col justify-center items-center">
                <div className="flex justify-center items-center gap-6 w-full">
                    <div className="py-4 flex flex-col justify-center w-[70%]">
                        <div className="mb-6">
                            <h1 className="text-white mb-4 text-4xl">{t.homepageTitle}</h1>
                            <p className="text-white text-xl">{t.homepageParagraph}</p>
                        </div>


                        <div className="mb-6">
                            <h2 className="text-lg text-white mb-1">{t.skillText}</h2>
                            <div className="flex gap-4">
                                {
                                    skillData.map((skill) => (
                                        <Link to={`/skills/${skill.id}`}>
                                            <img className="w-[70px] h-[70px]" src={skill.image} alt="" />
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        <Link to="/projects">
                            <div className="p-2 rounded-full bg-gradient-to-r text-white text-lg bg-indigo-500 from-pink-500 text-center font-bold">{t.homeProjectButton}</div>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Homepage;