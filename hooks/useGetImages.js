import { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase";

function useGetImages(category, updateCounter, lastVisible) {
  const [images, setImages] = useState(null);

  useEffect(() => {
    async function getImages() {
      const q = query(
        collection(db, `projects/${category}/images`),
        orderBy("uploaded", "desc")
      );

      const docsSnap = await getDocs(q);
      let newImages = [];
      docsSnap.docs.forEach((doc, index) => {
        newImages = [...newImages, doc];
        // console.log(doc.data());
      });
      setImages(newImages);
    }

    getImages();
  }, [category, lastVisible, updateCounter]);
  return [images];
}

export default useGetImages;
