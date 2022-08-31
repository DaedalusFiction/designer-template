import { Container, Grid } from "@mui/material";
import React from "react";
import ServicesPreviewItem from "./ServicesPreviewItem";

const services = [
    {
        title: "Service One",
        price: "$200",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/hero.jpg", alt: "alt hero text" },
        button: { text: "Book Now!", href: "/" },
    },
    {
        title: "Service Two",
        price: "$400-800",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/hero.jpg", alt: "alt hero text" },
        button: { text: "Book Now!", href: "/" },
    },
    {
        title: "Service Three",
        price: "Custom",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/hero.jpg", alt: "alt hero text" },
        button: { text: "Book Now!", href: "/" },
    },
];

const ServicesPreview = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                {services.map((service, index) => {
                    return (
                        <Grid key={index} item xs={12} md={4}>
                            <ServicesPreviewItem service={service} />
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
};

export default ServicesPreview;
