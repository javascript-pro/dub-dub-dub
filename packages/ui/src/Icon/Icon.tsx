"use client";
import * as React from "react";
import { SvgIconProps } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ErrorIcon from "@mui/icons-material/Error";

export interface IconProps {
  icon: IconNames;
  color?: SvgIconProps["color"];
}

export type IconNames =
  | "home"
  | "error";

export default function Icon({ 
  icon = "home",
  color = "inherit",
}: { 
  icon: string,
  color?: string,
}) {
  let c: SvgIconProps["color"] = "inherit";
  if (color) c = color as SvgIconProps["color"];
  let iconFragment: React.ReactNode = <React.Fragment />;

  switch (icon) {
    case "home":
      iconFragment = <HomeIcon color={c} />;
      break;
    default:
      iconFragment = <ErrorIcon color={"error"} />;
  }
  return iconFragment;
};

