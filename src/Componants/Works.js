import React from 'react'
import styled from 'styled-components';



const ListItemData = [
  "Python",
  "AI/ML",
  "Web Design",
  "ETL",
  "Backend"
];


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
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const List = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
`;

const ListItem = styled.div`
  font-size: 85px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  ::after{
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #3E94A3;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover{
    ::after{
      animation: moveText 1.5s linear both;
      @keyframes moveText {
        to{
          width: 200%;
        }
        
      }
    }
  }
`;

const Right = styled.div`
 
`;


const Works = () => {

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {ListItemData.map((item) =>
              <ListItem key={item} text={item}>{item}</ListItem>
            )}
          </List>
        </Left>
        <Right>          
          
        </Right>
      </Container>
    </Section>
  )
}

export default Works
