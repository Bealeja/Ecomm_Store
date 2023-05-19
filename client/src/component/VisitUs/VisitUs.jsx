import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = () => {
  const defaultProps = {
    center: {
      lat: -37.76292670745636,
      lng: 144.95979605511926,
    },
    zoom: 15,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "400px", width: "400px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCtlXxYbq8eDKVqj5PTFPcDwE97X2C1ZZc" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={-37.76292670745636}
          lng={144.95979605511926}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
