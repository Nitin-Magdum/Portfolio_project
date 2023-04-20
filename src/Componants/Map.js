import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
    return (
      <ComposableMap
        width={window.innerWidth}
        height={window.innerHeight}
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-10.0, -52.0, 0],
          center: [78.9629, 20.5937], // Update center to India
          scale: 1100
        }}
      >
        <Geographies
          geography="./features.json"
          fill="#2C065D"
          stroke="#FFFFFF"
          strokeWidth={0.5}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Annotation
          subject={[78.9629, 20.5937]} // Update subject to India
          dx={-90}
          dy={-30}
          connectorProps={{
            stroke: "#FF5533",
            strokeWidth: 3,
            strokeLinecap: "round"
          }}
        >
          <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
            {"India"}
          </text>
        </Annotation>
      </ComposableMap>
    );
  };
  
export default Map;
