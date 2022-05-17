import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { ContentWrapper } from './app.styles';
import ResetCSS from './assets/css/style';
import AvailableStore from './components/common/AvailableStore';
import Banner from './components/common/Banner';
import Experiences from './components/common/Experiences';
import FeatureSlider from './components/common/FeatureSlider';
import Navbar from './components/common/Navbar';
import Pricing from './components/common/Pricing';
import CallToAction from './components/common/CallToAction';
import ChooseUs from './components/common/ChooseUs';
import Faq from './components/common/Faq';
import Footer from './components/common/Footer';
import KeyFeatures from './components/common/KeyFeatures';
import TestimonialSection from './components/common/Testimonials';
import GlobalStyle, { AppWrapper } from './components/containers/containers';
import { theme } from './utils/constants/common';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app creative landing */}
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <Experiences />
            <FeatureSlider />
            <TestimonialSection />
            <AvailableStore />
            <CallToAction />
            <KeyFeatures />
            <ChooseUs />
            <Faq />
            <Footer />

          </ContentWrapper>
          {/* <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />

            <KeyFeatures /> Andres
            <ChooseUs />

            <Experiences />
            <FeatureSlider />
            <Pricing />
            <TestimonialSection />
            <AvailableStore />
            <Faqs />
            <CallToAction />
          </ContentWrapper>
          <Footer /> */}
        </AppWrapper> 
        {/* /* end of app creative landing */}
    </ThemeProvider>
  );
}

export default App;
