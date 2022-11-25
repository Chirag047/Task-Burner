import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Auth0Provider
    domain="dev-5zhyutespwhh22dq.us.auth0.com"
    clientId="lFj3Vz2xn5yIFIxCquVedrIvuNs3UAVZ"
    redirectUri={window.location.origin}>
      <App />
  </Auth0Provider>
);
