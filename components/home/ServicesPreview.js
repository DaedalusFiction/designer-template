import { Box, Container, Grid } from "@mui/material";
import React from "react";
import ServicesPreviewItem from "./ServicesPreviewItem";

const ServicesPreview = ({ servicesPreviewContent }) => {
    return (
        <Box className="section">
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {servicesPreviewContent.map((service, index) => {
                        return (
                            <Grid key={index} item xs={12} md={4}>
                                <ServicesPreviewItem service={service} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default ServicesPreview;
