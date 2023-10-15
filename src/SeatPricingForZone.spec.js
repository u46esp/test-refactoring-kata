import React from "react";
import { render, screen } from "@testing-library/react";
import { expect, it } from '@jest/globals';
import "@testing-library/jest-dom";

import { SeatPricingForZone } from "./SeatPricingForZone";

describe('SeatPricingForZone', () => {
  it.each`
    zoneName        | isCustomerPremiumMember | regularPrice | canSeePremiumPrice | premiumMemberPrice
    ${"furthest"}   | ${false}                | ${200}       | ${false}           | ${150}
  `("Should display its price(s) correctly, given isCustomerPremiumMember : $isCustomerPremiumMember and booked for zoneName : $zoneName",
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

//   // it.each`
//   //   seatArea        | isCustomerPremiumMember | expectedNormalPrice | canSeePremiumPrice | expectedPremiumPrice
//   //   ${"furthest"}   | ${false}                | ${200}              | ${false}           | ${150}
//     // ${"closer"}     | ${false}                | ${250}              | ${false}           | ${200}
//     // ${"standing"}   | ${false}                | ${500}              | ${false}           | ${400}
//     // ${"frontmost"}  | ${false}                | ${800}              | ${false}           | ${600}
//     // ${"hitouch"}    | ${false}                | ${1500}             | ${false}           | ${1200}
//     // ${"furthest"}   | ${true}                 | ${200}              | ${true}            | ${150}
//     // ${"closer"}     | ${true}                 | ${250}              | ${true}            | ${200}
//     // ${"standing"}   | ${true}                 | ${500}              | ${true}            | ${400}
//     // ${"frontmost"}  | ${true}                 | ${800}              | ${true}            | ${600}
//     // ${"hitouch"}    | ${false}                | ${1500}             | ${false}           | ${1200}
//   // `( ```Should display its price(s) correctly, 
//   //       given isPremiumMember : $isPremiumMember 
//   //       and booked for seatArea : $seatArea```, 
//   //   (seatZone, isCustomerPremiumMember, expectedNormalPrice, canSeePremiumPrice, expectedPremiumPrice) => {
//   //       // mockSelector.selectedSeatArea.mockReturnValue(seatArea);
//   //       // mockSelector.isPremiumMember.mockReturnValue(isPremiumMember);
//   //       // renderPriceComponent(MOCK_DATA)

//   //       if (canSeePremiumPrice) {
//   //           expect(priceComponent.at(0).prop('data-price')).toEqual(expectedNormalPrice);
//   //           expect(priceComponent.at(1).prop('data-price')).toEqual(expectedPremiumPrice);
//   //       } else {
//   //           expect(priceComponent.prop('data-price')).toEqual(expectedNormalPrice);
//   //       }
//   //   }
//   // );
// })

// const seatMetadata = {
//   furthest: { zoneName: "Furthest", maxColumn: 20, maxRow: 6 },
//   mid: { zoneName: "Middle Area", maxColumn: 20, maxRow: 10 },
//   leftside: { zoneName: "Left Side", maxColumn: 3, maxRow: 15 },
//   rightside: { zoneName: "Right Side", maxColumn: 3, maxRow: 15 },
//   leftback: { zoneName: "Left Back Side", maxColumn: 3, maxRow: 10 },
//   rightback: { zoneName: "Right Back Side", maxColumn: 3, maxRow: 10 },
//   standing: { zoneName: "Standing Area", maxColumn: 10, maxRow: 3 },
//   vip: { zoneName: "VIP with Hi - Touch", maxColumn: 20, maxRow: 3 },
// };

// const seatPricing = [
//   { zone: "furthest", regularPrice: 2500, premiumMemberPrice: 2125 },
//   { zone: "mid", regularPrice: 3500, premiumMemberPrice: 2975 },
//   { zone: "leftside", regularPrice: 4000, premiumMemberPrice: 3400 },
//   { zone: "rightside", regularPrice: 4000, premiumMemberPrice: 3400 },
//   { zone: "leftback", regularPrice: 3000, premiumMemberPrice: 2500 },
//   { zone: "rightback", regularPrice: 3000, premiumMemberPrice: 2500 },
//   { zone: "standing", regularPrice: 3000, premiumMemberPrice: 2550 },
//   { zone: "frontmost", regularPrice: 6000, premiumMemberPrice: 5100 },
//   { zone: "vip", regularPrice: 2500, premiumMemberPrice: 6375 },
// ];
