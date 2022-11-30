import Nav from "../Nav"
import PageContent from "../PageContent";
// import Footer from "./components/Footer";
import Home from "../Home";
// import Library from "./components/Library";
// import LoginForm from "./components/LoginForm";
// import Navigation from "../Navigation";
// import NewReading from "./components/NewReading";
// import PastReadings from "./components/PastReadings";
// import SignupForm from "./components/SignupForm";
// import TextArea from "./components/TextArea";
// import SearchForm from "./components/SearchForm";

function Page({ currentPage }) {
  const pageRender = () => {
    switch (currentPage.name) {
        case "Nav":
        return <Nav />;
      case "About":
        return <Home />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {/* <h2>{currentPage.name}</h2> */}
      <PageContent>{pageRender()}</PageContent>
    </div>
  );
}

export default Page;
