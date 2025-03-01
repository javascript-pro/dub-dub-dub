"use client";
import React from "react";

export default function Icon({ icon = "home" }: { 
  icon: string,
}) {

  return (
    <>
      Icon: 
      {icon}
    </>
  );
};

