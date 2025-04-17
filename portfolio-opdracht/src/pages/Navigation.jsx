import { Link, Outlet } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const Navigation = () => {
  const { lang, switchLanguage } = useLanguage();
  const langIsEn = lang === "en";

  const handleLanguageSwitch = () => {
    switchLanguage(langIsEn ? "nl" : "en");
  };

  return (
    <>
      <header className="z-10 text-white h-[9.8vh] flex justify-center w-screen shadow-xl bg-gray-900">
        <nav className="w-[inherit] px-8 flex h-[inherit] items-center justify-end">
          <ul className="flex w-[100%] gap-8">
            <li className="transition font-bold hover:text-purple-300 hover:scale-110 duration-200 mr-auto text-2xl">
              <Link to="/home">Home</Link>
            </li>
            <li
              onClick={handleLanguageSwitch}
              className="cursor-pointer font-bold hover:text-purple-300 hover:scale-110 duration-200 text-xl"
            >
              <span className={langIsEn ? "text-pink-500" : ""}>EN</span>/
              <span className={!langIsEn ? "text-pink-500" : ""}>NL</span>
            </li>
          </ul>
        </nav>
      </header>
      <div className="h-[1px] bg-gradient-to-r bg-indigo-500 from-pink-500 w-full"></div>
      <Outlet />
    </>
  );
};

export default Navigation;
