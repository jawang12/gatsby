import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import Layout from '../components/layout';
import Head from '../components/head';

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <div>
        <h1>
          <FormattedMessage id="contact" />
        </h1>
        <p>example1@gmail.com</p>
        <p>
          <FormattedMessage id="twitter" />
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
