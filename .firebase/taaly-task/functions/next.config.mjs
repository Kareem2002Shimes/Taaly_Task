// next.config.mjs
var nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  }
};
var next_config_default = nextConfig;
export {
  next_config_default as default
};
