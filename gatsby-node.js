const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/blog.js');
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `);

  response.data.allContentfulBlogPost.nodes.forEach((node) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${node.slug}`,
      context: {
        contentfulSlug: node.slug
      }
    });
  });
};

/*
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');

    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
};

allMarkdownRemark {
  edges {
    node {
      fields {
        slug
      }
    }
  }
}

response.data.allMarkdownRemark.edges.forEach((edge) => {
  createPage({
    component: blogTemplate,
    path: `/blog/${edge.node.fields.slug}`,
    context: {
      slug: edge.node.fields.slug
    }
  });
});
*/
