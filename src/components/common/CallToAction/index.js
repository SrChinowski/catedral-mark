import React from 'react';
import Heading from '../Heading';
import Button from '../Button';
import Container from '../../containers/Container'
import illustration from '../../../assets/images/shapeLeft1.png';
import illustration2 from '../../../assets/images/shapeRight1.png';
import SectionWrapper, {
  Content,
  ButtonWrap,
  ContentWrap,
} from './callToAction.style';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const CallToAction = () => {
  return (
    <SectionWrapper id='contact'>
      <Container>
        <Content>
          <img src={illustration} alt="shape" />
          <img src={illustration2} alt="shape" />
          <ContentWrap>
            <Heading
              as="h3"
              content="¿ Te quedaste con la duda ? Nosotros la resolvemos "
            />
            <ButtonWrap>
              <AnchorLink href={"mailto:turriana@catedralmetropolitana.mx"} >
                  <Button title="Contáctanos" />
              </AnchorLink>
            </ButtonWrap>
          </ContentWrap>
        </Content>
      </Container>
    </SectionWrapper>
  );
};

export default CallToAction;
