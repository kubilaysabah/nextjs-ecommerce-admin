"use client";

import type {ReactNode} from "react";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {CacheProvider} from "@emotion/react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import { SnackbarProvider } from 'notistack';

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
                    <SnackbarProvider maxSnack={3}>
                        {children}
                    </SnackbarProvider>
                </ThemeProvider>
            </CacheProvider>
        </AppRouterCacheProvider>
    )
}

export default Theme;