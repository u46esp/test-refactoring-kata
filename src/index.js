import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const seatData = {
  furthest: [
    { seatNumber: "1A", row: 1, column: 1, availability: "Available" },
    { seatNumber: "1B", row: 1, column: 2, availability: "Available" },
    { seatNumber: "1C", row: 1, column: 3, availability: "Available" },
    { seatNumber: "1D", row: 1, column: 4, availability: "Available" },
    { seatNumber: "1E", row: 1, column: 5, availability: "Available" },
    { seatNumber: "1F", row: 1, column: 6, availability: "Available" },
    { seatNumber: "1G", row: 1, column: 7, availability: "Available" },
    { seatNumber: "1H", row: 1, column: 8, availability: "Available" },
    { seatNumber: "1J", row: 1, column: 9, availability: "Available" },
    { seatNumber: "1K", row: 1, column: 10, availability: "Available" },

    { seatNumber: "2A", row: 1, column: 1, availability: "Available" },
    { seatNumber: "2B", row: 1, column: 2, availability: "Available" },
    { seatNumber: "2C", row: 1, column: 3, availability: "Available" },
    { seatNumber: "2D", row: 1, column: 4, availability: "Available" },
    { seatNumber: "2E", row: 1, column: 5, availability: "Available" },
    { seatNumber: "2F", row: 1, column: 6, availability: "Available" },
    { seatNumber: "2G", row: 1, column: 7, availability: "Available" },
    { seatNumber: "2H", row: 1, column: 8, availability: "Available" },
    { seatNumber: "2J", row: 1, column: 9, availability: "Available" },
    { seatNumber: "2K", row: 1, column: 10, availability: "Available" },

    { seatNumber: "3A", row: 1, column: 1, availability: "Available" },
    { seatNumber: "3B", row: 1, column: 2, availability: "Available" },
    { seatNumber: "3C", row: 1, column: 3, availability: "Available" },
    { seatNumber: "3D", row: 1, column: 4, availability: "Available" },
    { seatNumber: "3E", row: 1, column: 5, availability: "Available" },
    { seatNumber: "3F", row: 1, column: 6, availability: "Available" },
    { seatNumber: "3G", row: 1, column: 7, availability: "Available" },
    { seatNumber: "3H", row: 1, column: 8, availability: "Available" },
    { seatNumber: "3J", row: 1, column: 9, availability: "Available" },
    { seatNumber: "3K", row: 1, column: 10, availability: "Available" },
  ],
};

const seatMetadata = {
  furthest: {
    zoneName: "Furthest",
    maxColumn: 10,
    maxRow: 3,
  },
  mid: {
    zoneName: "Middle Area",
    maxColumn: 10,
    maxRow: 3,
  },
  leftside: {
    zoneName: "Left Side",
    maxColumn: 10,
    maxRow: 3,
  },
  rightside: {
    zoneName: "Right Side",
    maxColumn: 10,
    maxRow: 3,
  },
  standing: {
    zoneName: "Standing Area",
    maxColumn: 10,
    maxRow: 3,
  },
  viphitouch: {
    zoneName: "VIP with Hi - Touch",
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
      seatMetadata={seatMetadata}
      isCustomerPremiumMember={true}
    />
  </StrictMode>,
);
