import React from 'react';
import { SiWikimediacommons } from 'react-icons/si';
const About = () => {
  return (
    <main>
      <div className="about">
        <h1>What are sorting algorythms?</h1>
        <article className="about__container">
          <p>
            In computer science, a <span>sorting algorithm </span> is an <span>algorithm</span> that
            puts elements of a list in a certain order. The most frequently used orders are
            numerical order and lexicographical order.
            <br /> <br /> <br /> <span>Efficient sorting</span> is important for optimizing the
            efficiency of other algorithms (such as search and merge algorithms) that require input
            data to be in sorted lists. <br /> <br /> <br /> Sorting is also often useful for
            canonicalizing data and for producing human-readable output. More formally, the output
            of any sorting algorithm must satisfy <span>two conditions</span>:
            <br /> <br /> <br />
          </p>
          <ul>
            <li>
              - The output is in nondecreasing order (each element is no smaller than the previous
              element according to the desired total order).
            </li>
            <li>
              - The output is a permutation (a reordering, yet retaining all of the original
              elements) of the input.
            </li>
          </ul>
          <br /> <br /> <br />
          <p>
            Further, the input data is often stored in an array, which allows
            <span> random access</span>, rather than a list, which only allows sequential access;
            though many algorithms can be applied to either type of data after suitable
            modification.
          </p>
          <br /> <br />
          <a href="https://en.wikipedia.org/wiki/Sorting_algorithm">
            read more <SiWikimediacommons />
          </a>
          <br /> <br />
        </article>
      </div>
    </main>
  );
};

export default About;
