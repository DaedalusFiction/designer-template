import { Box, Container, Grid, Typography } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import Gallery from "../../components/gallery/Gallery";
import PageLayout from "../../components/layout/PageLayout";
import { galleryConfigs } from "../../siteInfo";
import SizedImage from "../../components/general/SizedImage";
import Link from "next/link";
import lightTheme from "../../styles/themes/lightTheme";

const Projects = () => {
  return (
    <PageLayout name="OUR PROJECTS">
      <Grid className="section" container spacing={4}>
        {galleryConfigs.map((galleryConfig, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Link href={galleryConfig.href}>
                <Box sx={{ position: "relative" }}>
                  <Box
                    className="link"
                    sx={{
                      transition: "300ms",
                      "&:hover": { filter: "brightness(60%)" },
                    }}
                  >
                    <SizedImage
                      image={galleryConfig.image}
                      height="25rem"
                      width="100%"
                    />
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      position: "absolute",
                      textTransform: "uppercase",
                      fontWeight: "600",
                      top: "50%",
                      left: "0",
                      textAlign: "center",
                      width: "100%",
                      color: lightTheme.palette.custom.light,
                    }}
                  >
                    {galleryConfig.category}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </PageLayout>
  );
};

export default Projects;
