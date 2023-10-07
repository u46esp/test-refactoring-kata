import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const seatData = {};

const seatPricing = [
  { zone: "furthest", regularPrice: 2500, premiumMemberPrice: 2125 },
  { zone: "mid", regularPrice: 3500, premiumMemberPrice: 2975 },
  { zone: "side", regularPrice: 4000, premiumMemberPrice: 3400 },
  { zone: "standing", regularPrice: 3000, premiumMemberPrice: 2550 },
  { zone: "frontmost", regularPrice: 6000, premiumMemberPrice: 5100 },
  { zone: "viphitouch", regularPrice: 2500, premiumMemberPrice: 6375 },
];

root.render(
  <StrictMode>
    <App
      seatData={seatData}
      seatPricing={seatPricing}
      isCustomerPremiumMember={true}
    />
  </StrictMode>,
);
