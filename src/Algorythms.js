import React from 'react';
import { SiWikimediacommons } from 'react-icons/si';
import algorythms from './assets/data/algorythmInfo';

const Algorythms = () => {
  console.log(algorythms);
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

          {/* <article>
            <h3>Bubble Sort</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sit exercitationem
              nisi labore saepe nulla qui recusandae maxime voluptatibus repudiandae. Perspiciatis
              rem itaque fugit deleniti nesciunt consequuntur reprehenderit sit sint.Iure doloribus,
              quos tempora perferendis reiciendis sit quod autem temporibus repellendus? Eos unde,
              temporibus animi porro, optio ullam labore neque quo culpa maiores cum vitae ex id
              explicabo numquam. Commodi.
            </p>
            <a href="">
              Read More <SiWikimediacommons />
            </a>
          </article> */}
        </div>
      </section>
    </main>
  );
};

export default Algorythms;
