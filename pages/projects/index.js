import { Box, Container, Grid, Typography } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import Gallery from "../../components/gallery/Gallery";
import { db } from "../../firebase";
import PageLayout from "../../components/layout/PageLayout";
import { galleryConfigs } from "../../siteInfo";
import MosaicImage from "../../components/MosaicImage";
import Link from "next/link";

const Projects = () => {
  return (
    <PageLayout name="OUR PROJECTS">
      <Grid className="section" container spacing={4}>
        {galleryConfigs.map((galleryConfig, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Link href={galleryConfig.href}>
                <Box>
                  <MosaicImage
                    image={galleryConfig.image}
                    height="25rem"
                    width="100%"
                  />
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
