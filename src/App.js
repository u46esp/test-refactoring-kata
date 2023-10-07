import "./styles.css";

export default function App({
  seatData,
  seatPricing,
  isCustomerPremiumMember,
  seatMetadata,
}) {
  return (
    <div className="App">
      <h1>Hello Concert Seat Map</h1>
      <SeatPricingLegend info={seatMetadata} pricing={seatPricing} />
    </div>
  );
}

function SeatPricingLegend({ info, pricing }) {
  var allZoneInfos = [];
  for (const zone in info) {
    const priceInfo = pricing.find((p) => p.zone === zone);
    allZoneInfos.push({ ...info[zone], ...priceInfo });
  }

  return (
    <div class="SeatZoneInfo">
      {allZoneInfos.map((zoneInfo) => (
        <div>
          <span style={{ paddingRight: "1em" }}>Zone: {zoneInfo.zoneName}</span>
          <span>Price: {zoneInfo.regularPrice}</span>
        </div>
      ))}
    </div>
  );
}
