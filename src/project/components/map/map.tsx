import { LatLngTuple } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

type TMarker = {
  id: string;
  position: LatLngTuple;
  name?: string;
};

type MapProps = {
  markers: TMarker[];
  selectMarkerId?: TMarker['id'];
  onMarkerClick?: (marker: TMarker) => void;
  center: LatLngTuple;

};

function Map ({ markers, center, selectMarkerId, onMarkerClick }): MapProps {
  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={marker.position}
          riseOnHover
          opacity={
            marker.id === selectMarkerId || markers.length === 1 ? 1 : 0.5
          }
          eventHandlers={{
            click: () => onMarkerClick?.(marker)
          }}
        >
          {marker.name && <Popup>{marker.name}</Popup>}
        </Marker>
      ))}

    </MapContainer>
  );

}

export { Map };
