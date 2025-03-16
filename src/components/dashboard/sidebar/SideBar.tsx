"use client";
import { useState } from "react";
import { Home, Package, Upload, LogOut } from "lucide-react";
import UploadRugs from "../upload-rug/UploadRugs";

const Sidebar = () => {
  const [active, setActive] = useState("home");

  const menuItems = [
    { name: "Home", icon: <Home size={20} />, key: "home" },
    { name: "Rugs", icon: <Package size={20} />, key: "rugs" },
    { name: "Upload", icon: <Upload size={20} />, key: "upload" },
  ];

  const renderContent = () => {
    switch (active) {
      case "rugs":
        return <h2 className="text-2xl font-bold">All Rugs Listing</h2>;
      case "upload":
        return <UploadRugs />;
      default:
        return <h2 className="text-2xl font-bold">Welcome to Rug Dashboard</h2>;
    }
  };

  return (
    <div className="flex">
      <div className="h-screen w-64 flex flex-col p-5 space-y-4 border border-r">
        <h2 className="text-xl font-bold">MA&SONS RUGS</h2>
        <nav className="flex-1">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.key}>
                <button
                  className={`flex w-full items-center space-x-3 p-3 rounded-lg transition duration-200 text-left ${
                    active === item.key
                      ? "bg-primary text-white"
                      : "hover:border hover:border-gray-700"
                  }`}
                  onClick={() => setActive(item.key)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button className="flex items-center space-x-3 p-3 rounded-l">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6  h-screen overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default Sidebar;
