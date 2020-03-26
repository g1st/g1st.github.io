import { graphql } from "gatsby";

export const mobileFrame = graphql`
  fragment mobileFrame on File {
    childImageSharp {
      fluid(maxWidth: 325, traceSVG: { color: "#639" }) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`;
