"use client";
import React, { ReactNode } from "react";
import {
  Container,
} from "@mui/material";
// import Icon from "../Icon/Icon";

export default function Appshell({ 
  children = "home",
}: { 
  children: ReactNode
}) {

  return <Container maxWidth="lg" sx={{border: "1px solid red"}}>
          {children}
        </Container>
};
