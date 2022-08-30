import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Mosaic from "../Mosaic";

const images = [
    { url: "/images/hero.jpg", alt: "alt hero text" },
    { url: "/images/hero.jpg", alt: "alt hero text" },
    { url: "/images/hero.jpg", alt: "alt hero text" },
    { url: "/images/hero.jpg", alt: "alt hero text" },
];

const Showcase = () => {
    return (
        <Container maxWidth="xl">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "8rem 0",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: "center",
                        maxWidth: "35ch",
                    }}
                >
                    CARVE YOUR NICHE
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: "center",
                        maxWidth: "35ch",
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet quibusdam consequatur vero autem dolores voluptas sit
                    excepturi aperiam, doloribus nobis!
                </Typography>
            </Box>
            <Grid container spacing={6}>
                <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            maxWidth: "45ch",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            height: "100%",
                        }}
                    >
                        <Typography variant="h3" sx={{ textAlign: "end" }}>
                            Mosaic Layout One
                        </Typography>
                        <br />
                        <Typography sx={{ textAlign: "end" }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Facere, iusto minus corrupti vel aut a est
                            eaque beatae ipsam possimus in porro, tempore
                            asperiores. Quod!
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Mosaic images={images} variation={1} />
                </Grid>
                <Grid item xs={12} md={7}>
                    <Mosaic images={images} variation={2} />
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            maxWidth: "45ch",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            height: "100%",
                        }}
                    >
                        <Typography variant="h3" sx={{ textAlign: "start" }}>
                            Mosaic Layout Two
                        </Typography>
                        <br />
                        <Typography sx={{ textAlign: "start" }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Facere, iusto minus corrupti vel aut a est
                            eaque beatae ipsam possimus in porro, tempore
                            asperiores. Quod!
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            maxWidth: "45ch",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            height: "100%",
                        }}
                    >
                        <Typography variant="h3" sx={{ textAlign: "end" }}>
                            Mosaic Layout Three
                        </Typography>
                        <br />
                        <Typography sx={{ textAlign: "end" }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Facere, iusto minus corrupti vel aut a est
                            eaque beatae ipsam possimus in porro, tempore
                            asperiores. Quod!
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Mosaic images={images} variation={3} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Showcase;
