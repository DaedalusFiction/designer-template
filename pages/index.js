import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Hero from "../components/home/Hero";

import Meta from "../components/Meta";

const artist = "DESIGNER TEMPLATE";

export default function Home() {
    return (
        <div>
            <Meta title={artist} />
            <Hero />
        </div>
    );
}
