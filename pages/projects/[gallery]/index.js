import { collection, getDocs } from "firebase/firestore";
import Gallery from "../../../components/gallery/Gallery";
import { db } from "../../../firebase";
import PageLayout from "../../../components/layout/PageLayout";
import { useRouter } from "next/router";

const Project = ({ images, category }) => {
  const router = useRouter();
  const { gallery } = router.query;
  return (
    <PageLayout name={gallery}>
      <Gallery images={images} category="projects" />
    </PageLayout>
  );
};

// const getServerSideProps = async (context) => {};

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
