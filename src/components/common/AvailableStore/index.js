import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from '../Text';
import Heading from '../Heading';
import NextImage from '../Image';
import Container from '../../containers/Container';
import SectionWrapper, {
  ThumbWrapper,
  TextWrapper
} from './availableStore.style';

import { availableStore } from '../../../assets/data';

const AvailableStore = () => {
  const { title, thumb, reason1, reason2 } = availableStore;
  return (
    <SectionWrapper>
      <Container> 
        <TextWrapper>
          <Heading content={title} />
          <br/><br/>
          <ul>
            <li style={{display: "flex", flexDirection: "column"}}>
              <Heading as="h3" content={"La conservación y preservación de la información"} style={{color: "white"}}/>
              <span style={{display: "flex"}}>
                <p>&#x2022;</p>
                <Text content={reason1} />
              </span>
            </li>
            <br/><br/>
            <li style={{display: "flex", flexDirection: "column"}}>
              <Heading as="h3" content={"Facilitar el acceso y difusión de la información"} style={{color: "white"}}/>
              <span style={{display: "flex"}}>
                <p>&#x2022;</p>
                <Text content={reason2} />
              </span>
            </li>
          </ul>
        </TextWrapper>
        <ThumbWrapper>
          <Fade right>
            <NextImage src={thumb} alt="App Image" />
          </Fade>
        </ThumbWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default AvailableStore;
