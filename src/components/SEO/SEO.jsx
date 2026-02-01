import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'ThermalStar Material Suggestor',
  description = 'Discover the perfect construction materials for your project. Find durable, efficient, and cost-effective building materials tailored to your requirements.',
  keywords = 'construction materials, building materials, material suggestor, thermal materials',
  image = '/logo512.png',
  url = 'https://thermalstar-materialsuggestor.netlify.app/',
  type = 'website'
}) => {
  const fullTitle = title === 'ThermalStar Material Suggestor' 
    ? title + ' | Find the Best Construction Materials'
    : title + ' | ThermalStar Material Suggestor';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
