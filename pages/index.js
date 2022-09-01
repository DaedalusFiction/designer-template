import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import BlockPhoto from "../components/BlockPhoto";
import BlockText from "../components/BlockText";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import Meta from "../components/Meta";
import MosaicSection from "../components/MosaicSection";

import {
    siteName,
    blockTextOne,
    blockTextTwo,
    blockTextThree,
    blockPhotoContentOne,
    mosaicSectionContentOne,
    mosaicSectionContentTwo,
    mosaicSectionContentThree,
    servicesPreviewContent,
} from "../siteInfo";

export default function Home() {
    return (
        <div>
            <Meta siteName={siteName} />
            <Hero siteName={siteName} />
            <BlockText text={blockTextOne} />
            <MosaicSection
                mosaicSectionContent={mosaicSectionContentOne}
                variation={1}
            />
            <BlockText text={blockTextTwo} />
            <BlockPhoto blockPhotoContent={blockPhotoContentOne} reverse />
            <ServicesPreview servicesPreviewContent={servicesPreviewContent} />
            <BlockText text={blockTextThree} />
            <MosaicSection
                reverse
                mosaicSectionContent={mosaicSectionContentTwo}
                variation={2}
            />
            <MosaicSection
                mosaicSectionContent={mosaicSectionContentThree}
                variation={3}
            />
        </div>
    );
}
