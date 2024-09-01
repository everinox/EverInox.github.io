import React from 'react';
import Zmage from 'react-zmage';
import Fade from 'react-reveal';

const Portfolio = ({ data }) => {
  console.log(data);
  if (!data) return null;

  return (
    <section id="portfolio">
      <Fade left duration={1000} distance="40px">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of our Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {data.projects.map(project => {
                const projectImage = `images/portfolio/${project.image}`;

                return (
                  <div key={project.title} className="columns portfolio-item">
                    <div className="item-wrap">
                      <Zmage alt={project.title} src={projectImage} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Portfolio;
