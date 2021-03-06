import React from "react";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link, graphql } from "gatsby";

import { media } from "../styles/mixins";
import SEO from "../components/seo";

const Container = styled.div`
  margin: 3rem auto;
  max-width: 42rem;
  padding: 0 2rem;
`;

const Article = styled.article`
  border-bottom: 3px solid ${({ theme }) => theme.colors.tertiary};
  margin-bottom: 2rem;
  padding-bottom: 2rem;
`;

const Heading = styled.h1`
  margin-bottom: 0;
  font-size: 3rem;
`;

const Date = styled.span``;

const Header = styled.header`
  margin-bottom: 2rem;

  ${media.xs`
    margin-bottom: 3rem;
  `}
`;

const NavigationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

const Blog = ({ data, pageContext, location }) => {
  const { frontmatter, excerpt, body } = data.mdx;
  const { previous, next } = pageContext;
  const { cover } = frontmatter;
  const coverPath = cover && cover.childImageSharp.fixed.src;

  return (
    <Container>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || excerpt}
        image={coverPath}
        slug={pageContext.slug}
        type="article"
      />
      <Article>
        <Header>
          <Heading>{frontmatter.title}</Heading>
          <Date>{frontmatter.date}</Date>
        </Header>
        <MDXRenderer>{body}</MDXRenderer>
      </Article>

      <nav>
        <NavigationList>
          <li>
            {previous && (
              <Link
                to={previous.fields.slug}
                rel="prev"
                aria-label={`View ${previous.frontmatter.title} page`}
              >
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                to={next.fields.slug}
                rel="next"
                aria-label={`View ${next.frontmatter.title} page`}
              >
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </NavigationList>
      </nav>
    </Container>
  );
};

export default Blog;

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        title
        cover {
          childImageSharp {
            fixed(traceSVG: { color: "#639" }) {
              tracedSVG
            }
          }
        }
      }
    }
  }
`;
