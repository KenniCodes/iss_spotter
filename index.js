const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log(`It worked! Returned IP:`, ip);
});

fetchCoordsByIP(`24.86.80.121`, (error, coordinates) => {
  if (error) {
    console.log(`It didn't work!`, error);
    return;
  }

  console.log(`It worked! Returned coordinates:`, coordinates);
});

fetchISSFlyOverTimes({ latitude: '49.2827291', longitude: '-123.1207375' }, (error, flyOver) => {
  if (error) {
    console.log(`It didn't work!`, error);
    return;
  }

  console.log(`It worked! Flyover times:`, flyOver);
});

const logFlyOverTime = function(flyOverDTD) {
  for (const time of flyOverDTD) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next flyover at: ${dateTime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {

  if (error) {
    return console.log(`It didn't work`, error);
  }
  logFlyOverTime(passTimes);
});