export const SeatPricingForZone = ({ zoneInfo, isCustomerPremiumMember = false }) => {
  if (isCustomerPremiumMember) {
    return (<>
      <span className="legend-zone-name">{zoneInfo.zoneName}</span>
      <span className="price">
        <span className="premium-price">
          {zoneInfo.premiumMemberPrice}
        </span>
        <span className="full-price-cross-out">
          {zoneInfo.regularPrice}
        </span>
      </span>
    </>);
  }

  return (<>
    <span className="legend-zone-name">{zoneInfo.zoneName}</span>
    <span className="price">
      <span className="regular-price">{zoneInfo.regularPrice}</span>
    </span>
  </>);
};
