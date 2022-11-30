import "./App.css";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Page from "./components/page";
import React, { useState } from "react";
import Nav from "./components/Nav/nav";

// import Footer from "./components/Footer";
import Home from "./components/Home";
// import Library from "./components/Library";
// import LoginForm from "./components/LoginForm";
// import Navigation from "./components/Navigation";
// import NewReading from "./components/NewReading";
// import PastReadings from "./components/PastReadings";
// import SignupForm from "./components/SignupForm";
// import TextArea from "./components/TextArea";
// import SearchForm from "./components/SearchForm";

function App() {
  const [pages] = useState([
    {
      name: "About",
    },
    {
      name: "Portfolio",
    },
    {
      name: "Contact",
    },
    {
      name: "Resume",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <div className="background">
      <Home>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Home>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
    </div>
  );
}

//check routes and why here
// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="outterdiv">
//         {/* <Navigation /> */}
//         <div className="bodydiv">
//           <Routes>
//             <Route path="/" element={<Home />}></Route>
//             {/* <Route path="/Navigation" element={<Navigation />}></Route> */}
//             {/* <Route path="/NewReading" element={<NewReading />}></Route> */}
//             {/* <Route path="/Footer" element={<Footer />}></Route> */}
//             {/* <Route path="/" element={<NewReading />}></Route>
//           <Route path="/NewReading" element={<NewReading />}></Route>
//           <Route path="/SignupForm" element={<SignupForm />}></Route>
//           <Route path="/Library" element={<Library />}></Route>
//           <Route path="/LoginForm" element={<LoginForm />}></Route>
//           <Route path="/PastReadings" element={<PastReadings />}></Route>
//           <Route path="/TextArea" element={<TextArea />}></Route>
//           <Route path="/SearchForm" element={<SearchForm />}></Route> */}
//           </Routes>
//         </div>
//         {/* <Footer /> */}
//       </div>
//     </BrowserRouter>
//   );
// };

export default App;
