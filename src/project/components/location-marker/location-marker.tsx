import { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

function LocationMarker() {
  const [position, setPosition ] = useState(null);

  const map = useMapEvents({
    click: () => {
      map.locate(),
    },
    locationfound: (location) => {
      setPosition(location.latlng)
      map.flyTo(location.latlng, map.getZoom())
    }
  });

  return position === null ? '' : (
    <Marker position={position}>
      <Popup>
  You are here. <br /> Welcome
      </Popup>
    </Marker>
  );


}

export { LocationMarker };

