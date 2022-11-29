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
import TextArea from "./components/TextArea"
import SearchForm from "./components/SearchForm"

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Library />
      <LoginForm />
      <NewReadings />
      <PastReadings />
      <SignupForm />
      <Footer />
      <TextArea/>
      <SearchForm/>
    </div>
  );
}

export default App;
