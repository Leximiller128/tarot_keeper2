import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<NewReading />}></Route>
          <Route path="/newreading" element={<NewReading />}></Route>
          <Route path="/signupForm" element={<SignupForm />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/header" element={<Header />}></Route>
          <Route path="/library" element={<Library />}></Route>
          <Route path="/loginform" element={<LoginForm />}></Route>
          <Route path="/navigation" element={<Navigation />}></Route>
          <Route path="/pastreadings" element={<PastReadings />}></Route>
          <Route path="/textarea" element={<TextArea />}></Route>
          <Route path="/searchform" element={<SearchForm />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
