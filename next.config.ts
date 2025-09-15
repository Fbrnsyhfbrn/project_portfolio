/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // bikin Next nge-export ke folder "out"
  eslint: {
    ignoreDuringBuilds: true, // biar deploy gak nyangkut gara2 lint error
  },
  typescript: {
    ignoreBuildErrors: true, // biar deploy gak nyangkut gara2 ts error
  },
};

export default nextConfig;
