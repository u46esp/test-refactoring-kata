import { SeatPricingForZone } from "./SeatPricingForZone";

const SeatPricingLegend = ({ info, pricing, isCustomerPremiumMember = false }) => {
  var allZoneInfos = [];
  for (const zone in info) {
    const priceInfo = pricing.find((p) => p.zone === zone);
    allZoneInfos.push({ ...info[zone], ...priceInfo });
  }

  return (
    <div className="seat-zone-info">
      {allZoneInfos.map((zoneInfo) => (
        <div key={`seat-zone-info-zone-${zoneInfo.zone}`}>
          <SeatPricingForZone zoneInfo={zoneInfo} isCustomerPremiumMember={isCustomerPremiumMember} />
        </div>
      ))}
    </div>
  );
}

export default SeatPricingLegend;