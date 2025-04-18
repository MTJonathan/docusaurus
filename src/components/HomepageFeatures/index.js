import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '¿Qué es Inspector de Elementos?',
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.rXkFGjizu6oJrMu7KIJ7mwHaFf&pid=Api',
    description: (
      <>
        Es una herramienta integrada en el navegador que te permite inspeccionar y editar el HTML, CSS y JavaScript de cualquier página web en tiempo real.
      </>
    ),
  },
  {
    title: '¿Para qué sirve?',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.ulfY51-UTwc4miGgDvm4sgHaEc&pid=Api',
    description: (
      <>
        Te ayuda a depurar errores, probar estilos al vuelo y entender la estructura del DOM sin modificar los archivos originales.
      </>
    ),
  },
  {
    title: 'Consejos de uso',
    imageUrl: 'https://tse4.mm.bing.net/th?id=OIP._xSZmQOhTgjSBRMES9X1dgHaEX&pid=Api',
    description: (
      <>
        Practica abriendo el inspector en distintas páginas, usa atajos de teclado y experimenta con breakpoints para depurar JavaScript eficientemente.
      </>
    ),
  },
];




function Feature({imageUrl, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imageUrl} alt={title} style={{ maxWidth: '100%', height: '200px' }} />
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
