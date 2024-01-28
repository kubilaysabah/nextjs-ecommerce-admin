"use client";

import { styled } from '@mui/material/styles'
import { Box, type BoxProps } from '@mui/material'

export const Container = styled(Box)<BoxProps>(() => ({
    minHeight: '100vh',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr, 1fr'
}))

export const Banner = styled(Box)<BoxProps>(() => ({
}))

export const FormContainer = styled(Box)<BoxProps>(() => ({

}))