"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardActionArea,
} from "@mui/material";
import Icon from "../Icon/Icon";

export default function ItemCard({ 
  icon = "home" ,
  title = "Title",
  subheader = "Subheader",
  slug = "/"
}: { 
  title: string,
  slug: string,
  icon?: string,
  subheader?: string,
  imageSrc?: string;
}) {

  const onClick = () => {
    window.open(slug, "_self");
    return null;
  };

  return (
        <Card>
          <CardActionArea
            onClick={onClick}
          >
            <CardHeader 
              title={title}
              subheader={subheader}
              avatar={<Icon icon={icon} />}
            />
          </CardActionArea>
        </Card>
  );
};

/*
<a 
  href="https://github.com/javascript-pro/dub-dub-dub"
  className={`${styles.button} ${styles.secondary}`}
  target="_blank"
  rel="noopener noreferrer">
  Get the code
</a>
*/