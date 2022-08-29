import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Mosaic from "../Mosaic";

const Showcase = () => {
    return (
        <Container maxWidth="xl">
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: "center",
                        padding: "1.5em 0",
                        maxWidth: "35ch",
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet quibusdam consequatur vero autem dolores voluptas sit
                    excepturi aperiam, doloribus nobis!
                </Typography>
            </Box>
            <Grid container spacing={4}>
                <Grid item xs={12} md={5}>
                    <Typography variant="h3">Turn over a new leaf</Typography>
                    <br />
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Facere, iusto minus corrupti vel aut a est eaque
                        beatae ipsam possimus in porro, tempore asperiores.
                        Quod!
                    </Typography>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Mosaic variation={1} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Showcase;
