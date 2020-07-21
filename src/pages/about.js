import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const About = () => {
  return (
    <Layout>
      <div>
        <h1>About Me</h1>
        <p>
          I am a web developer who loves learning new technologies and building
          beautiful things through code.
        </p>
        <p>
          Lets work together.{`${'  '}`}
          <Link to="/contact">Contact me!</Link>
        </p>
      </div>
    </Layout>
  );
};

export default About;
