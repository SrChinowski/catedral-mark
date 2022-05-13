import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import ResetCSS from './assets/css/style';
import Navbar from './components/common/Navbar';
import GlobalStyle, { AppWrapper } from './components/containers/containers';
import { theme } from './utils/constants/common';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
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
            <KeyFeatures />
            <ChooseUs />
            <Experiences />
            <FeatureSlider />
            <Pricing />
            <Testimonials />
            <AvailableStore />
            <Faqs />
            <CallToAction />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
        {/* end of app creative landing */}
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
