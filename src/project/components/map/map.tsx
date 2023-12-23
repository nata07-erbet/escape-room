import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

type positionProps = {
  position: number[];
}

function Map({position}: positionProps) {
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        height: '370px',
        width: '100%',
        maxWidth: '617px',
        margin: '0 auto',
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export { Map };

