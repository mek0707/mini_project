import Modal from "@/components/Modal";
import {LanguageContext} from "@/layouts/Layout";
import NextImage from "next/image.js";
import Link from "next/link";
import {useContext, useState} from "react";
import {useEffect} from "react";

export default function Home() {
  const {toggleLanguage, languageMode} = useContext(LanguageContext);
  const Image = NextImage.default;

  const profile = "/images/profile.jpg";
  const profile_icon = "/language/th_.svg";
  return (
    <div className="bg-white dark:bg-black h-full">
      <div className="">
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-10 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 flex gap-2 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M2.5 2h19v20h-19zm2 2v16h15V4zM7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z" />
              </svg>
              {languageMode === "th" ? "ประสบการณ์การทำงาน" : "Work experience"}
            </h1>

            {/*Company*/}
            <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h2 className="text-xl font-semibold flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M2 2h10v8h10v12H2zm10 10v8h4v-5h4v-3zm8 5h-2v3h2zm-10 3V4H4v16zM8.004 6v2.004H6v-2h.004V6zm0 5v2.004H6v-2h.004V11zm0 5v2.004H6v-2h.004V16z" />
                </svg>
                {languageMode === "th" ? "บริษัทที่เคยทำงาน" : "Previous Employers"}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                {languageMode === "th" ? "บริษัท ว.ศิริกาญ" : "VSK autopart"}
                <span className="text-gray-500 pl-2">{languageMode === "th" ? "2567 - 2567" : "2024 - 2024"}</span>
              </p>
              <p className="mt-3">{languageMode === "th" ? "งานที่รับผิดชอบ" : "Responsible work"}</p>
              <p className="text-gray-700 dark:text-gray-500">
                {languageMode === "th"
                  ? "ตำแหน่งงาน Full Stack Software Developer รับผิดชอบในการพัฒนา สร้างใหม่ ตรวจสอบ ปรับปรุง และแก้ไขปัญหา รวมถึงการสร้างโซลูชั่นและสรุปขั้นตอนการทำงานของทั้งระบบภายใน Software House ร่วมกับหัวหน้าแผนกที่ต้องการ การทำงานเฉพาะของแผนกนั้นๆและสามารถย้ายหรือดึงข้อมูลจากข้อมูลส่วนกลางได้"
                  : "Full Stack Software Developer Responsible for developing, creating, reviewing, improving, and troubleshooting software solutions. This includes designing system-wide solutions and documenting workflows within a Software House. The role involves collaborating with department heads to develop specialized functionalities for their respective departments while ensuring data can be migrated or retrieved from the central database."}
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3">
                {languageMode === "th" ? "บริษัท เทเลคอร์ป" : "Telecorp co ltd"}
                <span className="text-gray-500 pl-2">{languageMode === "th" ? "2566 - 2567" : "2023 - 2024"}</span>
              </p>
              <p className="mt-3">{languageMode === "th" ? "งานที่รับผิดชอบ" : "Responsible work"}</p>
              <p className="text-gray-700 dark:text-gray-500">{languageMode === "th" ? "ตำแหน่งงาน Front-end Developer รับผิดชอบในการพัฒนา ตรวจสอบ ปรับปรุง และแก้ไขปัญหาที่เกิดขึ้นในกระบวนการพัฒนา Web Application โดยทำงานร่วมกับทีมพัฒนา" : "Front-end Developer Responsible for developing, reviewing, improving, and troubleshooting issues in the Web Application development process. This role involves working closely with the development team."}</p>
            </div>

            {/* Work History */}
            <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                    <path d="M21 6H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V21M24 34v8" />
                    <path d="m32 6l-4 4l4 4m6-8l4 4l-4 4M14 42h20" />
                  </g>
                </svg>
                {languageMode === "th" ? "Software developer" : "Software developer"}
                <span className="text-gray-500">{languageMode === "th" ? "2567 - 2568" : "2024 - 2025"}</span>
              </h2>

              <ul className="list-disc pl-5 mt-3 text-gray-700 dark:text-gray-300">
                <li> {languageMode === "th" ? "ออกแบบและพัฒนาแอปพลิเคชันด้วย C#, .NET และ SQL Server" : "Designed and developed applications using C#, .NET, and SQL Server."}</li>
                <li> {languageMode === "th" ? "ใช้ Docker และ AWS เพื่อปรับปรุงโครงสร้างระบบ" : "Utilized Docker and AWS to enhance system architecture."}</li>
                <li> {languageMode === "th" ? "พัฒนา API เพื่อเชื่อมต่อกับ DirectAdmin และจัดการ Email" : "Developed APIs to integrate with DirectAdmin and manage emails."}</li>
                <li> {languageMode === "th" ? "จัดการตรวจสอบข้อมูลใน ฐานข้อมูลและแยกประเภท เพื่อให้ง่ายต่อการนำไปใช้งาน" : "Managed data verification and classification in the database to improve usability."}</li>
              </ul>
            </div>

            <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                    <path d="M21 6H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V21M24 34v8" />
                    <path d="m32 6l-4 4l4 4m6-8l4 4l-4 4M14 42h20" />
                  </g>
                </svg>
                {languageMode === "th" ? "Front-End Developer" : "Front-End Developer"}
                <span className="text-gray-500">{languageMode === "th" ? "2566 - 2567" : "2023 - 2024"}</span>
              </h2>

              <ul className="list-disc pl-5 mt-3 text-gray-700 dark:text-gray-300">
                <li> {languageMode === "th" ? "ออกแบบและพัฒนาแอปพลิเคชันด้วย Javascript , HTML , CSS , Tailwind CSS , และ Next.js" : "Designed and developed applications using JavaScript, HTML, CSS, Tailwind CSS, and Next.js."}</li>
                <li> {languageMode === "th" ? "ใช้ Tailwind CSS ร่วมกับ Next.js เพื่อสามารถ Custom ระบบตามที่ได้รับมอบหมายงานมา" : "Utilized Tailwind CSS with Next.js to customize the system according to assigned tasks."}</li>
                <li> {languageMode === "th" ? "จัดทำ ตรวจสอบ แก้ไข ปัญหาที่เกิดขึ้นกับระบบ ที่จากที่รับมาจาก SA และ Tester หรือตรวจสอบค้นหาปัญหาด้วยตัวเอง พร้อมทดสอบ โค้ดในรูปแบบต่างๆ" : "Implemented, reviewed, and resolved system issues reported by SA and testers or identified issues independently, along with testing code in various scenarios."}</li>
              </ul>
            </div>

            {/* Key Projects */}
            <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h2 className="text-xl font-semibold flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                  />
                </svg>
                {languageMode === "th" ? "โครงการสำคัญ" : "Important projects"}
              </h2>

              <p className="mt-3">
                {languageMode === "th" ? "บริษัท ว.ศิริกาญ" : "VSK autopart"}
                <span className="text-gray-500 pl-2">{languageMode === "th" ? "2567 - 2567" : "2024 - 2024"}</span>
              </p>
              <p className="text-gray-500 dark:text-gray-300 mt-3">{languageMode === "th" ? "ระบบจัดการอีเมลอัตโนมัติ" : "Automated Email Management System"}</p>
              <p className="text-gray-700 dark:text-gray-500">
                {languageMode === "th"
                  ? "พัฒนาระบบที่ใช้ API ของ DirectAdmin เพื่อสร้างและจัดการอีเมลแบบอัตโนมัติ ลดเวลาการทำงานของฝ่ายไอทีที่เกี่ยวกับระบบอีเมลบริษัทรวมไปถึงอีเมลล์ประจำตัวพนักงานได้ถึง 100% จากที่ต้องทำงานแก้ปัญหาระบบอีเมลวันเสาร์ทำทุกวัน ตอนนี้ไม่มีการทำงานวันเสาร์แล้ว"
                  : "Developed a system utilizing DirectAdmin’s API to automate email creation and management, reducing the IT department’s workload related to company email systems, including employee email accounts, by 100%. Previously, IT had to handle email issues every Saturday, but now, no Saturday work is required."}
              </p>
              <p className="text-gray-500 dark:text-gray-300 mt-3">{languageMode === "th" ? "ตรวจสอบ เพิ่ม และแยกประเภทข้อมูลทั้งหมดในฐานข้อมูลส่วนกลาง" : "Verification, Addition, and Classification of Data in the Central Database"}</p>
              <p className="text-gray-700 dark:text-gray-500">
                {languageMode === "th"
                  ? "ทำการตรวจสอบข้อมูลเก่าๆ ที่ไม่มีใครรับผิดชอบเป็นเวลานาน เนื่องจากข้อมูลพวกนี้ไม่สามารถเอาไปใช้ในสาขาลูกได้จึงต้องทำการแยกประเภท และสร้างฐานข้อมูลใหม่ โดยทำใหม่พนักงานสามารถตรวจสอบจัดการข้อมูลแบบ แมนนวลผ่านเว็บบริษัทได้เลย"
                  : "Reviewed outdated and unmaintained data that had been neglected for a long time. Since this data was not usable by branch offices, it was necessary to classify and reorganize it into a new database. Employees can now manually review and manage data directly through the company's web system."}
              </p>
              <p className="text-gray-500 dark:text-gray-300 mt-3">{languageMode === "th" ? "จัดทำ ใบปะสติกเกอร์" : "Sticker Label Generation"}</p>
              <p className="text-gray-700 dark:text-gray-500">{languageMode === "th" ? "จัดทำใบปะสำหรับขนส่งระหว่างสาขา โดยจัดทำเป็นส่วนเสริมในเว็บบริษัท โดยใช้ jQuery เขียนแทรกเข้าไป" : "Developed a label printing system for inter-branch shipping as an additional feature within the company’s website. This was implemented using jQuery for seamless integration."}</p>

              <p className="mt-6">
                {languageMode === "th" ? "บริษัท เทเลคอร์ป" : "Telecorp co ltd"}
                <span className="text-gray-500 pl-2">{languageMode === "th" ? "2566 - 2567" : "2023 - 2024"}</span>
              </p>
              <p className="text-gray-500 dark:text-gray-300 mt-3">{languageMode === "th" ? "รับผิดการทำงานร่วมกับทีม" : "Responsible for working with a team"}</p>
              <p className="text-gray-700 dark:text-gray-500">{languageMode === "th" ? "พัฒนาการทำงานของเว็บแอฟฟริเคชั่น ฝั่ง Front-end และรวมไปถึงตรวจสอบ แก้ไขปัญหาที่เกิด ที่มาจากการได้รับแจ้ง กับตรวจหาด้วยตัวเอง" : "Developed and improved the functionality of the web application on the front-end side, including reviewing, troubleshooting, and resolving reported issues as well as identifying problems independently."}</p>
            </div>

            <h1 className="text-3xl font-bold mb-8 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2.5a1.5 1.5 0 0 0-1.376.9l-.262.6H4.5v16h15V4h-5.862l-.262-.6A1.5 1.5 0 0 0 12 2.5M9.128 2A3.5 3.5 0 0 1 12 .5c1.19 0 2.24.594 2.872 1.5H21.5v20h-19V2zM12 8a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M6 18a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1h-2v-1a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1H6z" />
              </svg>
              {languageMode === "th" ? "ความสามารถ" : "ability"}
            </h1>

            {/* Skills */}
            <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M3 21h4L20 8a1.5 1.5 0 0 0-4-4L3 17zM14.5 5.5l4 4" />
                    <path d="M12 8L7 3L3 7l5 5M7 8L5.5 9.5M16 12l5 5l-4 4l-5-5m4 1l-1.5 1.5" />
                  </g>
                </svg>
                {languageMode === "th" ? "ทักษะและเครื่องมือ" : "Skills and tools"}
              </h2>
              <div className="flex items-center gap-2 mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.68 14.98H6V9h1.71c1.28 0 1.71 1.03 1.71 1.71v2.56c0 .68-.42 1.71-1.74 1.71m4.7-3.52v1.07H11.2v1.39h1.93v1.07h-2.25c-.4.01-.74-.31-.75-.71V9.75c-.01-.4.31-.74.71-.75h2.28v1.07H11.2v1.39zm4.5 2.77c-.48 1.11-1.33.89-1.71 0L13.77 9h1.18l1.07 4.11L17.09 9h1.18z" />
                  <path fill="currentColor" d="M7.77 10.12h-.63v3.77h.63c.14 0 .28-.05.42-.16c.14-.1.21-.26.21-.47v-2.52c0-.21-.07-.37-.21-.47a.72.72 0 0 0-.42-.15" />
                </svg>
                <p className="">{languageMode === "th" ? "ความสามารถหลัก" : "VSK autopart"}</p>
              </div>

              <div className="pl-4 mt-3">
                <p>1. {languageMode === "th" ? "การออกแบบและพัฒนาเว็บไซต์" : "Frontend Development"}</p>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  <li>HTML</li>
                  <li>CSS , Tailwind CSS Framework</li>
                  <li>JavaScript</li>
                  <li>React Libraries, Next.js Frameworks</li>
                </ul>
                <p className="mt-2">2. {languageMode === "th" ? "การพัฒนาเว็บไซต์ฝั่งเซิฟเวอร์" : "Backend Development"}</p>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  <li>Node.js</li>
                  <li>API</li>
                </ul>
                <p className="mt-2">3. {languageMode === "th" ? "การจัดการและวิเคราะห์ข้อมูล" : "Database & Query"}</p>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  <li>SQL</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>Firebase</li>
                  <li>NO SQL</li>
                </ul>
                <p className="mt-2">4. {languageMode === "th" ? "การพัฒนาโปรแกรมทั่วไป" : "Programming & Scripting"}</p>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  <li>Python</li>
                  <li>C</li>
                  <li>C#</li>
                  <li>PHP</li>
                </ul>
                <p className="mt-2">5. {languageMode === "th" ? "การจัดการระบบและเครื่องมือ" : "DevOps"}</p>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  <li>Linux</li>
                  <li>Github</li>
                </ul>
                <p className="mt-2">6. {languageMode === "th" ? "เครื่องมือและฟีเจอร์เสริม" : "Libraries & Frameworks"}</p>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  <li>jQuery</li>
                </ul>
                <p className="mt-2">7. {languageMode === "th" ? "ฮาร์ดแวร์" : "Hardware"}</p>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  <li>arduino</li>
                  <li>node mcu esp8266</li>
                  <li>raspberry pi</li>
                </ul>
                <p className="mt-2">8. {languageMode === "th" ? "การสื่อสารและทำงานร่วม" : "Collaboration Tools"}</p>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  <li>Figma</li>
                  <li>Slack</li>
                </ul>
              </div>

              <div className="flex items-center gap-2 mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.68 14.98H6V9h1.71c1.28 0 1.71 1.03 1.71 1.71v2.56c0 .68-.42 1.71-1.74 1.71m4.7-3.52v1.07H11.2v1.39h1.93v1.07h-2.25c-.4.01-.74-.31-.75-.71V9.75c-.01-.4.31-.74.71-.75h2.28v1.07H11.2v1.39zm4.5 2.77c-.48 1.11-1.33.89-1.71 0L13.77 9h1.18l1.07 4.11L17.09 9h1.18z" />
                  <path fill="currentColor" d="M7.77 10.12h-.63v3.77h.63c.14 0 .28-.05.42-.16c.14-.1.21-.26.21-.47v-2.52c0-.21-.07-.37-.21-.47a.72.72 0 0 0-.42-.15" />
                </svg>
                <p className="">{languageMode === "th" ? "ความสามารถรอง" : "VSK autopart"}</p>
              </div>
              <div className="pl-4 mt-3">
                <p className="mt-2">1. {languageMode === "th" ? "การพัฒนาซอฟต์แวร์ และการออกแบบ" : "Software development and design"}</p>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  <li>UI/UX Design Basic</li>
                  <li>Tester Basic Case</li>
                </ul>
                <p className="mt-2">2. {languageMode === "th" ? "เครื่องมือและแพลตฟอร์ม" : "Tools and platforms"}</p>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  <li>Docker</li>
                </ul>
              </div>

              <div className="flex items-center gap-2 mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M17 10.43V2H7v8.43c0 .35.18.68.49.86l4.18 2.51l-.99 2.34l-3.41.29l2.59 2.24L9.07 22L12 20.23L14.93 22l-.78-3.33l2.59-2.24l-3.41-.29l-.99-2.34l4.18-2.51c.3-.18.48-.5.48-.86m-4 1.8l-1 .6l-1-.6V3h2z" />
                </svg>
                <p className="">{languageMode === "th" ? "ความสามารถอื่นๆ" : "VSK autopart"}</p>
              </div>
              <div className="pl-4 mt-3">
                <p className="mt-2">1. {languageMode === "th" ? "ทั่วไป" : "General"}</p>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  {languageMode === "th" ? "พูดคุย สื่อสารภาษาอังกฤษได้ในระดับ A2" : "Able to communicate in English at an A2 level."}
                  {languageMode === "th" ? "ใช้โปรแกรมพื้นฐานได้ Word, Excel, Outlook และสามารถสอนการใช้." : "Proficient in basic software applications such as Word, Excel, and Outlook, with the ability to provide training."}
                  {languageMode === "th" ? "เรียนรู้ได้เร็ว" : "Quick learner."}
                  {languageMode === "th" ? "ปรับตัวในที่ทำงานได้ เข้าได้กับทุกวัย ทุกเพศ ไม่จำเป็นต้องทำงานร่วมเฉพาะคนรุ่นเดียวกัน" : "Adaptable to different work environments and able to collaborate with people of all ages and genders, not limited to working with peers."}
                </ul>
                <p className="mt-2">2. {languageMode === "th" ? "เฉพาะทาง" : "Specialized"}</p>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  {languageMode === "th" ? "มีความรู้และสามารถทำระบบ Network ได้เฉพาะระบบของ Cisco" : "Knowledgeable in networking, specifically Cisco systems."}
                  {languageMode === "th" ? "จัดทำและซ่อมแซมระบบอิเล็กทรอนิกส์ รวมถึง เครื่องปริ้นเตอร์ และซ่อมคอมพิวเตอร์" : "Capable of setting up and repairing electronic systems, including printers and computers."}
                  {languageMode === "th" ? "มีความสนใจ หลายสายงานเช่น วิศวะอิเล็กทรอนิกส์ ระบบควบคุมอัตโนมัติ ศิลปะ โมเดล 3 มิติ" : "Interested in multiple fields such as electronics engineering, automation systems, art, and 3D modeling."}
                  {languageMode === "th" ? "ตรวจเช็คระบบ อาคาร" : "Experienced in building system inspections."}
                  {languageMode === "th" ? "จัดทำเอกสารออนไลน์" : "Skilled in creating online documents."}
                </ul>
              </div>
            </div>

            {/* Future Goals */}
            <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <circle cx="12.5" cy="4.5" r="2" fill="currentColor" />
                  <path fill="currentColor" d="m19.77 17.72l-.64-6.37A1.49 1.49 0 0 0 17.64 10H16c-1.5-.02-2.86-.54-3.76-1.44l-2-1.98A1.95 1.95 0 0 0 8.83 6c-.51 0-1.02.2-1.41.59L4.08 9.91c-.53.68-.51 1.57-.21 2.13l1.43 2.8l-3.15 4.05l1.57 1.24L7.4 15.4l-.17-1.36l.77.71V20h2v-6.12l-2.12-2.12l2.36-2.36c.94.94 1.72 1.82 3.59 2.32L13 20h1.5l.41-3.5h3.18l.14 1.22c-.44.26-.73.74-.73 1.28c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.54-.29-1.02-.73-1.28M15.09 15l.41-3.5h2l.41 3.5z" />
                </svg>
                {languageMode === "th" ? "เป้าหมายการพัฒนาตัวเอง ลำดับถัดไป" : "Next Steps for Personal Development Goals"}
              </h2>
              <p className="text-gray-700 dark:text-gray-500"> {languageMode === "th" ? "กำลังศึกษาเรื่อง" : "Studying"} Machine Learning , Game Engine และ Model 2D and 3D</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
