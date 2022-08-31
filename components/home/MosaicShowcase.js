import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Mosaic from "../Mosaic";

const images = [
    { url: "/images/hero.jpg", alt: "alt hero text" },
    { url: "/images/hero.jpg", alt: "alt hero text" },
    { url: "/images/hero.jpg", alt: "alt hero text" },
    { url: "/images/hero.jpg", alt: "alt hero text" },
    { url: "/images/hero.jpg", alt: "alt hero text" },
    { url: "/images/hero.jpg", alt: "alt hero text" },
];

const MosaicShowcase = () => {
    return (
        <Box sx={{ padding: "6rem 0" }}>
            <Container maxWidth="xl">
                <Grid container spacing={6}>
                    <Grid item xs={12} lg={5}>
                        <Box
                            className="flex-1"
                            sx={{ justifyContent: "center" }}
                        >
                            <Box
                                sx={{
                                    maxWidth: "45ch",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "middle",
                                    height: "100%",
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        textAlign: { xs: "center", lg: "end" },
                                    }}
                                >
                                    Mosaic Layout One
                                </Typography>
                                <br />
                                <Typography
                                    sx={{
                                        textAlign: { xs: "center", lg: "end" },
                                    }}
                                >
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Facere, iusto minus
                                    corrupti vel aut a est eaque beatae ipsam
                                    possimus in porro, tempore asperiores. Quod!
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={7}>
                        <Mosaic images={images} variation={1} />
                    </Grid>
                    <Grid item xs={12} lg={7}>
                        <Mosaic images={images} variation={2} />
                    </Grid>
                    <Grid item xs={12} lg={5}>
                        <Box
                            className="flex-1"
                            sx={{ justifyContent: "center" }}
                        >
                            <Box
                                sx={{
                                    maxWidth: "45ch",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "middle",
                                    height: "100%",
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        textAlign: {
                                            xs: "center",
                                            lg: "start",
                                        },
                                    }}
                                >
                                    Mosaic Layout Two
                                </Typography>
                                <br />
                                <Typography
                                    sx={{
                                        textAlign: {
                                            xs: "center",
                                            lg: "start",
                                        },
                                    }}
                                >
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Facere, iusto minus
                                    corrupti vel aut a est eaque beatae ipsam
                                    possimus in porro, tempore asperiores. Quod!
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={5}>
                        <Box
                            className="flex-1"
                            sx={{ justifyContent: "center" }}
                        >
                            <Box
                                sx={{
                                    maxWidth: "45ch",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "middle",
                                    height: "100%",
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        textAlign: { xs: "center", lg: "end" },
                                    }}
                                >
                                    Mosaic Layout Three
                                </Typography>
                                <br />
                                <Typography
                                    sx={{
                                        textAlign: { xs: "center", lg: "end" },
                                    }}
                                >
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Facere, iusto minus
                                    corrupti vel aut a est eaque beatae ipsam
                                    possimus in porro, tempore asperiores. Quod!
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={7}>
                        <Mosaic images={images} variation={3} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default MosaicShowcase;
