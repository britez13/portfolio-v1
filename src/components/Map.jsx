
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../styles/Map.scss"

const Map = () => {
  return (
    <MapContainer
      center={[-25.78056, -56.44861]}
      zoom={14.7}
      scrollWheelZoom={false}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        className= 'map-tiles'
      />
    </MapContainer>
  );
}

export default Map