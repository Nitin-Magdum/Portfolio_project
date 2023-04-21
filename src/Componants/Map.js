import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation
} from "react-simple-maps";
import styled from "styled-components";



const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 100vh;
    display: flex;
    justify-content: space-between;
    /* margin-top: 100px; */

`;

const Map = () => {
  return (
    <Container>
      <ComposableMap

        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-80.0, -1.0, 0],
          center: [78.9629, 20.5937], // Update center to India
          scale: 270
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
          dx={310}
          dy={-60}
          connectorProps={{
            stroke: "#FF5533",
            strokeWidth: 3,
            strokeLinecap: "round"
          }}
        >
          <text x="50" textAnchor="end" alignmentBaseline="middle" fill="#F53">
            {"India"}
          </text>
        </Annotation>
      </ComposableMap>
    </Container>
  );
};

export default Map;
