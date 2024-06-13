import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "@site/src/components/Hero";
import App from "../components/App";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`home`}
      description="Description will go into a meta tag in <head />"
    >
      <Hero />
      <App />
    </Layout>
  );
}
