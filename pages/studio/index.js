import { SpatialAudio } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import MosaicImage from "../../components/MosaicImage";
import { leadProfile, secondaryProfiles } from "../../siteInfo";

const index = () => {
    return (
        <Box className="section">
            <Container maxWidth="lg">
                <Typography variant="h1">Studio</Typography>
                <br />
                <br />
                <Grid container spacing={4}>
                    <Grid item xs={12} md={5}>
                        <MosaicImage
                            height="100%"
                            width="100%"
                            image={leadProfile.image}
                        />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography variant="h3">{leadProfile.name}</Typography>
                        <br />
                        <Typography sx={{ whiteSpace: "pre-wrap" }}>
                            {leadProfile.description}
                        </Typography>
                    </Grid>
                    {secondaryProfiles.map((profile, index) => {
                        return (
                            <Grid item key={index} xs={12} md={4}>
                                <Box sx={{ marginTop: "4rem" }}>
                                    <MosaicImage
                                        image={profile.image}
                                        height="20rem"
                                        width="100%"
                                    />
                                    <br />
                                    <Typography variant="h4">
                                        {profile.name}
                                    </Typography>
                                    <br />
                                    <Typography sx={{ whiteSpace: "pre-wrap" }}>
                                        {profile.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default index;
