import React from 'react'
import PricingAndCommissions from '../components/sections/PricingAndCommissions'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'

const Services = () => (
  <AnimateOnScroll animation="fadeUp" duration={800}>
    <PricingAndCommissions />
  </AnimateOnScroll>
)

export default Services
