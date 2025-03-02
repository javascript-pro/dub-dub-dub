"use client";
import React, { ReactNode } from "react";
import {
  Container,
  Box,
} from "@mui/material";
import Grid from '@mui/material/Grid2';
// import Icon from "../Icon/Icon";

export default function Appshell({ 
  children = "home",
}: { 
  children?: ReactNode
}) {

  return <Container>
          {children}
        </Container>
};