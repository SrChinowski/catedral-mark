import React, { useState } from 'react';
import SwiperCore, { Thumbs, Autoplay } from 'swiper';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import Image from '../Image';
import FeatureBlock from '../FeatureBlock';
import Text from '../Text';
import Heading from '../Heading';
import Container from '../../containers/Container';
import { SectionHeader } from '../../../app.styles';
import SectionWrapper, {
  ImageGalleryWrap,
  FeatureContactWrapper, 
  FeatureItemWrapper,
} from './featureSlider.style';

import { features } from '../../../assets/data';

SwiperCore.use([Thumbs, Autoplay]);

const FeatureSlider = () => {
  const { slogan, title, items } = features;
  const swiperSlide = useSwiperSlide();
  const [thumbsSwiper, setThumbsSwiper] = useState(swiperSlide);


  return (
    <SectionWrapper id='history'>
      <Container>
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
        {/* <p>Current slide is {swiperSlide.isActive ? 'active' : 'not active'}</p> */}
        <FeatureContactWrapper>
          <ImageGalleryWrap>
            <Swiper
            onSwiper={setThumbsSwiper}
            modules={[Thumbs]}
        watchSlidesProgress
              spaceBetween={0}
            >
              {items.map((item) => (
                <SwiperSlide
                  className="single__img_slider"
                  key={`slide__thumb${item.id}`}
                >
                  <Image
                    src={item.thumbnail}
                    alt={`Slide Thumb${item.id}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </ImageGalleryWrap>
          <FeatureItemWrapper>
            <Swiper
              
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
              spaceBetween={0}
              centeredSlides={true}
              slidesPerView="auto"
              touchRatio="0.2"
              slideToClickedSlide={true}
              // autoplay={{
              //   delay: 3000,
              //   disableOnInteraction: true,
              // }}
            >
              {items.map((item) => (
                <SwiperSlide
                  className="feature__outer"
                  key={`feature-key${item.id}`}
                >
                  <FeatureBlock
                    iconPosition="left"
                    icon={item.id}
                    title={<Heading as="h3" content={item.title} />}
                    description={<Text content={item.description} />}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </FeatureItemWrapper>
        </FeatureContactWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default FeatureSlider;
