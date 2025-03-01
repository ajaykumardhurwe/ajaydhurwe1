// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import "./exam.css"; // Create a CSS file for styling

// const pageVariants = {
//   initial: { x: "100vw", opacity: 0 },
//   animate: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
//   exit: { x: "-100vw", opacity: 0, transition: { ease: "easeInOut" } },
// };

// export function Exam () {
//   const [currentPage, setCurrentPage] = useState("Home");

//   const renderPage = () => {
//     switch (currentPage) {
//       case "Home":
//         return <h1>🏠 Home Page</h1>;
//       case "Profile":
//         return <h1>👤 Profile Page</h1>;
//       case "MCQTest":
//         return <h1>📝 MCQ Test Page</h1>;
//       case "Job":
//         return <h1>💼 Job Page</h1>;
//       case "AboutUs":
//         return <h1>ℹ️ About Us Page</h1>;
//       default:
//         return <h1>🏠 Home Page</h1>;
//     }
//   };

//   return (
//     <div className="container">
//       <div className="nav-buttons">
//         {["Home", "Profile", "MCQTest", "Job", "AboutUs"].map((page) => (
//           <button key={page} onClick={() => setCurrentPage(page)} className="nav-button">
//             {page}
//           </button>
//         ))}
//       </div>

//       <motion.div
//         key={currentPage}
//         variants={pageVariants}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         className="content"
//       >
//         {renderPage()}
//       </motion.div>
//     </div>
//   );
// };







// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export function Exam() {
//   const [currentPage, setCurrentPage] = useState("Home");

//   // Animation Variants
//   const pageVariants = {
//     initial: { x: "100vw", opacity: 0 },
//     animate: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
//     exit: { x: "-100vw", opacity: 0, transition: { ease: "easeInOut" } },
//   };

//   // Page Content
//   const renderPage = () => {
//     switch (currentPage) {
//       case "Home":
//         return <h1 className="text-3xl font-bold text-blue-500">🏠 Home Page</h1>;
//       case "Profile":
//         return <h1 className="text-3xl font-bold text-green-500">👤 Profile Page</h1>;
//       case "MCQTest":
//         return <h1 className="text-3xl font-bold text-red-500">📝 MCQ Test Page</h1>;
//       case "Job":
//         return <h1 className="text-3xl font-bold text-yellow-500">💼 Job Page</h1>;
//       case "AboutUs":
//         return <h1 className="text-3xl font-bold text-purple-500">ℹ️ About Us Page</h1>;
//       default:
//         return <h1 className="text-3xl font-bold text-blue-500">🏠 Home Page</h1>;
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       {/* Navigation Buttons */}
//       <div className="flex space-x-3 mb-6">
//         {["Home", "Profile", "MCQTest", "Job", "AboutUs"].map((page) => (
//           <button
//             key={page}
//             onClick={() => setCurrentPage(page)}
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
//           >
//             {page}
//           </button>
//         ))}
//       </div>

//       {/* Page Content with Sliding Animation */}
//       <motion.div
//         key={currentPage}
//         variants={pageVariants}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         className="p-6 bg-white shadow-lg rounded-lg w-80 text-center"
//       >
//         {renderPage()}
//       </motion.div>
//     </div>
//   );
// }




















// import React from "react";
// import { Link } from "react-router-dom";

// export function Exam() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">📌 Exam Navigation</h1>
      
//       <div className="flex space-x-3">
//         <Link to="/" className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
//           Home
//         </Link>
//         <Link to="/profile" className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-transform transform hover:scale-105">
//           Profile
//         </Link>
//         <Link to="/mcq-test" className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-transform transform hover:scale-105">
//           MCQ Test
//         </Link>
//         <Link to="/job" className="px-6 py-2 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 transition-transform transform hover:scale-105">
//           Job
//         </Link>
//         <Link to="/about-us" className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-transform transform hover:scale-105">
//           About Us
//         </Link>
//       </div>
//     </div>
//   );
// }












// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export function Exam() {
//   const [currentPage, setCurrentPage] = useState("Home");

//   // Animation Variants for Sliding Effect
//   const slideVariants = {
//     initial: { x: "100vw", opacity: 0 },
//     animate: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
//     exit: { x: "-100vw", opacity: 0, transition: { ease: "easeInOut" } },
//   };

