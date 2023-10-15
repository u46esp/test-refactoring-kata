import React from "react";
import { render, screen } from "@testing-library/react";
import { expect, it } from '@jest/globals';
import "@testing-library/jest-dom";

import SeatGroup from "./SeatGroup";

describe('SeatGroup', () => {
  it('renders', () => {
    const keyPrefix='random'
    const seatData=[]
    const seatMetadata={}
    render(<SeatGroup keyPrefix={keyPrefix}  seatData={seatData}  seatMetadata={seatMetadata} />)
  })
})