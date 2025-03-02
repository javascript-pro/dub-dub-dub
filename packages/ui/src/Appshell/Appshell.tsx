"use client";
import React from "react";
import config from "../../../../apps/web/config.json";
import {
  BottomNavigationAction,
  Box,
  CssBaseline,
  List,
  ListItemButton,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Paper,
  BottomNavigation,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import Icon from "../Icon/Icon";

export interface IChapter {
  icon?: string;
  title?: string;
  subheader?: string;
  avatar?: string;
  slug?: string;
  outline?: string;
}

const chapters: readonly IChapter[] = [
    {
        "icon": "doc",
        "avatar": "/svg/guest.svg",
        "title": "Chapter 1.",
        "subheader": "Introduction",
        "slug": "/introduction",
        "outline": "What is a monorepo, and why use one? Overview of the Goldlabel software stack Benefits of SSR in Next.js for PWAs Why a common UI package is essential"
    },
    {
      "avatar": "/svg/guest.svg",
        "icon": "right",
        "title": "Chapter 2.",
        "subheader": "Setting Up the Monorepo",
        "slug": "/setting-up-the-monorepo",
        "outline": "Installing a Next.js-based monorepo with Turborepo Structuring the /apps and /packages folders Adding dependencies and configurations"
    },
    {
      "avatar": "/svg/guest.svg",
      "icon": "right",
        "title": "Chapter 3.",
        "subheader": "Implementing Server-Side Rendering (SSR)",
        "slug": "/implementing-ssr",
        "outline": "How SSR works in Next.js Configuring SSR for performance and SEO Handling data fetching with getServerSideProps"
    },
    {
        "icon": "right",
        "avatar": "/svg/guest.svg",
        "title": "Chapter 4.",
        "subheader": "Creating a PWA with Next.js",
        "slug": "/creating-a-pwa",
        "outline": "PWA fundamentals and why they matter Configuring Next.js for PWA support Service workers and caching strategies"
    },
    {
        "icon": "right",
        "avatar": "/svg/guest.svg",
        "title": "Chapter 5.",
        "subheader": "Building a Common UI Package",
        "slug": "/building-a-common-ui-package",
        "outline": "Why a shared UI package is valuable Setting up a /packages/ui library Using MUI to create reusable components Publishing the package for internal use"
    },
    {
        "icon": "right",
        "avatar": "/svg/guest.svg",
        "title": "Chapter 6.",
        "subheader": "Integrating the Common UI Across Apps",
        "slug": "/integrating-the-common-ui",
        "outline": "Consuming the UI package in different apps Theming and customization with MUI Handling versioning and updates"
    },
    {
        "icon": "right",
        "avatar": "/svg/guest.svg",
        "title": "Chapter 7.",
        "subheader": "Deployment and Optimization",
        "slug": "/deployment-and-optimization",
        "outline": "Deploying the monorepo with Vercel Optimizing SSR performance for PWAs Monitoring and scaling apps"
    },
    {
        "icon": "right",
        "avatar": "/svg/guest.svg",
        "title": "Chapter 8.",
        "subheader": "Advanced Topics & Future Enhancements",
        "slug": "/advanced-topics",
        "outline": "Dynamic routing and API integrations Using Next.js middleware for security and authentication Expanding the monorepo with additional services"
    }
];


export default function Appshell() {

  // console.log ("config", config)
  const {title} = config;

  const onChapterClick = (slug: string) => {
    // console.log("slug", slug);
    window.open(slug, "_self");
  };

  return <>
          <CssBaseline />
          <Box sx={{ py: 11 }}>
            
            <AppBar 
              position="static" 
              color="default"
              sx={{ 
                background: "white",
                borderRadius: 0,
                boxShadow: 0,
                position: 'fixed', 
                top: 0, 
                left: 0, 
                right: 0,
                zIndex: 100,
              }}>

              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <Icon icon="menu" />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                 {title}
                </Typography>

                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <Icon icon="users" />
                </IconButton>
              </Toolbar>
            </AppBar>
            <List>
              {chapters.map(({ 
                avatar, 
                title, 
                subheader,
                slug,
              }, i: number) => {
                
                return <ListItemButton 
                        key={`chapter_${i}`}
                        onClick={() => {
                          onChapterClick(slug as string);
                        }}
                      >
                        <ListItemAvatar>
                          <Avatar alt={title} src={avatar} />
                        </ListItemAvatar>
                        <ListItemText 
                          primary={title} 
                          secondary={subheader} 
                        />
                      </ListItemButton>
              })}
            </List>
            <Paper sx={{ 
              position: 'fixed', 
              borderRadius: 0,
              boxShadow: 0,
              bottom: 0, 
              left: 0, 
              right: 0,
              zIndex: 120,
            }} elevation={3}>
              <BottomNavigation
                showLabels
                value={0}
                onChange={(
                  // event, 
                  // newValue,
                ) => {
                  // setValue(newValue);
                }}>
                <BottomNavigationAction label="Back" 
                  icon={<Icon icon="left" />} />

                <BottomNavigationAction label="New" 
                  icon={<Icon icon="add"/>} />

                <BottomNavigationAction label="Forward" 
                  icon={<Icon icon="right"/>} />

              </BottomNavigation>
            </Paper>
          </Box>
        </>
};
