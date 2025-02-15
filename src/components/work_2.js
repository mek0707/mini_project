import {useEffect, useRef, useState} from "react";
import "tailwindcss/tailwind.css";

function ItemLook({index, name}) {
  return (
    <div className="border-2 mx-4 flex h-[60px] items-center gap-4 hover:bg-gray-100 hover:cursor-pointer">
      <span className="col-span-1 bg-slate-300 h-full w-[30px] flex justify-center items-center dark:text-black">{index}</span>
      <span className="col-span-4 flex justify-center items-center">{name}</span>
    </div>
  );
}

function ItemMove() {
  const [dataTest, setDataTest] = useState([
    {type: "Fruit", name: "Apple"},
    {type: "Vegetable", name: "Broccoli"},
    {type: "Vegetable", name: "Mushroom"},
    {type: "Fruit", name: "Banana"},
    {type: "Vegetable", name: "Tomato"},
    {type: "Fruit", name: "Orange"},
    {type: "Fruit", name: "Mango"},
    {type: "Fruit", name: "Pineapple"},
    {type: "Vegetable", name: "Cucumber"},
    {type: "Fruit", name: "Watermelon"},
    {type: "Vegetable", name: "Carrot"},
  ]);

  const [dataTemporary, setDataTemporary] = useState([]);
  const [lastInteractionTime, setLastInteractionTime] = useState(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (Date.now() - lastInteractionTime >= 5000) {
        setDataTemporary((prevData) => {
          const newData = prevData.filter((item) => {
            setDataTest((prevData) => [...prevData, item]);
            return false;
          });
          return newData;
        });
      }
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [lastInteractionTime]);

  function handleItemClick(item) {
    if (dataTemporary.includes(item)) {
      setDataTemporary((prevData) => prevData.filter((i) => i !== item));
    } else {
      setDataTest((prevData) => prevData.filter((i) => i !== item));
      setDataTemporary((prevData) => [...prevData, item]);
      setLastInteractionTime(Date.now());
    }
  }

  const handleTemporaryItemClick = (item) => {
    setDataTest((prevDataTest) => {
      const itemExistsInDataTest = dataTest.some((dataTestItem) => dataTestItem === item);
      if (!itemExistsInDataTest) {
        return [...prevDataTest, item];
      }
      return prevDataTest;
    });
    setLastInteractionTime(Date.now());
    setDataTemporary((prevDataTemporary) => prevDataTemporary.filter((i) => i !== item));
  };

  return (
    <div className="">
      <div className={`grid grid-cols-2 lg:grid-cols-3 gap-4 text-center`}>
        <div className="col-span-2 lg:col-span-1 border">
          <div className="mb-4 p-4 bg-gray-200 dark:text-black font-bold">List Items</div>
          <div className={`flex flex-col gap-4 h-[30vh] lg:h-[60vh] overflow-auto mb-4`}>
            {dataTest.map((item, index) => (
              <div className="dark:hover:text-black" key={index} onClick={() => handleItemClick(item, false)}>
                <ItemLook index={index + 1} name={item.name} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1 border">
          <div className="mb-4 p-4 bg-gray-200 dark:text-black font-bold">Fruit</div>
          <div className={`flex flex-col gap-4 h-[30vh] lg:h-[60vh] overflow-auto mb-4`}>
            {dataTemporary.map((item, index) => {
              if (item.type === "Fruit") {
                return (
                  <div className="dark:hover:text-black" key={index} onClick={() => handleTemporaryItemClick(item)}>
                    <ItemLook index={index + 1} name={item.name} />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="col-span-1 border">
          <div className="mb-4 p-4 bg-gray-200 dark:text-black font-bold">Vegetable</div>
          <div className={`flex flex-col gap-4 h-[30vh] lg:h-[60vh] overflow-auto mb-4`}>
            {dataTemporary.map((item, index) => {
              if (item.type === "Vegetable") {
                return (
                  <div className="dark:hover:text-black" key={index} onClick={() => handleTemporaryItemClick(item)}>
                    <ItemLook index={index + 1} name={item.name} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemMove;
