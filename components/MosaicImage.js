import { Box } from "@mui/system";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const GalleryImage = ({ image, height, width }) => {
    return (
        <Box
            sx={{
                position: "relative",
                transition: "300ms",
                // "&:hover": { filter: "brightness(60%)" },
                width: width,
                height: height,
            }}
        >
            <Image
                src={image.url}
                blurDataURL={image.url}
                placeholder="blur"
                //has to be unoptimized to work with firebase storage, apparently
                // unoptimized
                // width="100"
                // height="100"
                layout="fill"
                objectFit="cover"
                alt={image.alt}
            />
        </Box>
    );
};

export default GalleryImage;
