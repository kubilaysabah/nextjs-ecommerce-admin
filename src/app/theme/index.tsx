"use client";

import type {ReactNode} from "react";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {CacheProvider} from "@emotion/react";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";


const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            }
        }
    }
});

const Theme = ({ children }: { children: ReactNode }) => {
    const cache = createCache({ key: 'css' });
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