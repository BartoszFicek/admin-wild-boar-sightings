import AppLayout from "./AppLayout";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { compose, withProps } from "recompose";
import boar from "./boar.png";
import deadBoar from "./dead-boar.png";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyB0GOohGH9OwlYJEEIggDDsSBFtJX3Bqu4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  let boarMarker = new window.google.maps.MarkerImage(
    boar,
    null /* size is determined at runtime */,
    null /* origin is 0,0 */,
    null /* anchor is bottom center of the scaled image */,
    new window.google.maps.Size(45, 45)
  );

  let deadBoarMarker = new window.google.maps.MarkerImage(
    deadBoar,
    null /* size is determined at runtime */,
    null /* origin is 0,0 */,
    null /* anchor is bottom center of the scaled image */,
    new window.google.maps.Size(45, 45)
  );
  return (
    <GoogleMap
      defaultZoom={14}
      style={{ width: "200px" }}
      defaultCenter={{ lat: 50.054927, lng: 19.937027 }}
    >
      {MARKERS.map((marker, index) => {
        return (
          <Marker
            position={{
              lat: marker.latlng.latitude,
              lng: marker.latlng.longitude,
            }}
            icon={marker.dead === true ? deadBoarMarker : boarMarker}
          />
        );
      })}
    </GoogleMap>
  );
});

const BoarMap = () => {
  return (
    <AppLayout>
      <div className="SiemaElo">
        <MyMapComponent />
      </div>
    </AppLayout>
  );
};

export default BoarMap;

const MARKERS = [
  {
    latlng: {
      latitude: 50.055956,
      longitude: 19.950503,
    },
    dead: true,
  },
  {
    latlng: {
      latitude: 50.056323,
      longitude: 19.949852,
    },
    dead: true,
  },
  {
    latlng: {
      latitude: 50.056294,
      longitude: 19.954559,
    },
    dead: true,
  },
  {
    latlng: {
      latitude: 50.058808,
      longitude: 19.952072,
    },
  },
  {
    latlng: {
      latitude: 50.056911,
      longitude: 19.954584,
    },
  },
  {
    latlng: {
      latitude: 50.064927,
      longitude: 19.937027,
    },
    dead: true,
  },
  {
    latlng: {
      latitude: 50.065154,
      longitude: 19.942706,
    },
    dead: true,
  },
  {
    latlng: {
      latitude: 50.061205,
      longitude: 19.932797,
    },
    dead: true,
  },
  {
    latlng: {
      latitude: 50.058194,
      longitude: 19.937134,
    },
  },
  {
    latlng: {
      latitude: 50.06127,
      longitude: 19.943639,
    },
  },
  {
    latlng: {
      latitude: 50.046166,
      longitude: 19.922582,
    },
    dead: true,
  },
  {
    latlng: {
      latitude: 50.047034,
      longitude: 19.928507,
    },
    dead: true,
  },
  {
    latlng: {
      latitude: 50.040307,
      longitude: 19.926098,
    },
    dead: true,
  },
  {
    latlng: {
      latitude: 50.040812,
      longitude: 19.931927,
    },
  },
  {
    latlng: {
      latitude: 50.045607,
      longitude: 19.936512,
    },
  },
];
