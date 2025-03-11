import Modal from "@/components/Modal";
import {LanguageContext} from "@/layouts/Layout";
import NextImage from "next/image.js";
import Link from "next/link";
import {useContext, useState} from "react";
import {useEffect} from "react";

export default function Home() {
  const {toggleLanguage, languageMode} = useContext(LanguageContext);
  const Image = NextImage.default;

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="p-24">
      <div className="mx-auto">
        <div className="flex items-center justify-center h-screen bg-gray-900 border">
          <div className="w-40 h-40 border-0 rounded-xl flex items-center justify-center text-white bg-black transition-all duration-300 hover:animate-colorBorderChange">Hover Me</div>
        </div>

        <div className={`flex items-center justify-center p-4 border-0 border-gray-500 transition-all duration-300 ${activeIndex !== null ? "scale-110" : "scale-100"}`}>
          {[1, 2, 3].map((num, index) => (
            <span key={index} className={`m-2 p-4 border-0 border-gray-500 cursor-pointer transition-all duration-100 ${activeIndex === index ? "scale-150 text-white animate-colorBackGroundChange" : "scale-100 bg-gray-300"}`} onClick={() => setActiveIndex(index)}>
              {num}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
