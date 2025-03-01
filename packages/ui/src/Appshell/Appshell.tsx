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
  children: ReactNode
}) {

  return <Container>
          {children}
          <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid size={6}>
                <>1</>
              </Grid>
              <Grid size={6}>
                <>2</>
              </Grid>
              <Grid size={6}>
                <>3</>
              </Grid>
              <Grid size={6}>
                <>4</>
              </Grid>
            </Grid>
          </Box>
        </Container>
};


/*
{chapterList.map((item, i) => {
              const {icon, title, subheader, slug} = item;
              return <ItemCard 
                        icon={icon}
                        slug={slug}
                        title={title}
                        subheader={subheader}
                        key={`item_${i}`}
                      />
            })}
*/