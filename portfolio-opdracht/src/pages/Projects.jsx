import Layout from "../components/Layout";
import Project from "../components/Project";
import { useLanguage } from "../LanguageContext";

const Projects = () => {
    const { t, switchLanguage, lang } = useLanguage();

    const projects = [
        {
            title: 'sorbet',
            image: '../public/uglysorbetlogo.png',
            description: t.sorbetDescription,
            link: 'https://github.com/Butch-Smith/sorbet'
        },
        {
            title: 'To-do app',
            image: '../public/what.png',
            description: t.toDoAppDescription,
            link: 'https://github.com/Butch-Smith/to-do-app'
        },
        {
            title: 'Weather app',
            image: '../public/weather.png',
            description: t.weatherAppDescription,
            link: 'https://github.com/Butch-Smith/Projects/tree/main/Weather-App'
        },
        {
            title: 'Flashcards',
            image: '../public/flashcard.png',
            description: t.flashCardsDescription,
            link: 'https://github.com/Butch-Smith/Projects/tree/main/Flashcards'
        },
        {
            title: 'Zoo app',
            image: '../public/zoo.png',
            description: t.zooAppDescription,
            link: 'https://github.com/Butch-Smith/Projects/tree/main/Zoo-Application'
        }
    ]
    return (
        <>
            <Layout>
                <section className="w-full h-full flex flex-col">
                    <h1 className="text-white mb-2 text-4xl">{t.projectPageHeader}</h1>
                    <h2 className="text-white mb-8 text-xl">{t.projectPageSubHeader}</h2>
                    <div className="flex-1 overflow-y-auto flex flex-col items-center hide-scrollbar rounded-xl">
                        {
                            projects.map((project, index) => (
                                <Project
                                    key={index}
                                    title={project.title}
                                    image={project.image}
                                    description={project.description}
                                    link={project.link}
                                />
                            ))
                        }
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Projects;