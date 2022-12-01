import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Library from "./components/Library";
import Navigation from "./components/Nav/Navigation";
import NewReading from "./components/NewReading";
import PastReadings from "./components/PastReadings";
import SignUpForm from "./components/SignUpForm";
import TextArea from "./components/TextArea";
import SearchForm from "./components/SearchForm";
import FriendReadings from "./components/FriendReadings";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="outterdiv">
        <Navigation />
        <div className="bodydiv">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Navigation" element={<Navigation />}></Route>
            <Route path="/NewReading" element={<NewReading />}></Route>
            <Route path="/Footer" element={<Footer />}></Route>
            <Route path="/" element={<NewReading />}></Route>
            <Route path="/NewReading" element={<NewReading />}></Route>
            <Route path="/SignUpForm" element={<SignUpForm />}></Route>
            <Route path="/Library" element={<Library />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/PastReadings" element={<PastReadings />}></Route>
            <Route path="/TextArea" element={<TextArea />}></Route>
            <Route path="/SearchForm" element={<SearchForm />}></Route>
            <Route path="/FriendReadings" element={<FriendReadings />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
