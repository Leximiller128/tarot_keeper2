import "./header.css";
// import { MDBContainer } from "mdb-react-ui-kit";
import logo from "./LogoTarot.jpg";

export default function Header() {
  return (
    <div
      //   className="text-center bg-image"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        // backgroundImage: `url(${Logo})`,
        // height: "200px",
        // backgroundColor: "#88B8A1",
        // width: "100vw",
      }}
    >
      <img
        src={logo}
        style={{ margin: "auto", width: "100vw", objectFit: "contain" }}
      />
    </div>
  );
}
