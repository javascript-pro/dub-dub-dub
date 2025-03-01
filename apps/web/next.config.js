/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    },
    reactStrictMode: true,
    compiler: {
        emotion: true, // Ensures Emotion processes styles on SSR
    },
};

export default nextConfig;
