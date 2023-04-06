const displayLocation = (elementId, value) => {
  document.getElementById(elementId).textContent = value.toFixed(2);
};

const fetchISSLocation = () => {
  fetch('https://api.wheretheiss.at/v1/satellites/25544')
    .then(response => response.json())
    .then(data => {
      displayLocation('latitude', data.latitude);
      displayLocation('longitude', data.longitude);
      displayLocation('altitude', data.altitude);
      displayLocation('velocity', data.velocity);
    })
    .catch(error => console.error(error));
};

setInterval(fetchISSLocation, 1000);
