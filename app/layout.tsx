import type { Metadata, Viewport } from "next";
import "@fontsource/great-vibes/400.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "./globals.css";
import { ENDERECO, INSTAGRAM_URL, SITE_URL, TELEFONE_E164 } from "@/lib/contato";

const titulo = "Quitandas da Dila | Pão de Queijo e Biscoito de Queijo em Pompéu – MG";
const descricao =
  "Pão de queijo e biscoito de queijo artesanais em Pompéu (MG): congelados para pronta entrega todos os dias ou assados por encomenda. Bolos caseiros, tarecos e pudim. Encomende: (37) 99826-2611.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: titulo,
  description: descricao,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Quitandas da Dila",
    title: "Quitandas da Dila — Da cozinha da Dila para sua família.",
    description: descricao,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FBF1E6",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Bakery", "FoodEstablishment", "LocalBusiness"],
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Quitandas da Dila",
      alternateName: "Dila Quitandas Mineiras",
      slogan: "Da cozinha da Dila para sua família.",
      description: descricao,
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image.jpg`,
      logo: `${SITE_URL}/img/logo-480.webp`,
      telephone: TELEFONE_E164,
      priceRange: "$$",
      servesCuisine: "Mineira Tradicional",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Professora Pequenina, 361 – Bairro Cristos",
        addressLocality: "Pompéu",
        addressRegion: "MG",
        postalCode: "35640-000",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -19.2244,
        longitude: -45.0069,
      },
      areaServed: { "@type": "City", name: "Pompéu" },
      sameAs: [INSTAGRAM_URL],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cardápio",
        itemListElement: [
          "Pão de Queijo",
          "Biscoito de Queijo",
          "Bolo de Fubá",
          "Bolo de Fubá Cremoso",
          "Bolo de Trigo",
          "Bolo de Trigo com Queijo",
          "Tarecos",
          "Pudim de Leite Condensado",
        ].map((nome) => ({ "@type": "Offer", itemOffered: { "@type": "Product", name: nome } })),
      },
      hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ENDERECO)}`,
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          "name": "Onde fica a Quitandas da Dila em Pompéu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Quitandas da Dila fica na Rua Professora Pequenina, 361, no Bairro Cristos, em Pompéu, Minas Gerais.",
          },
        },
        {
          "@type": "Question",
          "name": "Como posso fazer uma encomenda na Quitandas da Dila?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As encomendas podem ser feitas por ligação ou WhatsApp pelo número (37) 99826-2611. Para atendimento mais ágil, prefira ligação.",
          },
        },
        {
          "@type": "Question",
          "name": "O pão de queijo congelado está disponível todos os dias?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim, temos pão de queijo e biscoito de queijo congelados para pronta entrega todos os dias, incluindo finais de semana e feriados.",
          },
        },
        {
          "@type": "Question",
          "name": "Como assar o pão de queijo congelado na Air Fryer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pré-aqueça a Air Fryer a 200°C por 10 minutos. Coloque os pães de queijo congelados sem amontoar e asse a 200°C por 15 a 18 minutos.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
