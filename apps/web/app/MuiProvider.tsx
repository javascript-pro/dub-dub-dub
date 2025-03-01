"use client";

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./createEmotionCache";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

const clientSideEmotionCache = createEmotionCache();

export default function MuiProvider({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
