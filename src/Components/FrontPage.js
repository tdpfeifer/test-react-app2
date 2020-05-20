import React from 'react';
import HeroSection from './HeroSection';
import {Container} from '@material-ui/core';
import FeatureSection from './FeatureSection';

export default function FrontPage() {
  return (
    <>
      <Container maxWidth="lg">
        <HeroSection />
        <FeatureSection />
      </Container>
    </>
  );
}
