"use client";
import React from "react";
import {
  Card,
  CardHeader,
  // CardContent,
  CardMedia,
} from "@mui/material";
import Icon from "../Icon/Icon";

export default function ItemCard({ 
  icon = "item" ,
  title = "ItemCard Title",
  subheader = "ItemCard Subheader",
  imageSrc = "/jpg/opengraph.jpg",
}: { 
  icon: string,
  title: string,
  subheader: string,
  imageSrc: string;
}) {

  return (
        <Card>
          <CardHeader 
            title={title}
            subheader={subheader}
            avatar={<Icon icon={icon} />}
            
          />
          <CardMedia
            component={"img"}
            height={225}
            src={imageSrc}
            alt={`${title} ${subheader}`}
          />
        </Card>
  );
};
