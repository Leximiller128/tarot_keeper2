import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Footer from "./components/Footer";
// import Home from "./components/Home";
import Library from "./components/Library";
import Navigation from "./components/Nav/Navigation";
import NewReading from "./components/NewReading";
import PastReadings from "./components/PastReadings";
import SignUpForm from "./components/SignUpForm";
// import TextArea from "./components/TextArea";
import SearchForm from "./components/SearchForm";
import Login from "./components/Login";
import { setContext } from "@apollo/client/link/context";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="outterdiv">
          <Navigation />
          <div className="bodydiv">
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/Navigation" element={<Navigation />}></Route>
              <Route path="/NewReading" element={<NewReading />}></Route>
              <Route path="/Footer" element={<Footer />}></Route>
              {/* <Route path="/" element={<NewReading />}></Route> */}
              <Route path="/NewReading" element={<NewReading />}></Route>
              <Route path="/SignUpForm" element={<SignUpForm />}></Route>
              <Route path="/Library" element={<Library />}></Route>
              <Route path="/Login" element={<Login />}></Route>
              <Route path="/PastReadings" element={<PastReadings />}></Route>
              <Route path="/SearchForm" element={<SearchForm />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
