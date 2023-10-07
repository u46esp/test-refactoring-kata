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
      <SeatZoneInfo info={seatMetadata} pricing={seatPricing}></SeatZoneInfo>
    </div>
  );
}

function SeatZoneInfo({ info, pricing }) {
  var allZoneInfos = [];
  for (const zone in info) {
    const priceInfo = pricing.find((p) => p.zone === zone);
    allZoneInfos.push({ ...info[zone], ...priceInfo });
  }

  return (
    <div class="SeatZoneInfo">
      {allZoneInfos.map((zoneInfo) => (
        <div>
          <pre>{JSON.stringify(zoneInfo)}</pre>
          <span>Zone: {zoneInfo.zone}</span>
          <span>Price: {zoneInfo.regularPrice}</span>
        </div>
      ))}
    </div>
  );
}
