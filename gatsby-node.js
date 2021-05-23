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
    reporter.panic('failed to create notes', result.errors)
  }

  const notes = result.data.allMdx.nodes;

  notes.forEach(note => {
    actions.createPage({
      path: note.frontmatter.slug,
      component: require.resolve('./src/templates/note.js'),
      context: {
        slug: note.frontmatter.slug
      }
    })

    actions.createRedirect({ fromPath: `notes/${note.frontmatter.slug}`, toPath: `/${note.frontmatter.slug}`, isPermanent: true })
  });
}
