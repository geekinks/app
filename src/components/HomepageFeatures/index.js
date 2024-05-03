import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Learn',
    Svg: require('@site/static/img/enge.svg').default,
    description: (
      <>
        our curated courses covering essential programming languages, Dive deep into in-demand tech stacks, honing your expertise through practical, hands-on projects
      </>
    ),
  },
  {
    title: 'Connect',
    Svg: require('@site/static/img/connect.svg').default,
    description: (
      <>
        community of learners and builders just like you. Benefit from mentorship by seasoned professionals, guiding you towards success in your tech journey.
      </>
    ),
  },
  {
    title: 'Build',
    Svg: require('@site/static/img/build.svg').default,
    description: (
      <>
       Ignite your entrepreneurial spirit and turn your ideas into reality, Contribute to the thriving tech ecosystem of Northern Nigeria, driving innovation and economic growth
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
