import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../components/layout';
import classes from './blog.module.scss';
import Head from '../components/head';

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        nodes {
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="Blog" />
      <div>
        <h1>Blog</h1>
        <ol className={classes.Posts}>
          {data.allContentfulBlogPost.nodes.map((post, i) => (
            <li key={i} className={classes.Post}>
              <Link to={post.slug}>
                <h2>{post.title}</h2>
                <p>{post.publishedDate}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  );
};

export default Blog;

/*
allMarkdownRemark {
  edges {
    node {
      frontmatter {
        date
        title
      }
      fields {
        slug
      }
    }
  }
}   
<h2>Posts in Markdown</h2>
  <ol className={classes.Posts}>
    {data.allMarkdownRemark.edges.map((post, i) => (
      <li key={i} className={classes.Post}>
        <Link to={post.node.fields.slug}>
          <h3>{post.node.frontmatter.title}</h3>
          <p>{post.node.frontmatter.date}</p>
        </Link>
      </li>
    ))}
  </ol>
  */
