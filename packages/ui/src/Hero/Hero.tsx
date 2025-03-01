"use client";
import React from "react";
import {
  Card,
  CardHeader,
} from "@mui/material";
import Icon from "../Icon/Icon";

export default function Hero({ 
  icon = "home" ,
  title = "Hero Title"
}: { 
  icon: string,
  title: string,
}) {

  return (
        <Card>
          <CardHeader 
            title={title}
            avatar={<Icon icon={icon} />}
          />
          
        </Card>
  );
};

