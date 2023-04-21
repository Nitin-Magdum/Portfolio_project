import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styled from 'styled-components';
import Map from './Map';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;


const Left = styled.div`
  flex: 1;
`;


const Title = styled.h1`
  font-weight: 100;
`;


const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;


const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: 5px;
  border-radius: 5px;
`;


const TextArea = styled.textarea`
  padding:20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;


const Button = styled.button`
  background-color: purple;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start; 
`;


const Contact = () => {
  const ref = useRef()
  const [succes, setsucces] = useState(null)
  const handlesubmit = e => {
    e.preventDefault();
    emailjs.sendForm('service_vnhhuxi', 'template_rljikvk', ref.current, 'eik8Z--JCntvpY73i')
      .then((result) => {
        setsucces(true);
      }, (error) => {
        setsucces(false);
      });
  }


  return (
    <Section>
      <Container>
        <Left>
          <Map />
        </Left>
        <Right>
          <Form ref={ref} onSubmit={handlesubmit}>
            <Title>Contact Me</Title>
            <Input placeholder='Name' name="name"/>
            <Input placeholder='E-Mail' name="email"/>
            <TextArea placeholder='Write Your Message' name="message" rows={10} />
            <Button type='submit'>Send</Button>
            {succes && 
            "Your Message Has Been Sent, Stay Tune For More Update"}
          </Form>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact
