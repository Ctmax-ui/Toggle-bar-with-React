import { useState } from "react";

function Toggler() {
  const toggleMenus = ["Tab 1", "Tab 2", "Tab 3", "Tab 4"];
  const [selectedTab, setSelectedTab] = useState(toggleMenus[0]);

  const TabOnClick = (tab) => {
      setSelectedTab(tab);
    };
    
    const getContent = () => {
    switch (selectedTab) {
      case "Tab 1":
        return "Content for Tab 1";
      case "Tab 2": 
        return "Content for Tab 2";
      case "Tab 3":
        return "Content for Tab 3";
      case "Tab 4":
        return "Content for Tab 4";
      default:
        return "Content not found";
    }
  };

  return (
    <>
        <ul className="flex justify-center">
          {toggleMenus.map((value, key) => (
            <li
              className={`mx-4 border py-2 px-3 cursor-pointer ${
                selectedTab === value ? "bg-gray-400" : ""
              }`}
              key={key}
              onClick={() => TabOnClick(value)}
            >
              {value}
            </li>
          ))}
        </ul>
        <div className="mt-4 m-auto border w-1/3 px-0">{getContent()}</div>
    </>
  );
}

export default Toggler;
