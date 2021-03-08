import { graphql, useStaticQuery } from 'gatsby';

const useContent = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            author
            slug
            image {
              sharp: childImageSharp {
                fluid (
                  maxWidth: 200
                  maxHeight: 200
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
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