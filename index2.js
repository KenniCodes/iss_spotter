const { nextISSTimesForMyLocation } = require('./iss_promised');

const logFlyOverTime = function(flyOverDTD) {
  for (const time of flyOverDTD) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next flyover at: ${dateTime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((data) => {
    logFlyOverTime(data);
  })
  .catch((error) => {
    console.log(`It didn't work: `, error.message);
  });