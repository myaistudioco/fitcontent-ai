import Head from "next/head";

export default function SEOHead({ 
  title = "FitContent AI — AI Content Repurposer for Fitness Coaches",
  description = "Turn one piece of fitness content into posts for Instagram, TikTok, Twitter, LinkedIn, Email and YouTube in seconds. Powered by AI. Built for fitness coaches.",
  url = "https://fitcontentai.com",
  image = "https://fitcontentai.com/og-image.png"
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="fitness content creator, AI content repurposer, fitness coach social media, instagram captions fitness, tiktok fitness content, fitness marketing tool, AI fitness tool" />
      <meta name="author" content="FitContent AI" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="FitContent AI" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "FitContent AI",
            "applicationCategory": "BusinessApplication",
            "description": description,
            "url": "https://fitcontentai.com",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "operatingSystem": "Web Browser"
          })
        }}
      />
    </Head>
  );
}
