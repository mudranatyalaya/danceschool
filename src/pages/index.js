import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link } from 'gatsby';
import { toOptimizedImage } from '../helpers/general';

const IndexPage = () => {
  const newArrivals = generateMockProductData(2, 'about');
  const blogData = generateMockBlogData(3);

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'}
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
          Mudhra Natyalaya is a Bharathanatyam dance school in {' '}
          <span className={styles.gold}>Raleigh/Wake Forest Region</span>
        </p>
      </div>

      {/* Collection Container */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'Gallery'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'About Us'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={2}
            data={newArrivals}
          />
        </Container>
      </div>

    

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'about Sydney'}
        quote={
          '“We believe in two things: the pursuit of quality in everything we do, and looking after one another. Everything else should take care of itself.”'
        }
      />
    </Layout>
  );
};

export default IndexPage;
