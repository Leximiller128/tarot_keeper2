// //do we need app.css?
// import "./App.css";
//routes, route
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
        <Route path="/" element={<NewReading />} />
        <Route path="/newreading" element={<NewReading />} />
        <Route path="/signupform" element={<SignupForm />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/header" element={<Header />} />
        <Route path="/library" element={<Library />}></Route>
        <Route path="/loginform" element={<LoginForm />}></Route>
        <Route path="/navigation" element={<Navigation />}></Route>
        <Route path="/pastreadings" element={<PastReadings />}></Route>
        <Route path="/textarea" element={<TextArea />}></Route>
        <Route path="/searchform" element={<SearchForm />}></Route>
      </Routes>
    </div>
  );
};

export default App;
