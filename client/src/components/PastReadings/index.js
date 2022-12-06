//import pastreadings.css
import { Navigate } from "react-router-dom";
import "./pastreadings.css";
import Auth from "../../utils/auth";

export default function PastReadings() {
  return (
    <>
      {Auth.loggedIn() ? (
        <p>Past Readings Page</p>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
}
