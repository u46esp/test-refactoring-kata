import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const seatData = {
  furthest: [
    { seatNumber: "1A", availability: "Available" },
    { seatNumber: "1B", availability: "Available" },
    { seatNumber: "1C", availability: "Available" },
    { seatNumber: "1D", availability: "Available" },
    { seatNumber: "1E", availability: "Available" },
    { seatNumber: "1F", availability: "Available" },
    { seatNumber: "1G", availability: "Available" },
    { seatNumber: "1H", availability: "Available" },
    { seatNumber: "1J", availability: "Available" },
    { seatNumber: "1K", availability: "Available" },

    { seatNumber: "2A", availability: "Available" },
    { seatNumber: "2B", availability: "Available" },
    { seatNumber: "2C", availability: "Available" },
    { seatNumber: "2D", availability: "Available" },
    { seatNumber: "2E", availability: "Available" },
    { seatNumber: "2F", availability: "Available" },
    { seatNumber: "2G", availability: "Available" },
    { seatNumber: "2H", availability: "Available" },
    { seatNumber: "2J", availability: "Available" },
    { seatNumber: "2K", availability: "Available" },

    { seatNumber: "3A", availability: "Available" },
    { seatNumber: "3B", availability: "Available" },
    { seatNumber: "3C", availability: "Available" },
    { seatNumber: "3D", availability: "Available" },
    { seatNumber: "3E", availability: "Available" },
    { seatNumber: "3F", availability: "Available" },
    { seatNumber: "3G", availability: "Available" },
    { seatNumber: "3H", availability: "Available" },
    { seatNumber: "3J", availability: "Available" },
    { seatNumber: "3K", availability: "Available" },
  ],
};

const seatMetadata = {
  furthest: {
    maxColumn: 10,
    maxRow: 3,
  },
};

const seatPricing = [
  { zone: "furthest", regularPrice: 2500, premiumMemberPrice: 2125 },
  { zone: "mid", regularPrice: 3500, premiumMemberPrice: 2975 },
  { zone: "leftside", regularPrice: 4000, premiumMemberPrice: 3400 },
  { zone: "rightside", regularPrice: 4000, premiumMemberPrice: 3400 },
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
