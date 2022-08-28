import Head from "next/head";
import { useRouter } from "next/router";

const title = "Designer Portfolio";

const Meta = () => {
    const router = useRouter();
    return (
        <div>
            <Head>
                {router.pathname === "/" ? (
                    <title>{title}</title>
                ) : (
                    <title>{`${title} - ${router.pathname
                        .replace("/", "")
                        .toUpperCase()}`}</title>
                )}
                <meta
                    name="keywords"
                    content="art, design, photography, living space, interior decorating"
                />
                <link
                    rel="preload"
                    href="/fonts/CormorantGaramond-Light.ttf"
                    as="font"
                    crossOrigin=""
                    type="truetype"
                />
                <link
                    rel="preload"
                    href="/fonts/TitilliumWeb-SemiBold.ttf"
                    as="font"
                    crossOrigin=""
                    type="truetype"
                />
            </Head>
        </div>
    );
};

export default Meta;
