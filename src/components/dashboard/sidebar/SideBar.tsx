"use client";
import { useState } from "react";
import { Home, Package, Star, Upload, LogOut } from "lucide-react";

const Sidebar = () => {
  const [active, setActive] = useState("home");

  const menuItems = [
    { name: "Home", icon: <Home size={20} />, key: "home" },
    { name: "New Arrivals", icon: <Package size={20} />, key: "new-arrivals" },
    { name: "Featured", icon: <Star size={20} />, key: "featured" },
    { name: "All Rugs", icon: <Package size={20} />, key: "all-rugs" },
    { name: "Upload", icon: <Upload size={20} />, key: "upload" },
  ];

  const renderContent = () => {
    switch (active) {
      case "home":
        return <h2 className="text-2xl font-bold">Welcome to Rug Dashboard</h2>;
      case "new-arrivals":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
            <div className="grid grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="border rounded-lg p-4 shadow-lg">
                  <div className="w-full h-40 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-700">Rug Image</span>
                  </div>
                  <h3 className="text-lg font-semibold mt-3">
                    Rug {index + 1}
                  </h3>
                  <p className="text-gray-600">$199.99</p>
                  <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case "featured":
        return <h2 className="text-2xl font-bold">Featured Rugs</h2>;
      case "all-rugs":
        return <h2 className="text-2xl font-bold">All Rugs Listing</h2>;
      case "upload":
        return <h2 className="text-2xl font-bold">Upload a Rug</h2>;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <div className="h-screen w-64 bg-gray-900 text-white flex flex-col p-5 space-y-4">
        <h2 className="text-xl font-bold">Rug Dashboard</h2>
        <nav className="flex-1">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.key}>
                <button
                  className={`flex w-full items-center space-x-3 p-3 rounded-lg transition duration-200 text-left ${
                    active === item.key ? "bg-purple-600" : "hover:bg-gray-700"
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
        <button className="flex items-center space-x-3 p-3 rounded-lg bg-red-600 hover:bg-red-700">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
  );
};

export default Sidebar;
