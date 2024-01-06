import { LatLngTuple } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

type TMarker = {
  id: string;
  name?: string;
  position: LatLngTuple;
};

type MapProps = {
  center: LatLngTuple;
  markers: TMarker[];
  selectedMarkerId?: TMarker['id'];
  onMarkerClick?: (marker: TMarker) => void;
};

function Map({ center, markers, selectedMarkerId, onMarkerClick }: MapProps) {
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
            marker.id === selectedMarkerId || markers.length === 1 ? 1 : 0.5
          }
          eventHandlers={{
            click: () => onMarkerClick?.(marker),
          }}
        >
          {marker.name && <Popup>{marker.name}</Popup>}
        </Marker>
      ))}
    </MapContainer>
  );
}

export type { TMarker };
export { Map };
