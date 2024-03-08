import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { images } from "./images";

const AllTab = () => {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  // Calculate container width based on the number of images and gap
  const containerWidth = images.length * (424 + 24) - 24;

  return (
    <div style={{ maxWidth: containerWidth + "px" }}>
      <div className="flex flex-wrap gap-[24px]">
        {images?.map((e, i) => (
          <div
            key={i}
            style={{
              width: e.width + "px",
              height: e.height + "px",
              borderRadius: e.radius + "px",
              overflow: "hidden",
              marginBottom: "24px", // Add gap at the bottom
            }}>
            <img
              src={e.src}
              alt={e.caption}
              className="object-cover w-full h-full"
              onClick={() => handleClick(i)}
            />
          </div>
        ))}

        {!!currentImage && (
          <Lightbox
            mainSrc={currentImage.original}
            imageTitle={currentImage.caption}
            mainSrcThumbnail={currentImage.src}
            nextSrc={nextImage.original}
            nextSrcThumbnail={nextImage.src}
            prevSrc={prevImage.original}
            prevSrcThumbnail={prevImage.src}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}
      </div>
    </div>
  );
};

export default AllTab;
