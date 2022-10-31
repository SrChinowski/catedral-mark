import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from '../Text';
import Button from '../Button';
import Heading from '../Heading';
import Container from '../../containers/Container';
import BannerWrapper, {
  BannerContent,
  BannerImage,
  BannerImageMobile,
  ButtonGroup,
} from './banner.style';

import bannerImg from '../../../assets/images/bannerImg.png';
import bannerImgMobile from '../../../assets/images/availableThumb.png';
import Image from '../Image';
import { Link } from 'react-router-dom';

const Banner = () => {

  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="El conocimiento de la catedral en tus manos 👋"
            />
          </Fade>
          <Fade up delay={200}>
            <Text content="Accede a nuestros recursos de manera digital, o visítanos de forma presencial para ayudarte en tus investigaciones." />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
            <Link to="/login"><Button className="primary" title="Inicia Sesion"/></Link>
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <Image src={bannerImg} alt="Banner" />
        </BannerImage>
        <BannerImageMobile>
          <Image src={bannerImgMobile} alt="Mobile Banner" />
        </BannerImageMobile>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
