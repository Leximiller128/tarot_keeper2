import "./header.css";
import { MDBContainer } from "mdb-react-ui-kit";

export default function Header() {
  return (
    <MDBContainer
      className="p-5 text-center bg-image"
      style={{
        backgroundImage:
          "url('https://mdbootstrap.com/img/new/slides/041.webp')",
        height: "400px",
      }}
    ></MDBContainer>
  );
}
