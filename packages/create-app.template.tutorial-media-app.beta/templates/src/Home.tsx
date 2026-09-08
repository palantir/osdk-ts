import React, { useRef, useState } from "react";
import css from "./Home.module.css";
import { ImageList } from "./ImageList";
import Layout from "./Layout";
import useImageLibrary from "./useImageLibrary";

function Home() {
  const { images, uploadImage } = useImageLibrary();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        setIsUploading(true);
        await uploadImage(file.name);
        event.target.value = "";
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload image. Please try again.");
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <Layout>
      <div className={css.container}>
        <div className={css.tutorialBannerWrapper}>
          <div className={css.tutorialBanner}>
            <p className={css.tutorialBannerTitle}>
              💡 Welcome to Media app tutorial!
            </p>
            <p>
              The Media App is implemented with mock in-memory data.
              <br />Can you solve how to switch it to use the Ontology SDK
              instead?
            </p>
          </div>
        </div>

        <div className={css.titleAndActions}>
          <span>Image Library:</span>
          <button
            onClick={handleUploadClick}
            className={css.uploadButton}
            disabled={isUploading}
          >
            {isUploading
              ? (
                <>
                  <img src="/spinner.svg" className={css.uploadIcon} alt="" />
                  Uploading...
                </>
              )
              : (
                <>
                  <img src="/plus-icon.svg" className={css.uploadIcon} alt="" />
                  Upload Image
                </>
              )}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
        <ImageList images={images} />
      </div>
    </Layout>
  );
}

export default Home;
