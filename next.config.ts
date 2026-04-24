import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/usluge/dubinsko-pranje-tepisa",
        destination: "/usluge/dubinsko-pranje-namjestaja-i-madraca",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
