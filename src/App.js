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

function SeatLayout({seatData, seatMetadata}) {
  return <>
    <div className="columns-3">
      <div className="side">
        <SeatGroup seatData={seatData["leftside"]} seatMetadata={seatMetadata["leftside"]} />
        <SeatGroup seatData={seatData["leftback"]} seatMetadata={seatMetadata["leftback"]} />
      </div>
      <div className="middle">
        <div className="stage">Stages </div>
        <SeatGroup seatData={seatData["vip"]} seatMetadata={seatMetadata["vip"]} />
        <SeatGroup seatData={seatData["mid"]} seatMetadata={seatMetadata["mid"]} />
        <SeatGroup seatData={seatData["furthest"]} seatMetadata={seatMetadata["furthest"]} />
      </div>
      <div className="side">
        <SeatGroup seatData={seatData["rightside"]} seatMetadata={seatMetadata["rightside"]} />
        <SeatGroup seatData={seatData["rightback"]} seatMetadata={seatMetadata["rightback"]} />
      </div>
    </div>
  </>
}

function SeatGroup({seatData, seatMetadata}) {
  const maxRow = seatMetadata["maxRow"];
  const rows = [ ...Array(maxRow).keys() ].map( i => i+1)
  const maxColumn = seatMetadata["maxColumn"];
  const columns = [ ...Array(maxColumn).keys() ].map( i => i+1)
  const seatRowChars = " ABCDEFGHJKLMNPQRSTUVWXYZ"
  const buildSeatNumber = (row, column) => `${seatRowChars[row]}${column < 10 ? `0${column}` : column}`

  return <div>
    <p className="zone-name">{seatMetadata.zoneName}</p>
    <div>
      {rows.map(i => {
        return <div>
          {columns.map(j => {
            const seatNumber = buildSeatNumber(i, j)
            return <span className="seat">{seatNumber}</span>
          })}
        </div>
      })}
    </div>
  </div>
}

