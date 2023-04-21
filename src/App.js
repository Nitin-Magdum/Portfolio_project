import React from 'react'
import styled from 'styled-components'
import Hero from './Componants/Hero'
import WhoWeAre from './Componants/WhoWeAre'
import Works from './Componants/Works'
import Contact from './Componants/Contact'





const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  
  overflow-y: auto;
  scrollbar-width: none; //This will only works for firefox for chrome we have to write webkits
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;


const App = () => {
  return (
    <Container>
      <Hero />
      <WhoWeAre />
      <Works />
      <Contact />
    </Container>

  )
}

export default App

