import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const seatData = {
  leftside: [
    { seatNumber: "1A", row: 1, column: 1, availability: "Available" },
    { seatNumber: "1B", row: 1, column: 2, availability: "Available" },
    { seatNumber: "1C", row: 1, column: 3, availability: "Available" },
    { seatNumber: "2A", row: 2, column: 1, availability: "Available" },
    { seatNumber: "2B", row: 2, column: 2, availability: "Available" },
    { seatNumber: "2C", row: 2, column: 3, availability: "Available" },
    { seatNumber: "3A", row: 3, column: 1, availability: "Available" },
    { seatNumber: "3B", row: 3, column: 2, availability: "Available" },
    { seatNumber: "3C", row: 3, column: 3, availability: "Available" },
    { seatNumber: "4A", row: 4, column: 1, availability: "Available" },
    { seatNumber: "4B", row: 4, column: 2, availability: "Available" },
    { seatNumber: "4C", row: 4, column: 3, availability: "Available" },
    { seatNumber: "5A", row: 5, column: 1, availability: "Available" },
    { seatNumber: "5B", row: 5, column: 2, availability: "Available" },
    { seatNumber: "5C", row: 5, column: 3, availability: "Available" },
    { seatNumber: "6A", row: 6, column: 1, availability: "Available" },
    { seatNumber: "6B", row: 6, column: 2, availability: "Available" },
    { seatNumber: "6C", row: 6, column: 3, availability: "Available" },
    { seatNumber: "7A", row: 7, column: 1, availability: "Available" },
    { seatNumber: "7B", row: 7, column: 2, availability: "Available" },
    { seatNumber: "7C", row: 7, column: 3, availability: "Available" },
    { seatNumber: "8A", row: 8, column: 1, availability: "Available" },
    { seatNumber: "8B", row: 8, column: 2, availability: "Available" },
    { seatNumber: "8C", row: 8, column: 3, availability: "Available" },
    { seatNumber: "9A", row: 9, column: 1, availability: "Available" },
    { seatNumber: "9B", row: 9, column: 2, availability: "Available" },
    { seatNumber: "9C", row: 9, column: 3, availability: "Available" },
    { seatNumber: "10A", row: 10, column: 1, availability: "Available" },
    { seatNumber: "10B", row: 10, column: 2, availability: "Available" },
    { seatNumber: "10C", row: 10, column: 3, availability: "Available" },
  ],

  rightside: [
    { seatNumber: "1A", row: 1, column: 1, availability: "Available" },
    { seatNumber: "1B", row: 1, column: 2, availability: "Available" },
    { seatNumber: "1C", row: 1, column: 3, availability: "Available" },
    { seatNumber: "2A", row: 2, column: 1, availability: "Available" },
    { seatNumber: "2B", row: 2, column: 2, availability: "Available" },
    { seatNumber: "2C", row: 2, column: 3, availability: "Available" },
    { seatNumber: "3A", row: 3, column: 1, availability: "Available" },
    { seatNumber: "3B", row: 3, column: 2, availability: "Available" },
    { seatNumber: "3C", row: 3, column: 3, availability: "Available" },
    { seatNumber: "4A", row: 4, column: 1, availability: "Available" },
    { seatNumber: "4B", row: 4, column: 2, availability: "Available" },
    { seatNumber: "4C", row: 4, column: 3, availability: "Available" },
    { seatNumber: "5A", row: 5, column: 1, availability: "Available" },
    { seatNumber: "5B", row: 5, column: 2, availability: "Available" },
    { seatNumber: "5C", row: 5, column: 3, availability: "Available" },
    { seatNumber: "6A", row: 6, column: 1, availability: "Available" },
    { seatNumber: "6B", row: 6, column: 2, availability: "Available" },
    { seatNumber: "6C", row: 6, column: 3, availability: "Available" },
    { seatNumber: "7A", row: 7, column: 1, availability: "Available" },
    { seatNumber: "7B", row: 7, column: 2, availability: "Available" },
    { seatNumber: "7C", row: 7, column: 3, availability: "Available" },
    { seatNumber: "8A", row: 8, column: 1, availability: "Available" },
    { seatNumber: "8B", row: 8, column: 2, availability: "Available" },
    { seatNumber: "8C", row: 8, column: 3, availability: "Available" },
    { seatNumber: "9A", row: 9, column: 1, availability: "Available" },
    { seatNumber: "9B", row: 9, column: 2, availability: "Available" },
    { seatNumber: "9C", row: 9, column: 3, availability: "Available" },
    { seatNumber: "10A", row: 10, column: 1, availability: "Available" },
    { seatNumber: "10B", row: 10, column: 2, availability: "Available" },
    { seatNumber: "10C", row: 10, column: 3, availability: "Available" },
  ],

  vip: [
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

    { seatNumber: "2A", row: 2, column: 1, availability: "Available" },
    { seatNumber: "2B", row: 2, column: 2, availability: "Available" },
    { seatNumber: "2C", row: 2, column: 3, availability: "Available" },
    { seatNumber: "2D", row: 2, column: 4, availability: "Available" },
    { seatNumber: "2E", row: 2, column: 5, availability: "Available" },
    { seatNumber: "2F", row: 2, column: 6, availability: "Available" },
    { seatNumber: "2G", row: 2, column: 7, availability: "Available" },
    { seatNumber: "2H", row: 2, column: 8, availability: "Available" },
    { seatNumber: "2J", row: 2, column: 9, availability: "Available" },
    { seatNumber: "2K", row: 2, column: 10, availability: "Available" },

    { seatNumber: "3A", row: 3, column: 1, availability: "Available" },
    { seatNumber: "3B", row: 3, column: 2, availability: "Available" },
    { seatNumber: "3C", row: 3, column: 3, availability: "Available" },
    { seatNumber: "3D", row: 3, column: 4, availability: "Available" },
    { seatNumber: "3E", row: 3, column: 5, availability: "Available" },
    { seatNumber: "3F", row: 3, column: 6, availability: "Available" },
    { seatNumber: "3G", row: 3, column: 7, availability: "Available" },
    { seatNumber: "3H", row: 3, column: 8, availability: "Available" },
    { seatNumber: "3J", row: 3, column: 9, availability: "Available" },
    { seatNumber: "3K", row: 3, column: 10, availability: "Available" },
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
    maxColumn: 3,
    maxRow: 10,
  },
  rightside: {
    zoneName: "Right Side",
    maxColumn: 3,
    maxRow: 10,
  },
  standing: {
    zoneName: "Standing Area",
    maxColumn: 10,
    maxRow: 3,
  },
  vip: {
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
  { zone: "vip", regularPrice: 2500, premiumMemberPrice: 6375 },
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
