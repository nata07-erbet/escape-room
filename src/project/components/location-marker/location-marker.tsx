import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState } from 'react';

function LocationMarker () {
  const [ position, setPosition ] = useState(null);

  const map = useMapEvents();

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}


export { LocationMarker };
