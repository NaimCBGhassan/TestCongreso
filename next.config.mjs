/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com", "st3.depositphotos.com"],
  },
};

if (process.env.NODE_ENV === "production") {
  nextConfig.output = "export";
}

export default nextConfig;
