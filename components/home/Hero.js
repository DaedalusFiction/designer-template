import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import homeStyles from "../../styles/Home.module.css";

const heroImage = "/images/hero.jpg";

const pages = [
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
];

const Hero = () => {
    return (
        <Box
            className={homeStyles.hero}
            sx={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)),
  url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 5%",
            }}
        >
            <Box
                className="flex-1 p-1"
                sx={{ justifyContent: "space-between" }}
            >
                <Box className="flex-1" sx={{ alignItems: "end" }}>
                    <Typography variant="h4" component="p">
                        <Link href="/about">Designer Portfolio</Link>
                    </Typography>
                    {pages.map((page) => {
                        return (
                            <Typography
                                key={page.name}
                                variant="h5"
                                component="p"
                            >
                                <Link href={page.href}>{page.name}</Link>
                            </Typography>
                        );
                    })}
                </Box>
                <Button variant="outlined">Get Started</Button>
            </Box>
            <Container maxWidth="lg">
                <Box sx={{ padding: "30vh 0" }}>
                    <Typography variant="h1">Designer Template</Typography>
                    <Typography variant="h5">
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
