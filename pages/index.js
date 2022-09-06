import BlockPhoto from "../components/general/BlockPhoto";
import BlockText from "../components/general/BlockText";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import Meta from "../components/home/Meta";
import MosaicSection from "../components/mosaic/MosaicSection";

import {
  siteName,
  blockTextOne,
  blockTextTwo,
  blockTextThree,
  blockPhotoContentOne,
  mosaicSectionContentOne,
  mosaicSectionContentTwo,
  mosaicSectionContentThree,
  servicesPreviewContent,
  blockPhotoContentTwo,
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
      <ServicesPreview servicesPreviewContent={servicesPreviewContent} />
      <BlockPhoto blockPhotoContent={blockPhotoContentOne} reverse />
      <BlockText text={blockTextTwo} />
      <BlockPhoto blockPhotoContent={blockPhotoContentTwo} />
      <MosaicSection
        reverse
        mosaicSectionContent={mosaicSectionContentTwo}
        variation={2}
      />
      <BlockText text={blockTextThree} />
      <MosaicSection
        mosaicSectionContent={mosaicSectionContentThree}
        variation={3}
      />
    </div>
  );
}
