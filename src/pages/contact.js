import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <div>
        <h1>Contact me!</h1>
        <p>example1@gmail.com</p>
        <p>
          Follow me on Twitter!{' '}
          <a
            href="https://twitter.com/James_Wang12"
            rel="noreferrer"
            target="_blank"
          >
            @jawang12
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default Contact;
