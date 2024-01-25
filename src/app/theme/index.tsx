"use client";

import type {ReactNode} from "react";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {CacheProvider} from "@emotion/react";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import theme from './theme'

function createEmotionCache() {
    return createCache({ key: 'css' });
}

const Theme = ({ children }: { children: ReactNode }) => {
    const cache = createEmotionCache();
    return (
        <AppRouterCacheProvider>
            <CacheProvider value={cache}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </CacheProvider>
        </AppRouterCacheProvider>
    )
}

export default Theme;