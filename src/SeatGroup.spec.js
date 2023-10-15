import React from "react";
import { render, screen } from "@testing-library/react";
import { expect, it } from '@jest/globals';
import "@testing-library/jest-dom";

import SeatGroup from "./SeatGroup";

describe('SeatGroup', () => {
  it('renders seats correctly for all rows and columns', () => {
    const keyPrefix = 'random'
    const seatData = [
      { row: 1, column: 1, availability: "Available" },
      { row: 1, column: 2, availability: "Available" },
      { row: 1, column: 3, availability: "Available" },
      { row: 1, column: 4, availability: "Available" },
      { row: 2, column: 1, availability: "Soldout" },
      { row: 2, column: 2, availability: "Soldout" },
      { row: 2, column: 3, availability: "Available" },
      { row: 2, column: 4, availability: "Available" },
    ]
    const seatMetadata = { zoneName: "Randomized", maxRow: 2, maxColumn: 4 }
    render(<SeatGroup keyPrefix={keyPrefix} seatData={seatData} seatMetadata={seatMetadata} />)
    expect(screen.getByText("Randomized")).toBeInTheDocument()
    for (var i = 1; i <= seatMetadata["maxRow"]; i++) {
      for (var j = 1; j <= seatMetadata["maxColumn"]; j++) {
        const seatNumber = buildSeatNumber(i, j)
        const seat = seatData.find((s) => s.row == i && s.column == j)
        expect(screen.getByText(seatNumber)).toBeInTheDocument()
        expect(screen.getByText(seatNumber)).toHaveClass(seat.availability === "Available" ? "seat-available" : "seat-sold-out")
      }
    }
  })
})

const buildSeatNumber = (row, column) => {
  const seatRowChars = " ABCDEFGHJKLMNPQRSTUVWXYZ";
  return `${seatRowChars[row]}${column < 10 ? `0${column}` : column}`
};
