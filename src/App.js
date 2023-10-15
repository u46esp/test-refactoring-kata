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
  const SeatGroupFromData = ({ zone }) => <SeatGroup keyPrefix={zone} seatData={seatData[zone]} seatMetadata={seatMetadata[zone]} />

  return (
    <>
      <div className="columns-3">
        <div className="side">
          <SeatGroupFromData zone="leftside" />
          <SeatGroupFromData zone="leftback" />
        </div>
        <div className="middle">
          <div className="stage">Stage</div>
          <SeatGroupFromData zone="vip" />
          <SeatGroupFromData zone="mid" />
          <SeatGroupFromData zone="furthest" />
        </div>
        <div className="side">
          <SeatGroupFromData zone="rightside" />
          <SeatGroupFromData zone="rightback" />
        </div>
      </div>
    </>
  );
}
