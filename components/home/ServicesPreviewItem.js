import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import MosaicImage from "../MosaicImage";

const ServicesPreviewItem = ({ service }) => {
    return (
        <Paper>
            <MosaicImage height="12rem" width="100%" image={service.image} />
            <Box sx={{ padding: "2rem 1rem" }}>
                <Typography
                    sx={{ textAlign: "center", fontWeight: "400" }}
                    variant="h3"
                >
                    {service.title}
                </Typography>
                <br />
                <Typography variant="h4" sx={{ textAlign: "center" }}>
                    {service.price}
                </Typography>
                <br />
                <Typography sx={{ textAlign: "center" }}>
                    {service.description}
                </Typography>
                <br />
                <Box className="flex-1" sx={{ justifyContent: "center" }}>
                    <Link href="/about">
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            // tabIndex={-1}
                        >
                            {service.button.text}
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Paper>
    );
};

export default ServicesPreviewItem;