//   // Render Page Content
//   const renderPage = () => {
//     switch (currentPage) {
//       case "Home":
//         return <h1 className="text-3xl font-bold text-blue-500">🏠 Home</h1>;
//       case "Profile":
//         return <h1 className="text-3xl font-bold text-green-500">👤 Profile</h1>;
//       case "MCQTest":
//         return <h1 className="text-3xl font-bold text-red-500">📝 MCQ Test</h1>;
//       case "Job":
//         return <h1 className="text-3xl font-bold text-yellow-500">💼 Job</h1>;
//       case "AboutUs":
//         return <h1 className="text-3xl font-bold text-purple-500">ℹ️ About Us</h1>;
//       default:
//         return <h1 className="text-3xl font-bold text-blue-500">🏠 Home</h1>;
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-transparent p-6 relative">
//       {/* Floating Buttons */}
//       <div className="flex space-x-4 absolute top-5">
//         {["Home", "Profile", "MCQTest", "Job", "AboutUs"].map((page) => (
//           <button
//             key={page}
//             onClick={() => setCurrentPage(page)}
//             className="text-xl font-semibold text-gray-800 transition-transform transform hover:scale-110"
//           >
//             {page}
//           </button>
//         ))}
//       </div>

//       {/* Page Content with Slide Animation */}
//       <motion.div
//         key={currentPage}
//         variants={slideVariants}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         className="p-6 text-center"
//       >
//         {renderPage()}
//       </motion.div>
//     </div>
//   );
// }


















// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// export function Exam() {
//   const navigate = useNavigate();
//   const [selectedButton, setSelectedButton] = useState<string | null>(null);

//   const handleButtonClick = (page: string) => {
//     setSelectedButton(page);
//     setTimeout(() => navigate(`/${page.toLowerCase()}`), 300); // Navigate after animation
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-transparent relative">
//       <div className="flex space-x-6 absolute top-10">
//         {["Home", "Profile", "MCQTest"].map((page) => (
//           <motion.button
//             key={page}
//             onClick={() => handleButtonClick(page)}
//             initial={{ x: 0 }}
//             animate={{ x: selectedButton === page ? 30 : 0 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             className="text-2xl font-semibold text-gray-800 transition-transform transform hover:scale-110"
//           >
//             {page}
//           </motion.button>
//         ))}
//       </div>
//     </div>
//   );
// }


















// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// export function Exam() {
//   const navigate = useNavigate();
//   const [selectedButton, setSelectedButton] = useState<string | null>(null);

//   const handleButtonClick = (page: string) => {
//     setSelectedButton(page);
//     setTimeout(() => navigate(`/${page.toLowerCase()}`), 300); // Navigate after animation
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-transparent relative">
//       {/* Floating Transparent Buttons */}
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "flex-end",
//           position: "fixed",
//           top: 0,
//           left: 0,
//           padding: "10px",
//           backgroundColor: "transparent",
//           zIndex: 1000,
//           opacity: 1,
//         }}
//       >
//         {["Home", "Profile", "MCQTest"].map((page) => (
//           <motion.button
//             key={page}
//             onClick={() => handleButtonClick(page)}
//             initial={{ x: 0 }}
//             animate={{ x: selectedButton === page ? 30 : 0 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             className="text-2xl font-semibold text-gray-800 transition-transform transform hover:scale-110 mx-2"
//           >
//             {page}
//           </motion.button>
//         ))}
//       </div>
//     </div>
//   );
// }






















// import React from "react";
// import { Link } from "react-router-dom";

// export function Exam() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">📌 Exam Navigation</h1>
      
//       <div className="flex space-x-3">
//         <Link to="/" className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
//           Home
//         </Link>
//         <Link to="/profile" className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-transform transform hover:scale-105">
//           Profile
//         </Link>
//         <Link to="/mcq-test" className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-transform transform hover:scale-105">
//           MCQ Test
//         </Link>
//         <Link to="/job" className="px-6 py-2 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 transition-transform transform hover:scale-105">
//           Job
//         </Link>
//         <Link to="/about-us" className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-transform transform hover:scale-105">
//           About Us
//         </Link>
//       </div>
//     </div>
//   );
// }





// import { Link } from "react-router-dom";

