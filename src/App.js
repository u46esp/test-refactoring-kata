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

function SeatPricingLegend({ info, pricing, isCustomerPremiumMember = false }) {
  var allZoneInfos = [];
  for (const zone in info) {
    const priceInfo = pricing.find((p) => p.zone === zone);
    allZoneInfos.push({ ...info[zone], ...priceInfo });
  }

  return (
    <div className="SeatZoneInfo">
      {allZoneInfos.map((zoneInfo) => (
        <div key={`seat-zone-info-zone-${zoneInfo.zone}`}>
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
                  <span className="regular-price">{zoneInfo.regularPrice}</span>
                </span>
              );
            }
          })()}
        </div>
      ))}
    </div>
  );
}

function SeatLayout({ seatData, seatMetadata }) {
  return (
    <>
      <div className="columns-3">
        <div className="side">
          <SeatGroup
            keyPrefix="leftside"
            seatData={seatData["leftside"]}
            seatMetadata={seatMetadata["leftside"]}
          />
          <SeatGroup
            keyPrefix="leftback"
            seatData={seatData["leftback"]}
            seatMetadata={seatMetadata["leftback"]}
          />
        </div>
        <div className="middle">
          <div className="stage">Stages </div>
          <SeatGroup
            keyPrefix="vip"
            seatData={seatData["vip"]}
            seatMetadata={seatMetadata["vip"]}
          />
          <SeatGroup
            keyPrefix="mid"
            seatData={seatData["mid"]}
            seatMetadata={seatMetadata["mid"]}
          />
          <SeatGroup
            keyPrefix="furthest"
            seatData={seatData["furthest"]}
            seatMetadata={seatMetadata["furthest"]}
          />
        </div>
        <div className="side">
          <SeatGroup
            keyPrefix="rightside"
            seatData={seatData["rightside"]}
            seatMetadata={seatMetadata["rightside"]}
          />
          <SeatGroup
            keyPrefix="rightback"
            seatData={seatData["rightback"]}
            seatMetadata={seatMetadata["rightback"]}
          />
        </div>
      </div>
    </>
  );
}

function SeatGroup({ keyPrefix, seatData, seatMetadata }) {
  const maxRow = seatMetadata["maxRow"];
  const rows = [...Array(maxRow).keys()].map((i) => i + 1);
  const maxColumn = seatMetadata["maxColumn"];
  const columns = [...Array(maxColumn).keys()].map((i) => i + 1);
  const seatRowChars = " ABCDEFGHJKLMNPQRSTUVWXYZ";
  const buildSeatNumber = (row, column) =>
    `${seatRowChars[row]}${column < 10 ? `0${column}` : column}`;

  return (
    <div>
      <p className="zone-name">{seatMetadata.zoneName}</p>
      <div>
        {rows.map((i) => {
          return (
            <div key={`seat-${keyPrefix}-row-${i}`}>
              {columns.map((j) => {
                const seatNumber = buildSeatNumber(i, j);
                const isSoldOut =
                  seatData.find((s) => s.row == i && s.column == j)
                    .availability == "Available";
                return (
                  <span
                    key={`seat-number-${keyPrefix}-${seatNumber}`}
                    className={`seat circle ${
                      isSoldOut ? "seat-sold-out" : ""
                    }`}
                  >
                    {seatNumber}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
