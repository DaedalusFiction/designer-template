import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import lightTheme from "../../styles/themes/lightTheme";
import { pages, siteName, heroContent } from "../../siteInfo";

const heroImage = "/images/hero.jpg";

const Hero = () => {
    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)),
  url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 5%",
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
                    <Link href={heroContent.buttonOne.href}>
                        <Button variant={heroContent.buttonOne.variant}>
                            {heroContent.buttonOne.text}
                        </Button>
                    </Link>
                </Box>
            </Container>
            <Container maxWidth="lg">
                <Box sx={{ padding: "30vh 0" }}>
                    <Typography
                        variant="h1"
                        sx={{
                            marginBottom: ".25em",
                            color: lightTheme.palette.custom.light,
                            textAlign: { xs: "center", md: "left" },
                        }}
                    >
                        {siteName}
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: lightTheme.palette.custom.lightMuted,
                            textAlign: { xs: "center", md: "left" },
                        }}
                    >
                        Make the most of your living space
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            gap: ".5em",
                            margin: "1em 0",
                            justifyContent: { xs: "center", md: "left" },
                        }}
                    >
                        <Link href={heroContent.buttonTwo.href}>
                            <Button
                                size="large"
                                variant={heroContent.buttonTwo.variant}
                            >
                                {heroContent.buttonTwo.text}
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
