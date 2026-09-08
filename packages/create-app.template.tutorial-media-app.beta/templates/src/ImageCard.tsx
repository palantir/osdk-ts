import { useState } from "react";
import React from "react";
import css from "./ImageCard.module.css";
import { IImageItem } from "./useImageLibrary";

export function ImageCard({ imageItem }: { imageItem: IImageItem }) {
  const [url, setUrl] = useState<string | null>(null);

  // Fetch the image blob and create an object URL
  React.useEffect(() => {
    let isMounted = true;
    imageItem.image.fetchContents().then(async (resp) => {
      const blob = await resp.blob();
      if (isMounted) {
        setUrl(URL.createObjectURL(blob));
      }
    });
    return () => {
      isMounted = false;
      if (url) URL.revokeObjectURL(url);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageItem]);

  return (
    <div className={css.imageCard}>
      <div className={css.imagePreview}>
        {url
          ? (
            <img
              src={url}
              alt={imageItem.name}
              style={{ maxWidth: "100%", maxHeight: 80 }}
            />
          )
          : <span>Loading...</span>}
      </div>
      <div className={css.imageName}>
        <span className={css.imageNameText}>{imageItem.name}</span>
      </div>
    </div>
  );
}
