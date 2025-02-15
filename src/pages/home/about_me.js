import Modal from "@/components/Modal";
import {LanguageContext} from "@/layouts/Layout";
import NextImage from "next/image.js";
import Link from "next/link";
import {useContext, useState} from "react";
import {useEffect} from "react";

export default function Home() {
  const {toggleLanguage, languageMode} = useContext(LanguageContext);
  const Image = NextImage.default;

  const profile = "/images/profile_2.jpg";
  const mini_profile = "/images/mini_profile.jpg";
  const background = "/images/bg.gif";
  return (
    <div className="p-24">
        <div className="mx-auto">
          <div className="h-full w-full grid md:grid-cols-2 place-items-center">
            <div className="col-span-1">
              <span className="text-[20px] md:text-[40px] lg:text-[80px] dark:text-green-500">{languageMode === "en" ? "ABOUT ME." : "เกี่ยวกับฉัน"}</span>
              <p className="text-[15px] md:text-[15px] lg:text-[30px] dark:text-yellow-500">Frontend & Software Developer</p>
              <p className="text-[10px] md:text-[10px] lg:text-[20px] dark:text-white">{languageMode === "th" ? "ผมเป็นนักพัฒนาซอฟต์แวร์ ที่มีประสบการณ์ด้าน ออกแบบ ทดสอบ แก้ไข พัฒนาซอฟต์แวร์ และมีประสบการณ์ด้านอื่นๆเช่น ฮาร์ดแวร์ ในการพัฒนาระบบไร้สาย หรือระบบอัตโนมัติ" : "I'am a Software Developer With experience in designing, testing, debugging, and developing software, as well as expertise in other areas such as hardware for wireless systems or automation system development."}</p>
            </div>
            <Image src={profile} alt={"nn"} width={500} height={500} className={"mt-4 md:mt-0"} />
          </div> 
        </div>
    </div>
  );
}
