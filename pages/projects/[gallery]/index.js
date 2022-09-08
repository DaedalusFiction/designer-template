import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import Gallery from "../../../components/gallery/Gallery";
import { db } from "../../../firebase";
import PageLayout from "../../../components/layout/PageLayout";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { useState } from "react";

const Project = ({ images, category }) => {
  const router = useRouter();
  const { gallery } = router.query;
  const [firstImage, setFirstImage] = useState(0);
  const [pageLimit, setPageLimit] = useState(20);

  const handleNextPage = () => {
    setFirstImage(firstImage + 1);
  };
  const handlePreviousPage = () => {
    setFirstImage(firstImage - 1);
  };

  return (
    <PageLayout name={gallery}>
      <Gallery
        images={images.slice(firstImage, firstImage + pageLimit)}
        category="projects"
      />
      {firstImage > 0 && (
        <Button color="secondary" onClick={handlePreviousPage}>
          Previous Page
        </Button>
      )}
      {firstImage + pageLimit < images.length && (
        <Button color="secondary" onClick={handleNextPage}>
          Next Page
        </Button>
      )}
    </PageLayout>
  );
};

export const getServerSideProps = async (context) => {
  const docsSnap = await getDocs(
    collection(db, `projects/${context.params.gallery}/images`)
  );
  let images = [];
  docsSnap.docs.forEach((doc, index) => {
    images = [...images, doc.data()];
  });

  return {
    props: {
      images,
    },
  };
};

export default Project;
