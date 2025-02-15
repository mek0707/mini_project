import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "./vfs_fonts";
import {LanguageContext} from "@/layouts/Layout";
import {useContext, useEffect, useState} from "react";
import DocDefinition, {PDF_Example_1, PDF_Test_1, PDF_Work_1, PDF_Work_1_ENGLISH, PDF_Work_1_THAI} from "./pdf_file/pdf_w_1.js";

export default function GeneratePDF() {
  // const [pdfMake, setPdfMake] = useState(null);
  const {toggleLanguage, languageMode} = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    title: "",
    firstname: "",
    lastname: "",
    birthdate: "",
    gender: "",
    age: "",
    race: "",
    nationality: "",
    religion: "",
    status: "",
    phone: "",
    email: "",
    image: "",
  });

  useEffect(() => {
    const loadVFS = async () => {
      try {
        pdfMake.vfs = pdfFonts;
        pdfMake.fonts = {
          THSarabunNew: {
            normal: "THSarabunNew.ttf",
            bold: "THSarabunNew-Bold.ttf",
            italics: "THSarabunNew-Italic.ttf",
            bolditalics: "THSarabunNew-BoldItalic.ttf",
          },
          Roboto: {
            normal: "Roboto-Regular.ttf",
            bold: "Roboto-Medium.ttf",
            italics: "Roboto-Italic.ttf",
            bolditalics: "Roboto-MediumItalic.ttf",
          },
        };
      } catch (error) {
        console.error("Error loading VFS file", error);
      }
    };

    loadVFS();
  }, []);

  const printPDF = () => {
    // สร้าง docDefinition โดยใช้คอมโพเนนต์ DocDefinition

    if (!formData.title || !formData.firstname || !formData.lastname || !formData.birthdate || !formData.gender || !formData.age || !formData.race || !formData.nationality || !formData.religion || !formData.status || !formData.phone || !formData.email || !formData.image) {
      alert(`${languageMode === "th" ? "กรุณาใส่ข้อมูลให้ครบ" : "Please enter complete information."}`);
      return; // หยุดการทำงาน ไม่ให้ส่งข้อมูลไป
    }

    const language = window.confirm(`${languageMode === "th" ? "กรุณาเลือกภาษา: กด OK สำหรับไทย หรือ Cancel สำหรับอังกฤษ" : "Please choose a language: Click OK for Thai or Cancel for English"}`);

    // กำหนดภาษาตามการเลือก
    const selectedLanguage = language ? "THAI" : "ENGLISH";

    // สร้างและแสดง PDF ตามภาษาที่เลือก
    if (selectedLanguage === "THAI") {
      const docDefinition = PDF_Work_1_THAI({data: formData});
      pdfMake.createPdf(docDefinition).open();
    } else {
      const docDefinition = PDF_Work_1_ENGLISH({data: formData});
      pdfMake.createPdf(docDefinition).open();
    }
  };

  const printPDF_Ex = () => {

    const language = window.confirm(`${languageMode === "th" ? "กรุณาเลือกภาษา: กด OK สำหรับไทย หรือ Cancel สำหรับอังกฤษ" : "Please choose a language: Click OK for Thai or Cancel for English"}`);

    const selectedLanguage = language ? "THAI" : "ENGLISH";

    if (selectedLanguage === "THAI") {
      const docDefinition = PDF_Work_1_THAI({data: formData});
      pdfMake.createPdf(docDefinition).open();
    } else {
      const docDefinition = PDF_Work_1_ENGLISH({data: formData});
      pdfMake.createPdf(docDefinition).open();
    }
  };

  const printPDF_Example = () => {
    const docDefinition = PDF_Example_1({
      title: "ตัวอย่าง PDF ภาษาไทย",
      bodyText: "ภาษาไทยสามารถแสดงผลได้ใน PDF",
    });

    pdfMake.createPdf(docDefinition).open();
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  console.log(formData.image);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imgElement = new Image();
        imgElement.src = reader.result;

        imgElement.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          const maxWidth = 80; // กำหนดขนาดสูงสุดของความกว้าง
          const maxHeight = 100; // กำหนดขนาดสูงสุดของความสูง

          // คำนวณอัตราส่วนของความกว้างและความสูง
          const ratio = Math.min(maxWidth / imgElement.width, maxHeight / imgElement.height);

          // ปรับขนาดรูปภาพตามอัตราส่วน
          canvas.width = imgElement.width * ratio;
          canvas.height = imgElement.height * ratio;

          // วาดรูปที่ปรับขนาดลงบน canvas
          ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);

          // แปลงรูปจาก canvas เป็น Data URL และเก็บไว้ใน state
          const dataUrl = canvas.toDataURL(file.type); // เปลี่ยนเป็น Data URL

          setFormData({
            ...formData,
            image: dataUrl, // อัปเดตรูปใน formData
          });
        };
      };
      reader.readAsDataURL(file); // อ่านไฟล์รูปภาพ
    }
  };

  return (
    <div>
      <div className="flex justify-end items-center"></div>

      <div className="border border-black dark:border-white p-4 rounded-lg">
        <div className="grid grid-cols-6 gap-4 place-content-center">
          <div className="col-span-6 text-center mb-4 flex justify-between">
            <span className="underline ">{languageMode === "th" ? "ข้อมูลที่กรอกจะไม่ถูกบันทึก" : "The entered data will not be saved."}</span>
            <button className="rounded-lg bg-blue-500 p-4" onClick={printPDF_Example}>
              {languageMode === "th" ? "ตัวอย่างงานที่ทำไปแล้ว" : "Examples of work that has been done"}
            </button>
          </div>

          <span className="col-span-1">{languageMode === "th" ? "ชื่อเรื่อง" : "Title"}</span>
          <input name="title" onChange={handleChange} className="col-span-2 border border-black" />
          <span className="col-span-1">{languageMode === "th" ? "รูป" : "Picture"}</span>
          <div className="col-span-2">
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {/* {formData.image && (
              <div>
                <img src={formData.image} alt="Uploaded" style={{width: "100px", height: "100px"}} />
              </div>
            )} */}
          </div>

          <span className="col-span-1">{languageMode === "th" ? "ชื่อ" : "FirstName"}</span>
          <input name="firstname" onChange={handleChange} className="col-span-2 border border-black" />

          <span className="col-span-1">{languageMode === "th" ? "นามสกุล" : "LastName"}</span>
          <input name="lastname" onChange={handleChange} className="col-span-2 border border-black" />

          <span className="col-span-1">{languageMode === "th" ? "วัน เดือน ปี เกิด" : "Date of birth"}</span>
          <input name="birthdate" onChange={handleChange} className="col-span-2 border border-black" />

          <span className="col-span-1">{languageMode === "th" ? "เพศ" : "Sex"}</span>
          <input name="gender" onChange={handleChange} className="col-span-2 border border-black" />

          <span className="col-span-1">{languageMode === "th" ? "อายุ" : "Age"}</span>
          <input name="age" onChange={handleChange} className="col-span-2 border border-black" />

          <span className="col-span-1"> {languageMode === "th" ? "เชื้อชาติ" : "Race"}</span>
          <input name="race" onChange={handleChange} className="col-span-2 border border-black" />

          <span className="col-span-1"> {languageMode === "th" ? "สัญชาติ" : "Nationality"}</span>
          <input name="nationality" onChange={handleChange} className="col-span-2 border border-black" />

          <span className="col-span-1"> {languageMode === "th" ? "ศาสนา" : "Religion"}</span>
          <input name="religion" onChange={handleChange} className="col-span-2 border border-black" />

          <span className="col-span-1"> {languageMode === "th" ? "สถานะปัจจุบัน" : "Current status"}</span>
          <input name="status" onChange={handleChange} className="col-span-2 border border-black" />

          <span className="col-span-1"> {languageMode === "th" ? "เบอร์โทรศัพท์" : "Phone Number"}</span>
          <input name="phone" onChange={handleChange} className="col-span-2 border border-black" />

          <span className="col-span-1"> {languageMode === "th" ? "อีเมลล์" : "Email"}</span>
          <input name="email" onChange={handleChange} className="col-span-2 border border-black" />

          <button onClick={printPDF} className="col-span-6 mt-4 bg-blue-500 text-white p-2 rounded">
            {languageMode === "th" ? "สร้าง PDF" : "Generate PDF"}
          </button>
        </div>
      </div>
    </div>
  );
}
