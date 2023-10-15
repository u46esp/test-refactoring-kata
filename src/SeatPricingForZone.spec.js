import React from "react";
import { render, screen } from "@testing-library/react";
import { expect, it } from '@jest/globals';
import "@testing-library/jest-dom";

import { SeatPricingForZone } from "./SeatPricingForZone";

describe('SeatPricingForZone', () => {
  it.each`
    zoneName        | isCustomerPremiumMember | regularPrice | canSeePremiumPrice | premiumMemberPrice
    ${"furthest"}   | ${false}                | ${200}       | ${false}           | ${150}
    ${"closer"}     | ${false}                | ${250}       | ${false}           | ${200}
    ${"standing"}   | ${false}                | ${500}       | ${false}           | ${400}
    ${"frontmost"}  | ${false}                | ${800}       | ${false}           | ${600}
    ${"hitouch"}    | ${false}                | ${1500}      | ${false}           | ${1200}
    ${"furthest"}   | ${true}                 | ${200}       | ${true}            | ${150}
    ${"closer"}     | ${true}                 | ${250}       | ${true}            | ${200}
    ${"standing"}   | ${true}                 | ${500}       | ${true}            | ${400}
    ${"frontmost"}  | ${true}                 | ${800}       | ${true}            | ${600}
    ${"hitouch"}    | ${false}                | ${1500}      | ${false}           | ${1200}
      `("Given { isCustomerPremiumMember : $isCustomerPremiumMember, zoneName : $zoneName }, should display its name and price(s) correctly",
    ({ zoneName, isCustomerPremiumMember, regularPrice, canSeePremiumPrice, premiumMemberPrice }) => {
      const zoneInfo = { zoneName, regularPrice, premiumMemberPrice }
      render(<SeatPricingForZone
        zoneInfo={zoneInfo}
        isCustomerPremiumMember={isCustomerPremiumMember} />)


      expect(screen.getByText(regularPrice)).toBeInTheDocument()
      expect(screen.getByText(zoneName, { exact: false })).toBeInTheDocument()

      if (canSeePremiumPrice) {
        expect(screen.getByText(premiumMemberPrice)).toBeInTheDocument()
      } else {
        expect(screen.queryByText(premiumMemberPrice)).not.toBeInTheDocument()
      }
    })
})
