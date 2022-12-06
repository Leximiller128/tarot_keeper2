import "./header.css";
import logo from "./LogoTarot.jpg";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <img
        src={logo}
        style={{ margin: "auto", width: "100vw", objectFit: "contain" }}
      />
    </div>
  );
}
