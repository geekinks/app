import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Mentors from '@site/src/components/Mentors';
import Partners from '@site/src/components/Partners';
import Testimonials from '../components/Testimonials';
// import Pricing from '@site/src/components/Pricing';
import Course from '@site/src/components/Course';
import Hero from '@site/src/components/Hero';
import CustomDivider from '@site/src/components/CustomDivider';
import Heading from '@theme/Heading';
import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
        Transform your passion for technology into impactful solutions. Learn by doing, gain expert guidance, and launch your own ventures with our comprehensive programs and supportive community
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            {'<'} Explore our courses {'/>'}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`home`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      <Hero/>
      <main>
      <CustomDivider
        label="Testimonials from Our Students" />
        <Testimonials />
        <CustomDivider label="Explore our Courses"/>
        <Course/>
        <CustomDivider
        label="Meet Our Mentors" />
        <Mentors />
        <CustomDivider
        label="Our Partners" />
        <Partners />
        {/* <Pricing/> */}
      </main>
    </Layout>
  );
}
