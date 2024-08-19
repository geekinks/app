import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "@site/src/components/Hero";
import App from "../components/App";

export default function Home() {
  return (
    <Layout
      title={`home`}
       name="google-adsense-account" content="ca-pub-7276960891212204" 
      description="Geek Ink: Technopreneurship LinkedInuted of Social Innovators. <head />"
    >
      <Hero />
      <main>
        <App />
      </main>
    </Layout>
  );
}
