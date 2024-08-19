import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "@site/src/components/Hero";
import App from "../components/App";

export default function Home() {
  return (
    <Layout
      title={`home`}
      description="Geek Ink: Technopreneurship LinkedInuted of Social Innovators.
      <head 
      <meta name="google-adsense-account" content="ca-pub-7276960891212204">      
      />"
    >
      <Hero />
      <main>
        <App />
      </main>
    </Layout>
  );
}
