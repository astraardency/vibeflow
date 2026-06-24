
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url }) {
  const siteName = "Vibeflow";
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url || "https://astravibeflow.dpdns.org"} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
