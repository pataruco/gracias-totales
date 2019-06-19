const picture = document.getElementById('js-map') as HTMLPictureElement;
const img = new Image();
const width = window.innerWidth;
const height = window.innerHeight - 20;

const renderMap = (): void => {
  const src = document.createAttribute('src');
  src.value = `https://maps.googleapis.com/maps/api/staticmap?center=london&zoom=12&scale=2&size=${width}x${height}&maptype=roadmap&key=AIzaSyBum8HUlhV6EPKJQVzxLeWkNfpHNivlYjc&format=jpg&visual_refresh=true`;
  img.setAttributeNode(src);
  picture.appendChild(img);
};

window.addEventListener('load', renderMap);
