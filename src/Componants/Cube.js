import React, { useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


const Cube = () => {
    
    const textRef=useRef();
    useFrame(state=>(textRef.current.position.x=Math.sin(state.clock.elapsedTime)))
    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <color attach="background" args={["#dc9dcd"]} />
                    <Text ref={textRef}fontSize={3} color="#555">
                        HELLO
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    )
}

export default Cube
