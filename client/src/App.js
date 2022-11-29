// //do we need app.css?
// import "./App.css";
//routes, route
import { Routes, Route } from "react-router-dom";

//import components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Library from "./components/Library";
import LoginForm from "./components/LoginForm";
import Navigation from "./components/Navigation";
import NewReading from "./components/NewReading";
import PastReadings from "./components/PastReadings";
import SignupForm from "./components/SignupForm";
import TextArea from "./components/TextArea";
import SearchForm from "./components/SearchForm";

//check routes and why here
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/NewReading" element={<NewReading />} />
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/odds" element={<Odds />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ranking" element={<Ranking />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </div>
  );
};

export default App;
