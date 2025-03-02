"use client";

import * as React from "react";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";

// Create a cache for Emotion styles
const emotionCache = createEmotionCache();
const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(emotionCache);

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => {
    if (typeof children !== "string") {
      return null; // Ensure we only pass valid HTML strings
    }

    const chunks = extractCriticalToChunks(children);
    const styles = constructStyleTagsFromChunks(chunks);

    return <style dangerouslySetInnerHTML={{ __html: styles }} />;
  });

  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
}
