import { graphql } from 'gatsby';
import React from "react";
import ClintLogo from '../components/ClintLogo/ClintLogo';
import CountUpSection from '../components/CountUpSection/CountUpSection';
import FeatureProfile from '../components/FeatureProfile/FeatureProfile';
import FeaturedJobs from '../components/FeaturedJobs/FeaturedJobs';
import Hero from '../components/Hero/Hero';
import HowItWork from '../components/HowItWork/HowItWork';
import LatestNews from '../components/LatestNews/LatestNews';
import Layout from "../components/Layout/layout";
import Pricing from '../components/Pricing/Pricing';
import Testimonial from '../components/Testimonial/Testimonial';
import WhyChoose from '../components/WhyChoose/WhyChoose.js';

export default function Home({ data }) {
  // console.log(data);
  return (
    <Layout>
      <div className="bg-white">
        <Hero />
        <ClintLogo />
        <HowItWork />
        <WhyChoose />
        <FeatureProfile />
        <FeaturedJobs data={data} />
        <Testimonial />
        <CountUpSection />
        <Pricing />
        <LatestNews />
      </div>
    </Layout>
  )
}

export const query = graphql`
query FeaturedJobs {
  allMarkdownRemark(sort: {id: DESC}) {
    nodes {
      frontmatter {
        id
        title
        tittleImg
        price
        locationArea
        team
      }
    }
  }
}
`
