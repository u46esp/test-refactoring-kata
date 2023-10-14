export default {
  buildSeatData: (seatMetadata, availabilityChance) => {
    var seatData = []
    for(var i = 1; i <= seatMetadata["maxRow"]; i++) {
      for (var j = 1; j <= seatMetadata["maxColumn"]; j++) {
        const availability = Math.random() > availabilityChance ? "Available" : "Taken";
        seatData.push({ row: i, column: j, availability: availability });
      }
    }
  
    return seatData;
  }
}
