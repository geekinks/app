import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Partners from '@site/src/components/Partners';
import Testimonials from '../components/Testimonials';
// import Pricing from '@site/src/components/Pricing';
import FAQ from '@site/src/components/FAQ'
import Courses from '@site/src/components/Courses';
import Hero from '@site/src/components/Hero';
import CustomDivider from '@site/src/components/CustomDivider';
import styles from './index.module.css';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`home`}
      description="Description will go into a meta tag in <head />">
      <Hero/>
      <main>
      <CustomDivider
        label="Testimonials from Our Students" />
        <Testimonials />
        <Courses/>
        <CustomDivider
        label="Our Partners" />
        <Partners />
        {/* <Pricing/> */}
        <FAQ/>
      </main>
    </Layout>
  );
}
