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
import TestimonialSection from './components/common/Testimonials';
import GlobalStyle, { AppWrapper } from './components/containers/containers';
import { theme } from './utils/constants/common';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <h2>HELLO WORLDD</h2>
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
            {/* <KeyFeatures />Andres */}
            {/* <ChooseUs />Andres */}
            <Experiences />
            <FeatureSlider />
            <Pricing />
            <TestimonialSection />
            <AvailableStore />
            {/* <Faqs />Andres */}
            {/* <CallToAction />Andres */}
          </ContentWrapper>
          {/* <Footer />Andres */}
        </AppWrapper>
        {/* end of app creative landing */}
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
