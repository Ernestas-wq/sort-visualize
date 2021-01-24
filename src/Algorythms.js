import React from 'react';
import { SiWikimediacommons } from 'react-icons/si';
import algorythms from './assets/data/algorythmInfo';

const Algorythms = () => {
  return (
    <main>
      <section className="algorythms">
        <h1>Sorting Algorythms</h1>

        <div className="algorythms__container">
          {algorythms.map(algo => {
            const { id, name, article, link } = algo;
            return (
              <article key={id}>
                <h3>{name}</h3>
                <p>{article}</p>
                <a href={link}>
                  read more <SiWikimediacommons />{' '}
                </a>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Algorythms;
