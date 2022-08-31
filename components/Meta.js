import Head from "next/head";
import { useRouter } from "next/router";

const Meta = ({ artist }) => {
    const router = useRouter();
    return (
        <div>
            <Head>
                {router.pathname === "/" ? (
                    <title>{artist}</title>
                ) : (
                    <title>{`${artist} - ${router.pathname
                        .replace("/", "")
                        .toUpperCase()}`}</title>
                )}
                <meta
                    name="keywords"
                    content="art, design, photography, living space, interior decorating"
                />
                <link
                    rel="preload"
                    href="/fonts/EBGaramond-VariableFont_wght.ttf"
                    as="font"
                    crossOrigin=""
                    type="truetype"
                />
                <link
                    rel="preload"
                    href="/fonts/Raleway-VariableFont_wght.ttf"
                    as="font"
                    crossOrigin=""
                    type="truetype"
                />
            </Head>
        </div>
    );
};

export default Meta;
