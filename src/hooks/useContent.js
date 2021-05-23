import { graphql, useStaticQuery } from 'gatsby';

/*
  Important to note:
  Any change in fields of the frontmatter of a mdx file should be 
  either added or removed from the GraphQL query below.
*/

const useContent = () => {
  const data = useStaticQuery(graphql`{
  allMdx {
    nodes {
      frontmatter {
        title
        author
        slug
        excerpt
        image {
          sharp: childImageSharp {
            gatsbyImageData(width: 200, height: 200, layout: CONSTRAINED)
          }
        }
      }
      excerpt
    }
  }
}
`);



  return data.allMdx.nodes.map(item => ({
    title: item.frontmatter.title,
    author: item.frontmatter.author,
    slug: item.frontmatter.slug,
    image: item.frontmatter.image,
    excerpt: item.frontmatter.excerpt
  }));
};

export default useContent;