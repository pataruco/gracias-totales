const avalon = { lat: 51.450616, lng: -0.1480473 };
const mapElement = document.getElementById('js-map') as HTMLDivElement;

const getUserCoordinates = async (): Promise<google.maps.LatLng> => {
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(position => {
      const { coords } = position;
      const { latitude, longitude } = coords;
      resolve(new google.maps.LatLng(latitude, longitude));
    });
  });
};

const renderMap = async () => {
  const map = new google.maps.Map(mapElement, {
    center: avalon,
    zoom: 15,
  });
  let from;

  try {
    from = await getUserCoordinates();
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error(error);
  }

  if (from) {
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);

    directionsService.route(
      {
        origin: from,
        destination: avalon,
        // @ts-ignore
        travelMode: 'DRIVING',
      },
      // @ts-ignore
      (result, status) => {
        if (status === 'OK') {
          directionsDisplay.setDirections(result);
        }
      },
    );
  }
};

window.addEventListener('load', renderMap);
