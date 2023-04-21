import React from 'react'
import styled from 'styled-components'
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
    /* margin-top: 100px; */
`;

const Left = styled.div`
   flex: 1;
`;


const Title = styled.h1`
    font-size: 74px;
   
`;

const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Line = styled.img`
    height: 10px;
    
   
`;

const Subtitle = styled.h2`
color: pink;
   
`;

const Desc = styled.p`
   font-size: 24px;
   color: lightgrey;
`;

const Button = styled.button`
    width: 150px;
    padding: 10px;
    background-color: purple;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
   
   
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

`;





const WhoWeAre = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{fov:25, position:[5,5,5]}} >
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>
            Think, Make , Solve
          </Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What we do</Subtitle>
          </WhatWeDo>
          <Desc>we are good to go lets do it, i dont know what iam writing her ejust for it lest change it latter inti oot</Desc>
          <Button>See my works</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default WhoWeAre
