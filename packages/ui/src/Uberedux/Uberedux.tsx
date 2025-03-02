"use client";
import React, { ReactNode } from "react";

export default function Uberedux({ children }: { 
  children?: ReactNode | null,
}) {

  return (
    <>
      {/* <h2>Uberedux</h2> */}
      {children}
    </>
  );
}
