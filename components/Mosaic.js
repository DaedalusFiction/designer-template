import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MosaicImage from "./MosaicImage";

const smallSquareSize = "12vw";

const variation1 = (images) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Box
                    className="flex-1"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end",
                    }}
                >
                    <Box className="flex-1" sx={{ justifyContent: "end" }}>
                        <MosaicImage
                            image={images[0]}
                            height="6rem"
                            width="6rem"
                        />
                        <MosaicImage
                            image={images[1]}
                            height="6rem"
                            width="6rem"
                        />
                    </Box>
                    <MosaicImage
                        image={images[2]}
                        height="20rem"
                        width="20rem"
                    />
                </Box>
            </Grid>
            <Grid item xs={12} md={3}>
                <MosaicImage image={images[3]} width="100%" height="100%" />
            </Grid>
            <Grid item xs={12} md={5}>
                <Box className="flex-1" sx={{ flexDirection: "column" }}>
                    <MosaicImage
                        image={images[3]}
                        width="100%"
                        height="10rem"
                    />
                    <MosaicImage
                        image={images[3]}
                        width="10rem"
                        height="16rem"
                    />
                </Box>
            </Grid>
        </Grid>
    );
};
const variation2 = (images) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
                <Box
                    className="flex-1"
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        // alignItems: "end",
                        height: "100%",
                    }}
                >
                    <MosaicImage
                        image={images[2]}
                        height="20rem"
                        width="20rem"
                    />
                </Box>
            </Grid>

            <Grid item xs={12} md={7}>
                <Box className="flex-1" sx={{ flexDirection: "column" }}>
                    <Box className="flex-1" sx={{ alignItems: "end" }}>
                        <MosaicImage
                            image={images[3]}
                            width="10rem"
                            height="16rem"
                        />
                        <MosaicImage
                            image={images[3]}
                            width="10rem"
                            height="10rem"
                        />
                    </Box>
                    <MosaicImage
                        image={images[3]}
                        width="100%"
                        height="10rem"
                    />
                </Box>
            </Grid>
        </Grid>
    );
};
const variation3 = (images) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
                <Box
                    className="flex-1"
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        flexDirection: "column",
                        alignItems: "end",
                        height: "100%",
                    }}
                >
                    <MosaicImage
                        image={images[2]}
                        height="10rem"
                        width="10rem"
                    />
                    <MosaicImage
                        image={images[2]}
                        height="10rem"
                        width="10rem"
                    />
                </Box>
            </Grid>

            <Grid item xs={12} md={6}>
                <MosaicImage image={images[3]} width="100%" height="26rem" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Box className="flex-1" sx={{ flexDirection: "column" }}>
                    <MosaicImage
                        image={images[3]}
                        width="10rem"
                        height="10rem"
                    />
                    <MosaicImage
                        image={images[3]}
                        width="10rem"
                        height="10rem"
                    />
                </Box>
            </Grid>
        </Grid>
    );
};
const Mosaic = ({ variation, images }) => {
    switch (variation) {
        case 1:
            return variation1(images);
        case 2:
            return variation2(images);
        case 3:
            return variation3(images);
        default:
            return <div>Remember to input a variation</div>;
    }
};

export default Mosaic;
