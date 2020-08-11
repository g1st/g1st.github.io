import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Link, graphql } from "gatsby";

import { media } from "../styles/mixins";
import SEO from "../components/seo";

const Container = styled.div`
  margin: 0 auto;
  max-width: 42rem;
  padding: 0 2rem;

  ${media.sm`
    margin-top: 2rem;
  `}
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
`;

const BlogCard = styled.article`
  margin-bottom: 8rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 0;

  > a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
`;

const Date = styled.small``;

const Header = styled.header`
  margin-bottom: 0.5rem;
`;

const Image = styled(Img)`
  border-radius: 5px;
  margin-bottom: 0.2em;
`;

const Blog = ({ data, location }) => {
  const posts = data.allMdx.nodes;

  return (
    <Container>
      <SEO title="Blog" slug={location.pathname} />
      <Heading>Blog</Heading>

      {posts.map((node) => (
        <BlogCard key={node.id}>
          <Header>
            {!!node.frontmatter.cover && (
              <Link
                to={node.fields.slug}
                aria-label={`View ${node.frontmatter.title} page`}
              >
                <Image sizes={node.frontmatter.cover.childImageSharp.sizes} />
              </Link>
            )}
            <Title>
              <Link
                to={node.fields.slug}
                aria-label={`View ${node.frontmatter.title} page`}
              >
                {node.frontmatter.title}
              </Link>
            </Title>

            <Date>{node.frontmatter.date}</Date>
          </Header>
          <section>{node.excerpt}</section>
        </BlogCard>
      ))}
    </Container>
  );
};

export default Blog;

export const blogPageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        excerpt
        id
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          title
          cover {
            publicURL
            childImageSharp {
              sizes(maxWidth: 800, traceSVG: { color: "#639" }) {
                ...GatsbyImageSharpSizes_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;
