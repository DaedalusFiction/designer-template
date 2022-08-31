import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const BlockText = ({ text }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                padding: "6rem 0",
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    textAlign: "center",
                    maxWidth: "35ch",
                }}
            >
                {text.title}
            </Typography>
            <Typography
                variant="h3"
                sx={{
                    textAlign: "center",
                    maxWidth: "35ch",
                }}
            >
                {text.body}
            </Typography>
        </Box>
    );
};

export default BlockText;
