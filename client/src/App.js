// //do we need app.css?
// import "./App.css";
//import components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Library from "./components/Library";
import LoginForm from "./components/LoginForm";
import Navigation from "./components/Navigation";
import NewReadings from "./components/NewReading";
import PastReadings from "./components/PastReadings";
import SignupForm from "./components/SignupForm";
//import react, usestate
import React, { useState } from "react";

// function App() {
//   const [currentPage, setCurrentPage] = useState("About");

//   const renderPage = () => {
//     if (currentPage === "Library") {
//       return <Library />;
//     }
//     if (currentPage === "NewReadings") {
//       return <NewReadings />;
//     }
//     if (currentPage === "PastReadings") {
//       return <PastReadings />;
//     }
//     return <Contact />;
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       <Header currentPage={currentPage} handlePageChange={handlePageChange} />

//       {renderPage()}

//       <Footer />
//     </div>
//   );
// }

export default App;
