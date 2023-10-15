import SeatGroup from "./SeatGroup";
import SeatPricingLegend from "./SeatPricingLegend";

export default function App({
  seatData,
  seatPricing,
  isCustomerPremiumMember,
  seatMetadata,
}) {
  return (
    <div className="App">
      <h1>Hello Concert Seat Map</h1>
      <SeatPricingLegend
        info={seatMetadata}
        pricing={seatPricing}
        isCustomerPremiumMember={isCustomerPremiumMember}
      />
      <SeatLayout seatData={seatData} seatMetadata={seatMetadata} />
    </div>
  );
}

function SeatLayout({ seatData, seatMetadata }) {
  return (
    <>
      <div className="columns-3">
        <div className="side">
          <SeatGroup
            keyPrefix="leftside"
            seatData={seatData["leftside"]}
            seatMetadata={seatMetadata["leftside"]}
          />
          <SeatGroup
            keyPrefix="leftback"
            seatData={seatData["leftback"]}
            seatMetadata={seatMetadata["leftback"]}
          />
        </div>
        <div className="middle">
          <div className="stage">Stages </div>
          <SeatGroup
            keyPrefix="vip"
            seatData={seatData["vip"]}
            seatMetadata={seatMetadata["vip"]}
          />
          <SeatGroup
            keyPrefix="mid"
            seatData={seatData["mid"]}
            seatMetadata={seatMetadata["mid"]}
          />
          <SeatGroup
            keyPrefix="furthest"
            seatData={seatData["furthest"]}
            seatMetadata={seatMetadata["furthest"]}
          />
        </div>
        <div className="side">
          <SeatGroup
            keyPrefix="rightside"
            seatData={seatData["rightside"]}
            seatMetadata={seatMetadata["rightside"]}
          />
          <SeatGroup
            keyPrefix="rightback"
            seatData={seatData["rightback"]}
            seatMetadata={seatMetadata["rightback"]}
          />
        </div>
      </div>
    </>
  );
}
