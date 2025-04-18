import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)} style={{ padding: '4rem 0', textAlign: 'center', background: '#121212', color: '#fff' }}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Inspector de Elementos
        </Heading>
        <p className="hero__subtitle" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Documentación de uso</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
            Ver Documentación 📚
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
      title={`Bienvenido a ${siteConfig.title}`}
      description="Aprende sobre el Inspector de Elementos y mejora tus habilidades en desarrollo web">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
