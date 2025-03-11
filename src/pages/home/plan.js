import Modal from "@/components/Modal";
import {LanguageContext} from "@/layouts/Layout";
import NextImage from "next/image.js";
import Link from "next/link";
import {useContext, useState} from "react";
import {useEffect} from "react";

export default function Home() {
  const {toggleLanguage, languageMode} = useContext(LanguageContext);
  const Image = NextImage.default;

  const profile = "/images/plan_1.png";
  //   let menu = ["first", "second", "third", "fourth", "fifth"];
  //   const [menu_set, setMenu_Set] = useState(menu);
  //   console.log(menu);

  return (
    <div className="p-4 lg:px-24 lg:pt-4 mx-auto">
      <div className="dark:text-white">
        {/* <div>{menu_set.map(index , menu)(<div>{menu}</div>)}</div> */}
        {/* {menu_set.map((item, index) => (
          <div key={index}>{item}</div>
        ))} */}
        <div className="">
          <span className="text-[32px]">{languageMode === "th" ? "บรรลุเป้าหมาย" : "Succeed"}</span>
          <div>
            <span className="text-green-500 text-[20px]">✓ </span>
            {languageMode === "th" ? "เวอร์ชั่น 1" : "Version 1"}
          </div>
          <div>
            <span className="text-green-500 text-[20px] pl-6">✓ </span>
            {languageMode === "th" ? "เพิ่ม About me page" : "Add About me page"}
          </div>
          <div>
            <span className="text-green-500 text-[20px] pl-6">✓ </span>
            {languageMode === "th" ? "เพิ่ม Working Experience page" : "Add Working Experience page"}
          </div>
          <div>
            <span className="text-green-500 text-[20px] pl-6">✓ </span>
            {languageMode === "th" ? "เพิ่ม Ability page" : "Add Ability page"}
          </div>
          <div>
            <span className="text-green-500 text-[20px] pl-6">✓ </span>
            {languageMode === "th" ? "เพิ่ม Working Contact page" : "Add Working Contact page"}
          </div>
          <div>
            <span className="text-green-500 text-[20px]">✓ </span>
            {languageMode === "th" ? "เวอร์ชั่น 1.5" : "Version 1.5"}
          </div>
          <div>
            <span className="text-green-500 text-[20px] pl-6">✓ </span>
            {languageMode === "th" ? "รวม  Working Experience และ Ability เป็นหน้าเดียวกัน" : "Including Working Experience and Ability in one page"}
          </div>
          <div>
            <span className="text-green-500 text-[20px] pl-6">✓ </span>
            {languageMode === "th" ? "เพิ่มแถบ navbar" : "Add navbar tab"}
          </div>
          <div>
            <span className="text-green-500 text-[20px] pl-6">✓ </span>
            {languageMode === "th" ? "ภาษาไทย และ อังกฤษ" : "language Thai and English"}
          </div>
          <div>
            <span className="text-green-500 text-[20px] pl-6">✓ </span>
            {languageMode === "th" ? "ธีม มืด และสว่าง" : "Dark and light theme"}
          </div>
          <div>
            <span className="text-green-500 text-[20px] pl-6">✓ </span>
            {languageMode === "th" ? "แถบ Resume" : "Resume Tab"}
          </div>
          <div>
            <span className="text-green-500 text-[20px] pl-6">✓ </span>
            {languageMode === "th" ? "Deploy Web Project ไปที่ Vercel" : "Deploy Web Project to Vercel"}
          </div>
          <div>
            <span className="text-green-500 text-[20px] pl-12">✓ </span>
            {languageMode === "th" ? "ทดสอบฟั่งชั่น ทั้งหมด" : "Test all function"}
          </div>
          <div>
            <span className="text-green-500 text-[20px] pl-6">✓ </span>
            {languageMode === "th" ? "สร้างเวอร์ชันทดสอบ" : "Make a test version"}
          </div>
          <div>
            <span className="text-green-500 text-[20px] pl-12">✓ </span>
            {languageMode === "th" ? "ทดสอบฟั่งชั่น ทั้งหมด" : "Test all function"}
          </div>
        </div>
        <div className="">
          <span className="text-[32px]">{languageMode === "th" ? "เป้าหมายถัดไป" : "next target"}</span>
          <div>
            <span className="text-red-500 text-[20px]">X </span>
            {languageMode === "th" ? "เวอร์ชั่น 2.0" : "Version 2.0"}
          </div>
          <div>
            <span className="text-red-500 text-[20px] pl-6">X </span>
            {languageMode === "th" ? "แผนปรับปรุง UX/UI Design และฟังชั่นใหม่" : "UX/UI Design Improvement Plan and new functions"}
          </div>
          <div>
            <span className="text-green-500 text-[20px] pl-12">✓ </span>
            {languageMode === "th" ? "แบบร่าง UX/UI" : "UX/UI draft"}
          </div>
          <div>
            <span className="text-red-500 text-[20px] pl-12">X </span>
            {languageMode === "th" ? "เพิ่ม Login page" : "Add Login page"}
          </div>
          <div>
            <span className="text-red-500 text-[20px] pl-12">X </span>
            {languageMode === "th" ? "เพิ่ม Main menu page" : "Add Main menu page"}
          </div>
          <div>
            <span className="text-red-500 text-[20px] pl-12">X </span>
            {languageMode === "th" ? "แก้ About me page" : "Fix About me page"}
          </div>
          <div>
            <span className="text-red-500 text-[20px] pl-12">X </span>
            {languageMode === "th" ? "เพิ่ม Progress page" : "Add Progress page"}
          </div>
          <div>
            <span className="text-green-500 text-[20px] pl-12">✓ </span>
            {languageMode === "th" ? "เพิ่ม Update plan page" : "Add Update plan page"}
          </div>
          <div>
            <span className="text-red-500 text-[20px] pl-12">X </span>
            {languageMode === "th" ? "เพิ่ม Project Objective page" : "Add Project Objective page"}
          </div>
          <div>
            <span className="text-red-500 text-[20px] pl-6">X </span>
            {languageMode === "th" ? "ทดสอบ Manual" : "Test Manual"}
          </div>
          <div>
            <span className="text-red-500 text-[20px] pl-12">X </span>
            {languageMode === "th" ? "ทดสอบความสะดวก" : "Test comfort"}
          </div>
          <div>
            <span className="text-red-500 text-[20px] pl-12">X </span>
            {languageMode === "th" ? "ทดสอบโทนสี" : "Test color tone"}
          </div>
          <div>
            <span className="text-red-500 text-[20px] pl-12">X </span>
            {languageMode === "th" ? "ทดสอบการตอบสนอง" : "Test response"}
          </div>
          <div>
            <span className="text-red-500 text-[20px] pl-12">X </span>
            {languageMode === "th" ? "ทดสอบฟั่งชั่น ทั้งหมด" : "Test all function"}
          </div>
          <Image src={profile} alt={"nn"} width={1500} height={1500} className={"mt-4 md:mt-0"} />
        </div>
      </div>
    </div>
  );
}
