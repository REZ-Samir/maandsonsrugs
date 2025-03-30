"use client";
import { useEffect, useState } from "react";
import { Home, Package, Upload, LogOut, Menu, X } from "lucide-react";
import UploadRugs from "./upload-rug/UploadRugs";
import { useRouter } from "next/navigation";
import DashboardRugsListing from "./rug/DashboardRugsListing";

const Dashboard = () => {
  const [active, setActive] = useState("home");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { name: "Home", icon: <Home size={20} />, key: "home" },
    { name: "Rugs", icon: <Package size={20} />, key: "rugs" },
    { name: "Upload", icon: <Upload size={20} />, key: "upload" },
  ];

  const renderContent = () => {
    switch (active) {
      case "rugs":
        return <DashboardRugsListing/>;
      case "upload":
        return <UploadRugs />;
      default:
        return <h2 className="text-2xl font-bold">Welcome to Rug Dashboard</h2>;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/sign-in");
    }
  }, [router]);

  return (
    <div className="flex">
      {/* Mobile Menu Button (Hidden when sidebar is open) */}
      {!isSidebarOpen && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 bg-primary text-white p-2 rounded-full shadow-lg"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative h-screen w-64 bg-white p-5 space-y-4 border-r transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0 md:block`}
      >
        {/* Close Button (Visible only on mobile when sidebar is open) */}
        {isSidebarOpen && (
          <button
            className="md:hidden  bg-gray-200 p-2 rounded-full"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        )}

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
                  onClick={() => {
                    setActive(item.key);
                    setSidebarOpen(false); // Close sidebar on mobile after clicking
                  }}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="flex items-center space-x-3 p-3 rounded-lg"
          onClick={() => (
            localStorage.removeItem("token"), router.push("/sign-in")
          )}
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-1 md:p-6  mt-16 md:m-0 h-screen overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
