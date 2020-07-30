import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import { Link, FormattedMessage } from 'gatsby-plugin-intl';
import '../styles/index.scss';

const IndexPage = (props) => {
  console.log(props.location);
  return (
    <Layout>
      <Head title="Home" />
      <FormattedMessage id="hello" />
      <h2>
        <FormattedMessage id="greeting_1" />
      </h2>
      <p>
        <FormattedMessage id="greeting_2" /> {` `}
        <Link to="/contact">
          <FormattedMessage id="contact" />{' '}
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
