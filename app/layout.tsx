import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trade istanbul hub — Premium Turkish B2B Export & Wholesale",
  description: "Managed B2B Hub. 15 product categories, 500+ verified Turkish manufacturers. Personal guarantee by Oleksandr Peters. Furniture, Apparel, Cosmetics, Auto Parts and more.",
  keywords: "Turkish wholesale, B2B export Turkey, furniture wholesale Istanbul, Turkish manufacturers, trade Istanbul",
  authors: [{ name: "Oleksandr Peters" }],
  creator: "Trade istanbul hub LLC",
  publisher: "Trade istanbul hub LLC",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://tradeistanbulhub.com",
    title: "Trade istanbul hub — Premium Turkish B2B Export",
    description: "15 product categories. 500+ verified manufacturers. Personal guarantee by Oleksandr Peters.",
    siteName: "Trade istanbul hub",
    images: [{ url: "https://tradeistanbulhub.com/founder.jpg", width: 1200, height: 630, alt: "Oleksandr Peters — Trade istanbul hub" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trade istanbul hub — Premium Turkish B2B Export",
    description: "15 product categories. 500+ verified manufacturers.",
    images: ["https://tradeistanbulhub.com/founder.jpg"],
  },
  alternates: {
    canonical: "https://tradeistanbulhub.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://tradeistanbulhub.com/#organization",
            "name": "Trade istanbul hub LLC",
            "url": "https://tradeistanbulhub.com",
            "logo": "https://tradeistanbulhub.com/logo.png",
            "founder": {
              "@type": "Person",
              "@id": "https://tradeistanbulhub.com/#founder",
              "name": "Oleksandr Peters",
              "jobTitle": "Founder & CEO",
              "url": "https://tradeistanbulhub.com/founder",
              "knowsAbout": [
                "Furniture","Apparel","Footwear","Fabrics","Cosmetics","Perfumes",
                "Home Textiles","Food & Beverage","Lighting","Building Materials",
                "Home Appliances","Cleaning & Hygiene","Auto Parts","Tableware","Jewelry",
                "Business Club","Business Tours","Medical Tourism","Tech Hub","Franchise Hub",
                "CryptoCharm Official","B2B Export & Wholesale"
              ]
            },
            "description": "Premium Turkish B2B Export & Wholesale. 15 product categories. 500+ verified manufacturers. Personal guarantee by Oleksandr Peters.",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Florida",
              "addressCountry": "US"
            },
            "areaServed": ["UK","IT","ES","FR","DE","PL","US","CA","MX","PA","CO","BR","AR","PE","CL","SA","AE","EG","ZA","NG","GH","KE","IN","KR","VN"],
            "sameAs": [
              "https://linkedin.com/company/trade-istanbul-hub",
              "https://instagram.com/tradeistanbulhub",
              "https://facebook.com/tradeistanbulhub",
              "https://youtube.com/@tradeistanbulhub"
            ]
          })
        }} />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#0A0A0A" }}>
        {children}
      </body>
    </html>
  );
}