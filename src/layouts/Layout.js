import {useRouter} from "next/router";
import React, {createContext, useEffect, useState} from "react";
import NextImage from "next/image.js";

export const LanguageContext = createContext();

export default function Layout({children}) {
  const [darkMode, setDarkMode] = useState(false);
  const [languageMode, setLanguageMode] = useState(false);

  const router = useRouter();
  const Image = NextImage.default;

  // Utility function for managing class changes
  const updateClass = (classToAdd, classesToRemove) => {
    document.documentElement.classList.remove(...classesToRemove);
    document.documentElement.classList.add(classToAdd);
  };

  // Initialize theme and language settings from localStorage
  useEffect(() => {
    const initializeSettings = () => {
      // Theme initialization
      const savedTheme = localStorage.getItem("theme") || "dark";
      setDarkMode(savedTheme === "dark");
      updateClass(savedTheme, ["dark", "light"]);

      // Language initialization
      const savedLanguage = localStorage.getItem("language") || "en";
      setLanguageMode(savedLanguage);
      updateClass(savedLanguage, ["en", "th"]);

      console.log("1");
    };

    initializeSettings();
  }, []);

  const toggleDarkMode = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    localStorage.setItem("theme", newTheme);
    updateClass(newTheme, ["dark", "light"]);
  };

  const toggleLanguage = () => {
    const newLanguage = languageMode === "en" ? "th" : "en";
    setLanguageMode(newLanguage);
    localStorage.setItem("language", newLanguage);

    document.documentElement.classList.remove("en", "th");
    document.documentElement.classList.add(newLanguage);
  };

  const openPDF = () => {
    // if (languageMode === "th") {
    const pdfUrl = "/CV THAI 2568.pdf";
    //   window.open(pdfUrl, "_blank");
    // }else{
    const pdfUrl_1 = "/CV ENGLISH 2025.pdf";
    window.open(pdfUrl, "_blank");
    window.open(pdfUrl_1, "_blank");
    // }
  };

  const icon_th_ = "/language/th_.svg";
  const icon_th_dark = "/language/th_dark.svg";
  const icon_en_ = "/language/en_.svg";
  const icon_en_dark = "/language/en_dark.svg";

  return (
    <div className="">
      <LanguageContext.Provider value={{languageMode, toggleLanguage}}>
        <div className="flex flex-col">
          {/* Header */}
          <header className="sticky top-0  bg-gray-500 z-50 md:flex justify-between gap-4 p-2 items-center  dark:text-white dark:bg-slate-600">
            <div className="md:flex items-center text-white dark:text-white">
              <div className="border-r border-r-gray-200 text-center text-[32px] md:text-[18px] px-4 font-extrabold cursor-not-allowed">
                Wongsatorn{" "}
                <div className="flex justify-center md:justify-start md:hidden  visible">
                  <button onClick={openPDF} className="p-2 rounded hover:rounded-full hover:bg-stone-200 hover:dark:bg-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                    </svg>
                  </button>
                  <button onClick={toggleDarkMode} className="p-2 rounded hover:rounded-full hover:bg-stone-200 hover:dark:bg-slate-300">
                    {darkMode ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-6">
                        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  <button onClick={toggleLanguage} className="p-2 rounded hover:rounded-full hover:bg-stone-200 hover:dark:bg-slate-300">
                    {languageMode === "th" ? <Image src={darkMode ? icon_th_dark : icon_th_} alt="Thai Icon" width={24} height={24} /> : <Image src={darkMode ? icon_en_dark : icon_en_} alt="English Icon" width={24} height={24} />}
                  </button>
                </div>
              </div>
              <div className="text-[14px] md:text-[16px] ">
                <span onClick={() => router.push("/home/about_me")} className="p-2 px-3 hover:text-black dark:hover:text-gray-300 cursor-pointer">
                  {languageMode === "th" ? "เกี่ยวกับฉัน" : "About Me"}
                </span>
                <span onClick={() => router.push("/home/working_experience")} className="p-2 px-3 hover:text-black dark:hover:text-gray-300 cursor-pointer">
                  {languageMode === "th" ? "ประสบการณ์ทำงาน" : "Working Experience"}
                </span>
                <span onClick={() => router.push("/home/example_work")} className="p-2 px-3 hover:text-black dark:hover:text-gray-300 cursor-pointer">
                  {languageMode === "th" ? "ตัวอย่างงาน" : "Example Work"}
                </span>
                <span onClick={() => router.push("/home/contact")} className="p-2 px-3 hover:text-black dark:hover:text-gray-300 cursor-pointer">
                  {languageMode === "th" ? "ติดต่อ" : "Contact"}
                </span>
              </div>
            </div>

            <div className="md:block hidden">
              <div className="flex justify-center md:justify-start ">
                <button onClick={openPDF} className="p-2 rounded hover:rounded-full hover:bg-stone-200 hover:dark:bg-slate-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                  </svg>
                </button>
                <button onClick={toggleDarkMode} className="p-2 rounded hover:rounded-full hover:bg-stone-200 hover:dark:bg-slate-300">
                  {darkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-6">
                      <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                <button onClick={toggleLanguage} className="p-2 rounded hover:rounded-full hover:bg-stone-200 hover:dark:bg-slate-300">
                  {languageMode === "th" ? <Image src={darkMode ? icon_th_dark : icon_th_} alt="Thai Icon" width={24} height={24} /> : <Image src={darkMode ? icon_en_dark : icon_en_} alt="English Icon" width={24} height={24} />}
                </button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-grow">{children}</main>

          {/* Footer */}
          {/* <footer className="bg-gray-800 text-white p-2 text-center">
        <p>© 2025 MR. Wongsatorn Naruroodganawaree</p>
      </footer> */}
        </div>
      </LanguageContext.Provider>
    </div>
  );
}
