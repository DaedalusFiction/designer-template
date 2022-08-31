import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import homeStyles from "../../styles/Home.module.css";
import lightTheme from "../../styles/themes/lightTheme";
import { pages, siteName } from "../../siteInfo";

const heroImage = "/images/hero.jpg";

const Hero = () => {
    return (
        <Box
            className={homeStyles.hero}
            sx={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)),
  url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 5%",
                marginBottom: "3rem",
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        justifyContent: "space-between",
                        padding: ".5em 0",
                        display: { xs: "none", md: "flex" },
                    }}
                >
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                            gap: "1em",
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="p"
                            sx={{ color: lightTheme.palette.custom.light }}
                        >
                            <Link href="/about">{siteName}</Link>
                        </Typography>
                        {pages.map((page) => {
                            return (
                                <Typography
                                    key={page.name}
                                    variant="h5"
                                    component="p"
                                    className="nav-link"
                                    sx={{
                                        color: lightTheme.palette.custom
                                            .lightMuted,
                                        "&:hover": {
                                            color: lightTheme.palette.custom
                                                .light,
                                        },
                                    }}
                                >
                                    <Link href={page.href}>{page.name}</Link>
                                </Typography>
                            );
                        })}
                    </Box>
                    <Button variant="outlined">Get Started</Button>
                </Box>
            </Container>
            <Container maxWidth="lg">
                <Box sx={{ padding: "30vh 0" }}>
                    <Typography
                        variant="h1"
                        sx={{
                            marginBottom: ".25em",
                            color: lightTheme.palette.custom.light,
                        }}
                    >
                        {siteName}
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{ color: lightTheme.palette.custom.lightMuted }}
                    >
                        Make the most of your living space
                    </Typography>
                    <Box sx={{ display: "flex", gap: ".5em", margin: "1em 0" }}>
                        <Button variant="contained">Learn More</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
