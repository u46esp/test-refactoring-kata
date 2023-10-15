export const SeatPricingForZone = ({ zoneInfo, isCustomerPremiumMember = false }) => {
  if (isCustomerPremiumMember) {
    return (<>
      <span style={{ paddingRight: "1em" }}>Zone: {zoneInfo.zoneName}</span>
      <span className="price">
        Price:
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
    <span style={{ paddingRight: "1em" }}>Zone: {zoneInfo.zoneName}</span>
    <span className="price">
      Price:
      <span className="regular-price">{zoneInfo.regularPrice}</span>
    </span>
  </>);
};
