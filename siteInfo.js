// Table of Contents:
// 1. Meta
// 2. Home
// 3. Services
// 4. Projects
// 5. About

// 1. Meta

const siteName = "DESIGNER TEMPLATE";

const pages = [
    { name: "PROJECTS", href: "/projects" },
    { name: "ABOUT", href: "/about" },
];

//home page

const servicesPreviewContent = [
    {
        title: "Service One",
        price: "$200",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/hero.jpg", alt: "alt hero text" },
        button: { text: "Book Now!", href: "/" },
    },
    {
        title: "Service Two",
        price: "$400-800",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/hero.jpg", alt: "alt hero text" },
        button: { text: "Book Now!", href: "/" },
    },
    {
        title: "Service Three",
        price: "Custom",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/hero.jpg", alt: "alt hero text" },
        button: { text: "Book Now!", href: "/" },
    },
];

const blockTextOne = {
    title: "CARVE YOUR NICHE",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita veniam. Magni explicabo dignissimos obcaecati incidunt repudiandae soluta inventore temporibus!",
};

const mosaicSectionContentOne = {
    title: "Mosaic Section",
    content:
        "This is the mosaic section content. Here you can describe whatever you like about your service and the button below can link to any page in this website or any external site.",
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
const blockPhotoContentOne = {
    title: "BLOCK PHOTO TITLE",
    content: "Block Photo Content",
    button: {
        text: "Button Text",
        href: "/about",
        variant: "contained",
    },
    image: { url: "/images/hero.jpg", alt: "alt hero text" },
};

export {
    siteName,
    pages,
    servicesPreviewContent,
    mosaicSectionContentOne,
    blockPhotoContentOne,
    blockTextOne,
};
