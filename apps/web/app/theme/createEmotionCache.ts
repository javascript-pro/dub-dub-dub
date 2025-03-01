import createCache from "@emotion/cache";

// Ensures styles are consistent between SSR & CSR
const createEmotionCache = () => {
  return createCache({ key: "mui", prepend: true });
};

export default createEmotionCache;
