import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
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
        <p>Posts: </p>
        <ol>
          {markdown.allMarkdownRemark.edges.map((post, i) => (
            <li key={i}>
              <Link to={post.node.fields.slug}>
                <h2>{post.node.frontmatter.title}</h2>
              </Link>
              <p>{post.node.frontmatter.date}</p>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  );
};

export default Blog;
