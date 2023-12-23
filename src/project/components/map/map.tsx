import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { useMap } from 'react-leaflet/hooks';

function Map() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        height: '100%',
        minHeight: '500px',
        width: '100%',
        maxWidth: '1140px',
        margin: '0 auto',
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[51.505, -0.09]}>
      <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker> */}
    </MapContainer>
  );
}

export { Map };

