import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useLanguage } from "../LanguageContext";

const Project = ({ title, description, image, link }) => {
    const { t, switchLanguage, lang } = useLanguage();
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            {isOpen ?
                //this is for when its open
                <div onClick={() => setIsOpen(!isOpen)} className="w-full rounded-xl mb-4 p-4 bg-slate-900 items-center text-white">
                    <div className="flex mb-4 justify-between">
                        <h2 className="text-2xl">{title}</h2>
                        <AiFillCaretUp />
                    </div>
                    <div className="flex gap-4">
                        <img className="h-[180px] rounded-xl" src={image} alt="aaaaa" />
                        <div className="w-full flex flex-col justify-between">
                            <p className="text-lg">{description}</p>
                            <a className="p-2 rounded-full bg-gradient-to-r text-white text-lg bg-indigo-500 from-pink-500 text-center font-bold w-full" target="blank_" href={link}>{t.projectButton}</a>
                        </div>
                    </div>
                </div>
                :
                //this is for when it's closed
                <div onClick={() => setIsOpen(!isOpen)} className="w-full rounded-xl mb-4 p-4 bg-slate-900 items-center text-white flex justify-between">
                    <h2 className="text-2xl">{title}</h2>
                    <AiFillCaretDown />
                </div>
            }
        </>
    );
}

export default Project;
