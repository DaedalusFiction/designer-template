import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import BlockText from "../components/BlockText";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import MosaicShowcase from "../components/home/MosaicShowcase";
import Meta from "../components/Meta";
import MosaicSection from "../components/MosaicSection";

const siteName = "DESIGNER TEMPLATE";
const pages = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
];

const textOne = {
    title: "CARVE YOUR NICHE",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita veniam. Magni explicabo dignissimos obcaecati incidunt repudiandae soluta inventore temporibus!",
};

const mosaicSectionContentOne = {
    title: "Section Title",
    content:
        "This is the section content. Here you can describe whatever you like about your service and the button below can link to any page in this website or any external site.",
    button: {
        text: "learn more",
        href: "/about",
        variant: "contained",
    },
    images: [
        { url: "/images/hero.jpg", alt: "alt hero text" },
        { url: "/images/hero.jpg", alt: "alt hero text" },
        { url: "/images/hero.jpg", alt: "alt hero text" },
        { url: "/images/hero.jpg", alt: "alt hero text" },
        { url: "/images/hero.jpg", alt: "alt hero text" },
        { url: "/images/hero.jpg", alt: "alt hero text" },
    ],
};

export default function Home() {
    return (
        <div>
            <Meta siteName={siteName} />
            <Hero siteName={siteName} />
            <BlockText text={textOne} />
            <ServicesPreview />
            <MosaicSection
                mosaicSectionContent={mosaicSectionContentOne}
                variation={1}
            />
            <MosaicSection
                reverse
                mosaicSectionContent={mosaicSectionContentOne}
                variation={2}
            />
            <MosaicSection
                mosaicSectionContent={mosaicSectionContentOne}
                variation={3}
            />
        </div>
    );
}
