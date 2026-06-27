import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact.php",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/livraison.html",
        destination: "/livraison",
        permanent: true,
      },
      {
        source: "/livraison.php",
        destination: "/livraison",
        permanent: true,
      },
      {
        source: "/produits.html",
        destination: "/produits",
        permanent: true,
      },
      {
        source: "/produits.php",
        destination: "/produits",
        permanent: true,
      },
      {
        source: "/mentions-legales.html",
        destination: "/mentions-legales",
        permanent: true,
      },
      {
        source: "/mentions-legales.php",
        destination: "/mentions-legales",
        permanent: true,
      },
      {
        source: "/temoignages.html",
        destination: "/temoignages",
        permanent: true,
      },
      {
        source: "/temoignages.php",
        destination: "/temoignages",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
