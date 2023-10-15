export const SeatPricingForZone = ({ zoneInfo, isCustomerPremiumMember = false }) => {
  if (isCustomerPremiumMember) {
    return (<>
      <span className="legend-zone-name">{zoneInfo.zoneName}</span>
      <span className="price">
        <span className="premium-price">
          {formatPrice(zoneInfo.premiumMemberPrice)}
        </span>
        <span className="full-price-cross-out">
          {formatPrice(zoneInfo.regularPrice)}
        </span>
      </span>
    </>);
  }

  return (<>
    <span className="legend-zone-name">{zoneInfo.zoneName}</span>
    <span className="price">
      <span className="regular-price">{formatPrice(zoneInfo.regularPrice)}</span>
    </span>
  </>);
};

const formatPrice = (number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'THB', maximumFractionDigits: 0 }).format(number);
