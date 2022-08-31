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
    servicesPreviewContent,
    blockTextOne,
    mosaicSectionContentOne,
    blockPhotoContentOne,
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
            <BlockText text={blockTextOne} />
            <ServicesPreview servicesPreviewContent={servicesPreviewContent} />
            <BlockPhoto blockPhotoContent={blockPhotoContentOne} />
            <MosaicSection
                reverse
                mosaicSectionContent={mosaicSectionContentOne}
                variation={2}
            />
            <BlockText text={blockTextOne} />
            <MosaicSection
                mosaicSectionContent={mosaicSectionContentOne}
                variation={3}
            />
        </div>
    );
}
