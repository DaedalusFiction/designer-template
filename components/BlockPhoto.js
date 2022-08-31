import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import lightTheme from "../styles/themes/lightTheme";
import MosaicImage from "./MosaicImage";

const BlockPhoto = ({ blockPhotoContent, reversed }) => {
    return (
        <Box sx={{ backgroundColor: lightTheme.palette.background.accent }}>
            <Grid container wrap={reversed ? "wrap-reverse" : "wrap"}>
                <Grid item xs={12} md={6} order={reversed ? 1 : 0}>
                    <MosaicImage
                        image={blockPhotoContent.image}
                        height="100%"
                        width="100%"
                    />
                </Grid>
                <Grid item xs={12} md={6} order={reversed ? 0 : 1}>
                    <Box
                        className="flex-1"
                        sx={{
                            flexDirection: "column",
                            justifyContent: "center",
                            padding: "16rem 0",
                            alignItems: "center",
                        }}
                    >
                        <Box>
                            <Typography>{blockPhotoContent.title}</Typography>
                            <br />
                            <Typography variant="h2">
                                {blockPhotoContent.content}
                            </Typography>
                            <br />
                            <Box>
                                <Link href={blockPhotoContent.button.href}>
                                    <Button
                                        variant={
                                            blockPhotoContent.button.variant
                                        }
                                        size="large"
                                    >
                                        {blockPhotoContent.button.text}
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BlockPhoto;
