import React from 'react'
import GallerySection from '../components/sections/GallerySection'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'

const Gallery = () => (
  <AnimateOnScroll animation="fadeUp" duration={800}>
    <GallerySection />
  </AnimateOnScroll>
)

export default Gallery
