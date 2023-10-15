

export const SeatPricingForZone = ({ zoneInfo, isCustomerPremiumMember = false }) => {
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
  }

  return (
    <span className="price">
      Price:
      <span className="regular-price">{zoneInfo.regularPrice}</span>
    </span>
  );

  // return (
  //   <>
  //     <div>{JSON.stringify(zoneInfo)}</div>
  //     <div>{JSON.stringify(isCustomerPremiumMember)}</div>
  //   </>
  // )
  // if (isCustomerPremiumMember) {
  //   return (
  //     <span className="price">
  //       Price:
  //       <span className="premium-price">
  //         {zoneInfo.premiumMemberPrice}
  //       </span>
  //       <span className="full-price-cross-out">
  //         {zoneInfo.regularPrice}
  //       </span>
  //     </span>
  //   );
  // } else {
  //   return (
  //     <span className="price">
  //       Price:
  //       <span className="regular-price">{zoneInfo.regularPrice}</span>
  //     </span>
  //   );
  // }
};
