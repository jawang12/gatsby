import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../components/layout';
import classes from './blog.module.scss';

const Blog = () => {
  const markdown = useStaticQuery(graphql`
    query {
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
    }
  `);
  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        <ol className={classes.Posts}>
          {markdown.allMarkdownRemark.edges.map((post, i) => (
            <li key={i} className={classes.Post}>
              <Link to={post.node.fields.slug}>
                <h2>{post.node.frontmatter.title}</h2>
                <p>{post.node.frontmatter.date}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  );
};

export default Blog;
