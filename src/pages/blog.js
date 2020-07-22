import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

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
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        <p>Posts: </p>
        <ol>
          {markdown.allMarkdownRemark.edges.map((post, i) => (
            <li key={i}>
              <h2>{post.node.frontmatter.title}</h2>
              <p>{post.node.frontmatter.date}</p>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  );
};

export default Blog;
