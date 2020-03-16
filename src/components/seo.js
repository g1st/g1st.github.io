import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import defaultOpenGraphImage from "../../static/gatsby-astronaut.png";

const SEO = ({ description, lang, meta, title, image, slug, type }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            twitter
            image
            siteUrl
            siteLanguage
            siteLocale
            twitterUsername
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const { siteUrl } = site.siteMetadata;
  const ogImageUrl = siteUrl + (image || defaultOpenGraphImage);
  const url = siteUrl + slug;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[{ rel: `canonical`, href: url }]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `image`,
          content: ogImageUrl,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:image`,
          content: ogImageUrl,
        },
        {
          property: `og:type`,
          content: type || `website`,
        },
        {
          property: `og:inLanguage`,
          content: site.siteMetadata.siteLanguage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: ogImageUrl,
        },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  slug: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  slug: PropTypes.string,
  type: PropTypes.string,
};

export default SEO;
