import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const seatData = {};

root.render(
  <StrictMode>
    <App seatData={seatData} isCustomerPremiumMember={true} />
  </StrictMode>
);
