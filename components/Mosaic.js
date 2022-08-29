import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const variation1 = (images) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
                <Box>images</Box>
                image
            </Grid>
        </Grid>
    );
};
const variation2 = (images) => {
    return <div>Mosaic2</div>;
};
const variation3 = (images) => {
    return <div>Mosaic3</div>;
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
