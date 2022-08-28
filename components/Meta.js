import Head from "next/head";

const artist = "DESIGNER TEMPLATE";

const Meta = () => {
    return (
        <div>
            <Head>
                <title>{artist}</title>
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
