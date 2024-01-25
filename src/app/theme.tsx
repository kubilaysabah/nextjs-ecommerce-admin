"use client"

import { type ReactNode } from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { red } from '@mui/material/colors';
import createCache from '@emotion/cache';

function createEmotionCache() {
    return createCache({ key: 'css' });
}

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
});

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