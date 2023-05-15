import React from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { ContentWrapper } from './app.styles';
import ResetCSS from './assets/css/style';
import AvailableStore from './components/common/AvailableStore';
import Banner from './components/common/Banner';
import FeatureSlider from './components/common/FeatureSlider';
import Navbar from './components/common/Navbar';
import CallToAction from './components/common/CallToAction';
import Faq from './components/common/Faq';
import Footer from './components/common/Footer';
import KeyFeatures from './components/common/KeyFeatures';
import GlobalStyle, { AppWrapper } from './components/containers/containers';
import { theme } from './utils/constants/common';

function App() {

  console.log("[ v1.0 ] - Saken los Azulitos")
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

            <KeyFeatures />
            <AvailableStore />
            <FeatureSlider />
            <Faq />
            <CallToAction />
            
          </ContentWrapper>
          <Footer />
        </AppWrapper> 
    </ThemeProvider>
  );
}

export default App;