// export function Exam() {
//   const buttons = [
//     { label: "Profile", path: "/profile" },
//     { label: "Settings", path: "/settings" },
//     { label: "Logout", path: "/logout" },
//   ];

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "flex-end",
//         position: "fixed",
//         top: 0,
//         left: 50,
//         padding: "10px",
//         backgroundColor: "transparent",
//         zIndex: 1000,
//         opacity: 1,
//       }}
//     >
//       {buttons.map((button, index) => (
//         <Link
//           key={index}
//           to={button.path}
//           className="px-6 py-2 mx-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-transform transform hover:scale-105"
//         >
//           {button.label}
//         </Link>
//       ))}
//     </div>
//   );
// }






// import { Link } from "react-router-dom";
// import { useRef } from "react";

// export function Exam() {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const buttons = [
//     { label: "Profile", path: "/profile" },
//     { label: "Settings", path: "/settings" },
//     { label: "Logout", path: "/logout" },
//     { label: "Dashboard", path: "/dashboard" },
//     { label: "Contact", path: "/contact" },
//     { label: "Help", path: "/help" },
//     { label: "FAQ", path: "/faq" },
//     { label: "Feedback", path: "/feedback" },
//   ];

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
//     }
//   };

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
//     }
//   };

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 50,
//         width: "100%",
//         padding: "10px",
//         backgroundColor: "transparent",
//         zIndex: 1000,
//         display: "flex",
//         alignItems: "center",
//       }}
//     >
//       <button
//         onClick={scrollLeft}
//         className="p-2 bg-gray-300 rounded-full mx-2 shadow-md hover:bg-gray-400"
//       >
//         ◀
//       </button>

//       <div
//         ref={scrollContainerRef}
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           overflowX: "auto",
//           whiteSpace: "nowrap",
//           scrollBehavior: "smooth",
//           maxWidth: "400px", // Adjust width to show 4 buttons at a time
//         }}
//       >
//         {buttons.map((button, index) => (
//           <Link
//             key={index}
//             to={button.path}
//             className="px-6 py-2 mx-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-transform transform hover:scale-105"
//           >
//             {button.label}
//           </Link>
//         ))}
//       </div>

//       <button
//         onClick={scrollRight}
//         className="p-2 bg-gray-300 rounded-full mx-2 shadow-md hover:bg-gray-400"
//       >
//         ▶
//       </button>
//     </div>
//   );
// }














import { Link } from "react-router-dom";
import { useRef } from "react";

export function Exam() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const buttons = [
    { label: "CgPsc", path: "/profile", color: "bg-blue-600 hover:bg-blue-700" },
    { label: "CgVyapam", path: "/settings", color: "bg-red-600 hover:bg-red-700" },
    { label: "SSC", path: "/logout", color: "bg-yellow-600 hover:bg-yellow-700" },
    { label: "Railway", path: "/dashboard", color: "bg-purple-600 hover:bg-purple-700" },
    { label: "Upsc", path: "/contact", color: "bg-pink-600 hover:bg-pink-700" },
    { label: "MpPsc", path: "/help", color: "bg-teal-600 hover:bg-teal-700" },
    { label: "Banking", path: "/faq", color: "bg-indigo-600 hover:bg-indigo-700" },
    { label: "Others", path: "/feedback", color: "bg-green-600 hover:bg-green-700" },
  ];

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 50,
        width: "100%",
        padding: "10px",
        backgroundColor: "transparent",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
      }}
    >
      <button
        onClick={scrollLeft}
        className="p-2 bg-gray-300 rounded-full mx-2 shadow-md hover:bg-gray-400"
      >
        ◀
      </button>

      <div
        ref={scrollContainerRef}
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          whiteSpace: "nowrap",
          scrollBehavior: "smooth",
          maxWidth: "400px", // Adjust width to show 4 buttons at a time
        }}
      >
        {buttons.map((button, index) => (
          <Link
            key={index}
            to={button.path}
            className={`px-6 py-2 mx-2 text-white rounded-lg shadow-md transition-transform transform hover:scale-105 ${button.color}`}
          >
            {button.label}
          </Link>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="p-2 bg-gray-300 rounded-full mx-2 shadow-md hover:bg-gray-400"
      >
        ▶
      </button>
    </div>
  );
}
