import { Box, Container, Typography } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import Gallery from "../../components/gallery/Gallery";
import { db } from "../../firebase";
import PageLayout from "../../components/layout/PageLayout";

const Projects = ({ images }) => {
    return (
        <PageLayout name="OUR WORK">
            <Gallery images={images} category="artwork" />
        </PageLayout>
    );
};

export const getStaticProps = async () => {
    const docsSnap = await getDocs(collection(db, "projects"));
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
