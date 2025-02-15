import Modal from "@/components/Modal";
import Table_ex from "@/components/work_1";
import ItemMove from "@/components/work_2";
import GeneratePDF from "@/components/work_3";
import Modal3D from "@/components/work_4";
import {LanguageContext} from "@/layouts/Layout";
import NextImage from "next/image.js";
import Link from "next/link";
import {useContext, useState} from "react";
import {useEffect} from "react";

export default function Home() {
  const {toggleLanguage, languageMode} = useContext(LanguageContext);
  const Image = NextImage.default;

  const profile = "/images/profile.jpg";
  const background = "/images/bg.gif";

  return (
    <div className="">
      <div className="pt-10 pb-12 relative">
        <div className="rounded-md relative my-8 h-[300px] mx-0 md:mx-24">
          <Image src={profile} alt={"nn"} width={300} height={300} className={"absolute -top-[55px] right-12 z-10"} />
          <Image src={background} alt="Animated GIF" layout="fill" objectFit="cover" className="opacity-50" />
          <div className="absolute z-10 top-12 left-12 md:block hidden text-black dark:text-white">
            <div className="flex flex-col">
              <span className="font-bold text-[45px]">{languageMode === "th" ? "ยินดีต้อนรับสู่ มินิโปรเจ็ค" : "Welcome to my mini project"}</span>
              <span className="font-bold text-[30px]">
                &lt;<a className="text-yellow-400">spans</a>&gt; {languageMode === "th" ? "สร้างเพื่อเป็นผลงานแนบ Resume" : "Created as a portfolio piece to attach to Resume."} &lt;/<a className="text-yellow-400">spans</a>&gt;
              </span>
            </div>
          </div>
          <div className="absolute z-10 bottom-5 w-full text-center md:hidden block text-[15px] dark:text-white text-black">
            &lt;<a className="text-yellow-400">spans</a>&gt; {languageMode === "th" ? "Version โทรศัพท์" : "Phone Version"} &lt;/<a className="text-yellow-400">spans</a>&gt;
          </div>
        </div>

        {/* ตัวอย่างงาน 1 */}
        <div className="mx-4 md:mx-24 text-[16px] md:text-[24px] my-4 text-black dark:text-white">
          <div className="flex justify-between">
            <span>{languageMode === "th" ? "ตัวอย่างงานลำดับที่ 1" : "Example of work number 1"}</span>
            <span>Table Get Data From DummyJSON</span>
          </div>
          <p className="text-[14px] md:text-[18px] mb-4">{languageMode === "th" ? "ตารางนี้สามารถใช้สำหรับแสดงข้อมูล ค้นหา เพิ่ม แก้ไข และลบข้อมูลได้ในที่เดียว" : "This table allows you to display, search, add, edit, and delete data all in one place."}</p>
          <Table_ex></Table_ex>
        </div>

        {/* ตัวอย่างงาน 2 */}
        <div className="mx-4 md:mx-24 text-[16px] md:text-[24px] my-4 text-black dark:text-white">
          <div className="flex justify-between">
            <span>{languageMode === "th" ? "ตัวอย่างงานลำดับที่ 2" : "Example of work number 2"}</span>
            <span>Auto Delete Todo List</span>
          </div>
          <p className="text-[14px] md:text-[18px] mb-4">{languageMode === "th" ? "เมื่อกดที่รายการ ระบบจะย้ายรายการนั้นไปยังหมวดหมู่โดยอัตโนมัติ หากไม่มีการตอบสนองภายใน 5 วินาที รายการจะถูกย้ายกลับไปยังรายการหลัก และเรียงตามลำดับที่กด" : "When an item is clicked, it will automatically move to its category. If there is no response within 5 seconds, it will be moved back to the main list in the order it was clicked."}</p>
          <ItemMove></ItemMove>
        </div>

        {/* ตัวอย่างงาน 3 */}
        <div className="mx-4 md:mx-24 text-[16px] md:text-[24px] my-4 text-black dark:text-white">
          <div className="flex justify-between">
            <span>{languageMode === "th" ? "ตัวอย่างงานลำดับที่ 3" : "Example of work number 3"}</span>
            <span>GeneratePDF use PDFMaker</span>
          </div>
          <p className="text-[14px] md:text-[18px]">{languageMode === "th" ? "กรอกข้อมูล แล้วเอาข้อมูลไปใส่ใน PDF" : "Fill in the information and insert the data into the PDF."}</p>
          <GeneratePDF></GeneratePDF>
        </div>

        {/* ตัวอย่างงาน 4 */}
        <div className="mx-4 md:mx-24 mb-12 text-[16px] md:text-[24px] my-4 text-black dark:text-white h-[50vh]">
          <div className="flex justify-between">
            <span>{languageMode === "th" ? "ตัวอย่างงานลำดับที่ 4" : "Example of work number 4"}</span>
            <span>Model 3D</span>
          </div>
          <p className="text-[14px] md:text-[18px]">{languageMode === "th" ? "แสดง model 3D" : "Show Model 3D"}</p>
          <Modal3D></Modal3D>
        </div>
      </div>
    </div>
  );
}
