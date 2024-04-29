import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const AboutList = [
  {
    title: 'Tailored to Local Needs',
    Svg: require('@site/static/img/connect.svg').default,
    description: (
      <>
        We're not just another tech school. Geekink is specifically designed to address the unique challenges and aspirations of learners in the northern region of Nigeria. From power issues to limited internet access, we've got you covered
      </>
    ),
  },
  {
    title: 'Hybrid Learning Approach',
    Svg: require('@site/static/img/connect.svg').default,
    description: (
      <>
        Access our online courses anytime, anywhere, through platforms like YouTube and GitHub. And for hands-on training and support, join us at Local ICT Hubs for in-person sessions led by experienced professionals.
      </>
    ),
  },
  {
    title: 'Tech Services',
    Svg: require('@site/static/img/team.svg').default,
    description: (
      <>
          Need software development, project assistance, or research support? Look no further. Captive Hero offers a suite of tech services to help bring your ideas to life. Whether you're launching a startup or working on a passion project, our team of experts is here to support you. 
      </>
    ),
  },
];



function About({Svg, title, description}) {
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
          {AboutList.map((props, idx) => (
            <About key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}