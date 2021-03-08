// reporter is analytics and console.log from gatsby

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query{
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors)
  }

  const projects = result.data.allMdx.nodes;
  console.log(projects.forEach(val => val.frontmatter.slug));

  projects.forEach(project => {
    actions.createPage({
      path: project.frontmatter.slug,
      component: require.resolve('./src/templates/project.js'),
      context: {
        slug: project.frontmatter.slug
      }
    })
  });
}
