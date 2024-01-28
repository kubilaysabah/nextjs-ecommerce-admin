"use client";

import { alpha, styled } from '@mui/material/styles';
import { Unstable_Grid2 as Grid, TextField, type Grid2Props, type TextFieldProps } from '@mui/material'
import TextFieldPassword from '@/components/password-input'
import PasswordInputProps from "@/components/password-input/type";

export const Form = styled(Grid)<Grid2Props>(({ theme }) => ({
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    height: '100%'
}));

export const Input = styled(TextField)<TextFieldProps>(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

export const PasswordInput = styled(TextFieldPassword)<PasswordInputProps>(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));