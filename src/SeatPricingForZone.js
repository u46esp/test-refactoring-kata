export const SeatPricingForZone = ({ zoneInfo, isCustomerPremiumMember }) => {
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
        <span className="regular-price">{zoneInfo.regularPrice}</span>
      </span>
    );
  }
};
