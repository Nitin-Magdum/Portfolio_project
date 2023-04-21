import React from 'react'
import styled from 'styled-components'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import NavBar from './NavBar';



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
   flex: 2;
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 20px;
`;


const Title = styled.h1`
    font-size: 80px;
   
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
    width: 100px;
    height: 50px;
    padding: 10px;
    background-color: purple;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
   
   
`;

const Right = styled.div`
    flex: 3;
    position: relative;

`;

const Img = styled.img`
    width: 500px;
    height: 500px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 1s infinite ease alternate;
        @keyframes animate {
            to{
                transform: translateY(30px);
            }
        
        }
    
`;



const Hero = () => {
    return (
        <Section>
            <NavBar />
            <Container>
                <Left>
                    <Title>
                        Think, Make , Solve
                    </Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" />
                        <Subtitle>What we do</Subtitle>
                    </WhatWeDo>
                    <Desc>we are good to go lets do it, i dont know what iam writing her ejust for it lest change it latter inti oot</Desc>
                    <Button>Learn More</Button>
                </Left>
                <Right>
                    <Canvas >
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={2} />
                        <directionalLight position={[3, 3, 2]} />
                        <Sphere args={[1, 100, 200]} scale={2.5}>
                            <MeshDistortMaterial color="#220736" attach="material" distort={0.5} speed={2} />
                        </Sphere>
                    </Canvas>
                    <Img src="./img/Pest.png" />
                </Right>
            </Container>
        </Section>
    )
}

export default Hero
