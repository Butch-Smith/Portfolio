import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useLanguage } from "../LanguageContext";
import { Link } from "react-router-dom";

const SkillDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t, switchLanguage, lang } = useLanguage();
    //i know i could've done this differently it just didn't work 〒▽〒
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
        }
    ]

    const skill = skillData.find((skill) => skill.id === Number(id));
    return (
        <>
            <Layout>
                {skill ?
                    <>
                        <section className="w-full h-full p-4 flex flex-col">
                            <h1 className="text-white mb-2 text-4xl">
                                {t.skillHeaderText} {skill.title}
                            </h1>
                            <div className="flex-1 flex items-center justify-center">
                                <div className="flex items-center justify-center gap-6">
                                    <img className="w-[25%] h-[25%]" src={skill.image} alt="" />
                                    <div className="w-[50%] h-[350px] flex flex-col justify-between py-6">
                                        <p className="text-xl text-white">{skill.description}</p>
                                        <Link to={"/"}>
                                            <div className="p-2 rounded-full bg-gradient-to-r text-white text-lg bg-indigo-500 from-pink-500 text-center font-bold">
                                                {t.skillDetailPageBackButton}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                    : <h1 className="text-white mb-2 text-4xl">Skill issue ＞﹏＜</h1>}
            </Layout>
        </>
    );
}


export default SkillDetailPage;