import { Container } from "@mui/material";
import React from "react";
import { getStaticProps } from ".";
import Post from "../../components/Post";

const artImage = () => {
    return (
        <Container maxWidth="xl">
            <Post />
        </Container>
    );
};

export default artImage;
