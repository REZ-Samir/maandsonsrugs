// "use client";
// import { useState, useEffect } from "react";

// const steps = [
//   { title: "Material Selection", description: "Choosing the finest materials like wool, silk, or cotton for weaving.", image: "/images/material_selection.jpg" },
//   { title: "Weaving", description: "Skilled artisans weave intricate patterns using traditional techniques.", image: "/images/weaving.jpg" },
//   { title: "Dyeing", description: "Natural and synthetic dyes are used to bring vibrant colors to the rugs.", image: "/images/dyeing.jpg" },
//   { title: "Finishing", description: "The rug is washed, trimmed, and inspected for quality control.", image: "/images/finishing.jpg" },
//   { title: "Final Product", description: "The finished rug is ready for sale and use in homes worldwide.", image: "/images/final_product.jpg" }
// ];

export default function Page() {
//   const [items, setItems] = useState([...steps]);

//   const handleScroll = () => {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
//       setItems((prevItems) => [...prevItems, ...steps]);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
    // <div className="flex flex-col items-center p-6">
    //   {items.map((step, index) => (
    //     <div key={index} className="w-full max-w-lg p-4 text-center mb-6 bg-white shadow-lg rounded-lg border">
    //       <img 
    //         src={step.image} 
    //         alt={step.title} 
    //         className="w-full h-64 object-cover rounded-t-lg mb-4"
    //       />
    //       <div className="p-4">
    //         <h2 className="text-xl font-bold mb-2">{step.title}</h2>
    //         <p className="text-gray-600 mb-4">{step.description}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
//   );
}
