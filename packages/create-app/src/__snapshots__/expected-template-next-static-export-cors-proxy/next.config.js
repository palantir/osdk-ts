/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  // Rewrites are used to proxy requests during local development only for CORS
  // and will warn when using this feature together with export.
  rewrites: () => [
    {
      source: "/:prefix(multipass|api)/:path*",
      destination: "https://example.palantirfoundry.com/:prefix/:path*",
    },
  ],
};

module.exports = nextConfig;
