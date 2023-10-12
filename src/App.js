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
      <SeatPricingLegend
        info={seatMetadata}
        pricing={seatPricing}
        isCustomerPremiumMember={isCustomerPremiumMember}
      />
    </div>
  );
}

function SeatPricingLegend({ info, pricing, isCustomerPremiumMember = false }) {
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
          {(() => {
            if (isCustomerPremiumMember) {
              return (
                <span className="price">
                  Price: 
                  <span className="premium-price">
                    {zoneInfo.premiumMemberPrice}
                  </span>
                  <span className="full-price-cross-out">
                    {zoneInfo.regularPrice}
                  </span>
                </span>
              );
            } else {
              return (
                <span className="price">
                  Price: 
                  <span className="regular-price">
                    {zoneInfo.regularPrice}
                  </span>
                </span>
              );
            }
          })()}
        </div>
      ))}
    </div>
  );
}
