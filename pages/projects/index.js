import { Box, Container, Typography } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import Gallery from "../../components/gallery/Gallery";
import { db } from "../../firebase";

const Projects = ({ images }) => {
    return (
        <Container maxWidth="xl">
            <Box>
                <Typography variant="h1" sx={{ margin: ".5rem 0" }}>
                    Projects
                </Typography>
                <Typography sx={{ paddingBottom: "2em" }}>
                    UNIQUELY CRAFTED LIVING SPACES
                </Typography>
            </Box>
            <br />
            <Gallery images={images} category="artwork" />
        </Container>
    );
};

export const getStaticProps = async () => {
    const docsSnap = await getDocs(collection(db, "gallery"));
    let images = [];
    docsSnap.docs.forEach((doc, index) => {
        images = [...images, doc.data()];
    });

    return {
        props: {
            images,
        },
    };
};

export default Projects;
