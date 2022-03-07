module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  },
  async redirects() {
    return [
      {
        source: "/orders",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
