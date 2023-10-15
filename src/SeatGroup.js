const SeatGroup = ({ keyPrefix, seatData, seatMetadata }) => {
  const rows = buildRange(1, seatMetadata["maxRow"])
  const columns = buildRange(1, seatMetadata["maxColumn"])

  return (
    <div>
      <p className="zone-name">{seatMetadata.zoneName}</p>
      <div>
        {rows.map((i) => {
          return (
            <div key={`seat-${keyPrefix}-row-${i}`}>
              {columns.map((j) => {
                const seatNumber = buildSeatNumber(i, j);
                const isAvailable = isSeatAvailable(seatData, i, j);
                return (
                  <span
                    key={`seat-number-${keyPrefix}-${seatNumber}`}
                    className={`seat circle ${isAvailable ? "seat-available" :  "seat-sold-out"}`}
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

const isSeatAvailable = (seatData, row, col) => {
  const seat = seatData.find((s) => s.row == row && s.column == col)
  return seat?.availability === "Available"
}

const buildRange = (from, to) => [...Array(to).keys()].map((i) => i + from)

const buildSeatNumber = (row, column) => {
  const seatRowChars = " ABCDEFGHJKLMNPQRSTUVWXYZ";
  return `${seatRowChars[row]}${column < 10 ? `0${column}` : column}`
};

export default SeatGroup;