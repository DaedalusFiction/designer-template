import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Hero from "../components/home/Hero";
import Showcase from "../components/home/Showcase";

import Meta from "../components/Meta";

const artist = "DESIGNER TEMPLATE";

export default function Home() {
    return (
        <div>
            <Meta title={artist} />
            <Hero />
            <Showcase />
        </div>
    );
}
