/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        emotion: true, // Enables Emotion processing for SSR styles
    },
};

export default nextConfig;
