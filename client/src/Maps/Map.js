import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";

export default function Map({ coords, distance }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom] = useState(10);
  maptilersdk.config.apiKey = `YOUR_MAPTILER_API_KEY`;

  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [32.8597, 39.9334],
      zoom: zoom,
    });
  }, [zoom]);

  useEffect(() => {
    if (coords && map.current) {
      if (map.current.markers) {
        map.current.markers.forEach(marker => marker.remove());
      } else {
        map.current.markers = [];
      }

      if (map.current.getLayer('route')) {
        map.current.removeLayer('route');
        map.current.removeSource('route');
      }

      coords.forEach(coord => {
        const marker = new maptilersdk.Marker({ color: "#FF0000" })
          .setLngLat([coord.y, coord.x])
          .setPopup(new maptilersdk.Popup().setText(`${coord.name} ${coord.rate ? `(Puan: ${coord.rate})` : ''}`))
          .addTo(map.current);
        map.current.markers.push(marker);
      });

      if (coords.length > 1) {
        const lineCoordinates = coords.map(coord => [coord.y, coord.x]);
        const lineColor = "#0000FF";

        map.current.addSource('route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: lineCoordinates,
            },
          },
        });

        map.current.addLayer({
          id: 'route',
          type: 'line',
          source: 'route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': lineColor,
            'line-width': 8,
          },
        });
      }
    }
  }, [coords]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
      {distance && (
        <div className="distance-label">
          İki nokta arasındaki mesafe: {distance} KM
        </div>
      )}
    </div>
  );
}
