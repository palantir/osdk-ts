import css from "./ImageList.module.css";
import { ImageCard } from "./ImageCard";
import { IImageItem } from "./useImageLibrary";

interface ImageListProps {
  images: IImageItem[] | undefined;
}

export function ImageList({ images }: ImageListProps) {
  return (
    <div className={css.imageList}>
      {images && images.length > 0
        ? (
          <div className={css.imageListGrid}>
            {images.map((img) => <ImageCard key={img.id} imageItem={img} />)}
          </div>
        )
        : <div>No images found.</div>}
    </div>
  );
} 