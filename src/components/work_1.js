import Modal from "@/components/Modal";
import {LanguageContext} from "@/layouts/Layout";
import NextImage from "next/image.js";
import Link from "next/link";
import {useContext, useState} from "react";
import {useEffect} from "react";

export default function Table_ex() {
  const {toggleLanguage, languageMode} = useContext(LanguageContext);
  const Image = NextImage.default;

  const [products, setProducts] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  //Data for Add or Edit Table Only
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textModal, setTextModal] = useState("No data");
  const [currentItem, setCurrentItem] = useState(null);
  const [dataTitle, setDataTitle] = useState("");
  const [dataThumbnail, setDataThumbnail] = useState("");
  const [dataPrice, setDataPrice] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [dataCategory, setDataCategory] = useState("");
  const [dataRating, setDataRating] = useState("");
  const [dataStock, setDataStock] = useState("");

  const [imageFile, setImageFile] = useState(null);
  const [uploadType, setUploadType] = useState("url");

  const [searchQuery, setSearchQuery] = useState("");

  // ฟังก์ชันดึงข้อมูลทั้งหมดจาก API
  const fetchData = () => {
    setIsLoading(true); // เริ่มโหลดข้อมูล
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setIsLoading(false); // เสร็จสิ้นการโหลดข้อมูล
      })
      .catch(() => {
        setIsLoading(false); // หากเกิดข้อผิดพลาดก็หยุดการโหลด
        alert("เกิดข้อผิดพลาดในการดึงข้อมูล");
      });
  };

  useEffect(() => {
    // เรียกข้อมูลเมื่อโหลด component
    fetchData();
  }, []);

  // ฟังก์ชันสำหรับเลือก/ยกเลิกเลือกสินค้า
  const handleCheckboxChange = (id) => {
    setSelectedItems((prevSelected) => (prevSelected.includes(id) ? prevSelected.filter((item) => item !== id) : [...prevSelected, id]));
  };

  // ฟังก์ชันลบสินค้าที่เลือก
  const handleDelete = async () => {
    const isConfirmed = window.confirm("คุณแน่ใจหรือว่าต้องการลบรายการที่เลือก?");
    if (!isConfirmed) {
      return; // ถ้าไม่ยืนยัน ก็หยุดการทำงาน
    }
    setIsLoading(true); // เริ่มการลบ
    for (const id of selectedItems) {
      await fetch(`https://dummyjson.com/products/${id}`, {
        method: "DELETE",
      });
    }
    // อัปเดต UI โดยลบสินค้าที่ถูกลบออกจาก State
    setProducts(products.filter((product) => !selectedItems.includes(product.id)));
    setSelectedItems([]); // เคลียร์รายการที่เลือก
    setIsLoading(false); // เสร็จสิ้นการลบ
  };

  const handleRemoveItem = (itemToRemove) => {
    setSelectedItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
  };

  const openAddEditModal = (text, product) => {
    console.log(product);
    setTextModal(text);
    if (text === "Edit" && product) {
      setCurrentItem(product);
      setDataTitle(product.title);
      setDataThumbnail(product.thumbnail);
      setDataPrice(product.price);
      setDataDescription(product.description);
      setDataCategory(product.category);
      setDataRating(product.rating);
      setDataStock(product.stock);
    } else {
      setCurrentItem(null);
      setDataTitle("");
      setDataThumbnail("");
      setDataPrice("");
      setDataDescription("");
      setDataCategory("");
      setDataRating("");
      setDataStock("");
    }

    setIsModalOpen(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setDataThumbnail(URL.createObjectURL(file)); // แสดง preview รูป
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveChanges = () => {
    if (!dataTitle || !dataPrice || !dataCategory || !dataRating || !dataStock || !dataThumbnail) {
      alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return; // หยุดการทำงาน ไม่ให้ส่งข้อมูลไป
    }
    if (!dataThumbnail) {
      alert("กรุณาใส่รูปภาพ");
      return; // หยุดการทำงาน ไม่ให้ส่งข้อมูลไป
    }
    setIsLoading(true);
    const url = currentItem ? `https://dummyjson.com/products/${currentItem.id}` : "https://dummyjson.com/products/add";
    const method = currentItem ? "PUT" : "POST";

    fetch(url, {
      method: method,
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        title: dataTitle,
        price: dataPrice,
        description: dataDescription,
        category: dataCategory,
        rating: dataRating,
        stock: dataStock,
        thumbnail: dataThumbnail,
      }),
    })
      .then((res) => res.json())
      .then((updatedItem) => {
        setProducts(
          (prevData) =>
            currentItem
              ? prevData.map((item) => (item.id === updatedItem.id ? updatedItem : item)) // กรณี Edit
              : [...prevData, updatedItem] // กรณี Add
        );
        setIsModalOpen(false); // ปิดโมเดล
        setIsLoading(false); // ตั้งค่า isLoading เป็น false หลังจากได้รับ response
      })
      .catch(() => {
        setIsLoading(false); // หากเกิดข้อผิดพลาด ก็จะตั้ง isLoading เป็น false
        alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
      });
  };

  // ส่วน Search Box และ Paginated
  const filteredProducts = products.filter((product) => {
    const lowercasedQuery = searchQuery.toLowerCase();
    return (
      product.id.toString().includes(lowercasedQuery) || // ค้นหาจาก id
      product.title.toLowerCase().includes(lowercasedQuery) // ค้นหาจาก title
    );
  });

  // คำนวณจำนวนหน้าทั้งหมด
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // คำนวณข้อมูลที่จะแสดงในหน้าปัจจุบัน
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="">
      <div className="">
        <div className="flex flex-col gap-4 dark:text-white">
          <div className="mx-4 md:mx-0">
            <input type="text" placeholder={languageMode === "th" ? "ค้นหาโดย ID หรือ Product Name" : "Search by ID or Product Name"} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="border p-2 rounded w-full text-black" />
          </div>
          <div className="mx-4 md:mx-0 flex flex-col md:flex-row justify-between md:items-center">
            <div>
              <span className="text-[16px] md:text-[20px]">{languageMode === "th" ? "รายการที่เลือก" : "Selected item"}</span>
              <div className="flex flex-wrap mt-2">
                {/* ใช้ flex-wrap เพื่อให้ขึ้นแถวใหม่ */}
                {selectedItems
                  .sort((a, b) => a - b) // เรียงลำดับจากมากไปน้อย
                  .map((item) => (
                    <span key={item} className="bg-yellow-500 p-2 mr-2 mb-2 hover:bg-red-500 hover:text-white hover:border-0" onClick={() => handleRemoveItem(item)}>
                      {item}
                    </span>
                  ))}
              </div>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <button disabled={selectedItems.length !== 0} className="w-1/2 md:w-auto px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-300 text-[16px] md:text-[20px]" onClick={() => openAddEditModal("Add", null)}>
                {languageMode === "th" ? "เพิ่มโปรดักใหม่" : "Add New Product"}
              </button>
              <button onClick={handleDelete} disabled={selectedItems.length === 0} className="w-1/2 md:w-auto px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-300 text-[16px] md:text-[20px]">
                {languageMode === "th" ? "ลบรายการที่เลือก" : "Delete Selected"}
              </button>
            </div>
          </div>

          <div className="h-[40vh] md:h-[60vh] overflow-auto shadow-md sm:rounded-lg ">
            <div className="">
              {isLoading ? (
                <div className="text-center py-4">{languageMode === "th" ? "กำลังโหลด..." : "Loading..."}</div>
              ) : (
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
                    <tr className="">
                      <th className="min-w-[50px] w-[50px] p-4">Select</th>
                      <th className="min-w-[25px] w-[25px] p-4">ID</th>
                      <th className="p-4">Product Name</th>
                      <th className="min-w-[100px] w-[100px] p-4">Price ($)</th>
                      <th className="min-w-[100px] w-[100px] p-4">Category</th>
                      <th className="min-w-[30px] w-[30px] p-4">Rating</th>
                      <th className="min-w-[75px] w-[30px] p-4">Stock</th>
                      <th className="min-w-[50px] w-[30px] p-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedProducts.map((product) => (
                      <tr key={product.id} className="hover:bg-gray-100 border-b">
                        <td className="p-4 text-center">
                          <input type="checkbox" checked={selectedItems.includes(product.id)} onChange={() => handleCheckboxChange(product.id)} />
                        </td>
                        <td className="p-4">{product.id}</td>
                        <td className="p-4 text-blue-500 cursor-pointer hover:underline" onClick={() => setModalData(product)}>
                          {product.title}
                        </td>
                        <td className="p-4 text-right">${product.price}</td>
                        <td className="p-4 text-center">{product.category}</td>
                        <td className="p-4 text-right">{product.rating}</td>
                        <td className="p-4 text-right">{product.stock}</td>
                        <td className="p-4">
                          <button className="text-blue-500 hover:underline" onClick={() => openAddEditModal("Edit", product)}>
                            {languageMode === "th" ? "แก้ไข" : "Edit"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>

        {/* Pagination Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-x-4 dark:text-white">
          {itemsPerPage === 0 ? (
            <div>0 Page</div>
          ) : (
            <div>
              <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="text-black px-4 py-2 bg-gray-300 rounded disabled:opacity-50">
                {languageMode === "th" ? "ก่อนหน้า" : "Previous"}
              </button>
              <span className="px-4 py-2 font-bold">
                {currentPage} / {totalPages}
              </span>
              <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="text-black px-4 py-2 bg-gray-300 rounded disabled:opacity-50">
                {languageMode === "th" ? "ถัดไป" : "Next"}
              </button>
            </div>
          )}
          {/* Input for Items Per Page */}
          <div className="flex mt-4 md:mt-0 justify-center items-center gap-2">
            {languageMode === "th" ? "รายการต่อหน้า:" : "Items per page:"}
            <input
              type="number"
              value={itemsPerPage}
              onChange={(e) => {
                const value = Math.max(0, parseInt(e.target.value, 10) || 0); // ป้องกันค่าติดลบ
                setItemsPerPage(value);
              }}
              placeholder="items per page"
              className="border p-2 rounded text-black w-[100px]"
            />
            {languageMode === "th" ? "จำนวนรายการ:" : "Items Current:"} <span className="">{paginatedProducts.length}</span>
          </div>
        </div>

        {/* Modal */}
        {modalData && (
          <div className="text-black fixed inset-0 z-50 overflow-auto justify-center bg-gray-800 bg-opacity-50 flex items-center text-[18px] ">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[300px] h-full md:w-[500px] md:h-[250px] lg:w-[1000px] lg:h-[500px] overflow-auto">
              <div className="flex justify-between">
                <h2 className="text-xl font-bold">{modalData.title}</h2>
                <button onClick={() => setModalData(null)} className="px-4 py-2 bg-gray-300 text-gray-700 rounded">
                  {languageMode === "th" ? "ยกเลิก" : "Cancel"}
                </button>
              </div>

              <div className="flex items-center justify-center">
                <img src={modalData.thumbnail} alt={modalData.title} className="w-[300px] h-[300px] mt-4 rounded" />
              </div>
              <p className="mt-2 text-gray-600">{modalData.description}</p>
              <p className="mt-2 font-bold text-lg">${modalData.price}</p>
              <p className="mt-1 text-sm text-gray-500">Category: {modalData.category}</p>
            </div>
          </div>
        )}

        {/* Modal for editing */}
        {isModalOpen && (
          <div className="text-black fixed inset-0 z-50 overflow-auto justify-center bg-gray-800 bg-opacity-50 flex items-center text-[18px] ">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[300px] h-full md:w-[500px] md:h-[250px] lg:w-[1000px] lg:h-[500px] overflow-auto">
              <h2 className="text-lg font-bold mb-4">{textModal} Product</h2>
              <div className="flex gap-4">
                <div className="mb-4 w-1/2">
                  <label className="block text-sm font-medium text-gray-700">Product Name</label>
                  <input type="text" value={dataTitle} onChange={(e) => setDataTitle(e.target.value)} className="mt-1 px-3 py-2 border rounded-md w-full" />
                </div>
                <div className="mb-4 w-1/2">
                  <label className="block text-sm font-medium text-gray-700">{languageMode === "th" ? "ราคา" : "Price"}</label>
                  <input type="number" value={dataPrice} onChange={(e) => setDataPrice(e.target.value)} className="mt-1 px-3 py-2 border rounded-md w-full" />
                </div>
              </div>
              <div className="text-black flex gap-4">
                <label>
                  <input type="radio" value="url" checked={uploadType === "url"} onChange={() => setUploadType("url")} className="mr-2" />
                  {languageMode === "th" ? "ใช้ URL" : "Use URL"}
                </label>
                <label>
                  <input type="radio" value="file" checked={uploadType === "file"} onChange={() => setUploadType("file")} className="mr-2" />
                  {languageMode === "th" ? "อัปโหลดไฟล์" : "Upload File"}
                </label>
              </div>
              <div className="mb-4">{uploadType === "url" ? <input type="text" placeholder="Enter image URL" value={dataThumbnail} onChange={(e) => setDataThumbnail(e.target.value)} className="border p-2 rounded w-full" /> : <input type="file" accept="image/*" onChange={handleFileChange} className="border p-2 rounded w-full" />}</div>
              {/* Preview รูปภาพ */}
              <div className="flex justify-center">
                {dataThumbnail && (
                  <div className="mt-4">
                    <p className="font-semibold">{languageMode === "th" ? "ตัวอย่าง" : "Preview"}</p>
                    <img src={dataThumbnail} alt="Preview" className="w-32 h-32 object-cover rounded border" />
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">{languageMode === "th" ? "รายละเอียด" : "Description"}</label>
                <textarea type="text" value={dataDescription} onChange={(e) => setDataDescription(e.target.value)} className="mt-1 px-3 py-2 border rounded-md w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">{languageMode === "th" ? "ประเภท" : "Category"}</label>
                <input type="text" value={dataCategory} onChange={(e) => setDataCategory(e.target.value)} className="mt-1 px-3 py-2 border rounded-md w-full" />
              </div>
              <div className="flex gap-4">
                <div className="mb-4 w-1/2">
                  <label className="block text-sm font-medium text-gray-700">{languageMode === "th" ? "เรตติ้ง" : "Rating"}</label>
                  <input type="text" value={dataRating} onChange={(e) => setDataRating(e.target.value)} className="mt-1 px-3 py-2 border rounded-md w-full" />
                </div>
                <div className="mb-4 w-1/2">
                  <label className="block text-sm font-medium text-gray-700">{languageMode === "th" ? "สต็อก" : "Stock"}</label>
                  <input type="text" value={dataStock} onChange={(e) => setDataStock(e.target.value)} className="mt-1 px-3 py-2 border rounded-md w-full" />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button onClick={closeModal} className="px-4 py-2 bg-gray-300 text-gray-700 rounded">
                  {languageMode === "th" ? "ยกเลิก" : "Cancel"}
                </button>
                <button onClick={saveChanges} className="px-4 py-2 bg-blue-500 text-white rounded">
                  {languageMode === "th" ? "บันทึก" : "Save"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
