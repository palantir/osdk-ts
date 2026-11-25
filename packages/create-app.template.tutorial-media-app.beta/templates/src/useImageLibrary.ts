import { useCallback } from "react";
import useSWR from "swr";
import { Media } from "./mediaTypes";
import Mocks from "./mocks";

export interface IImageItem {
  $apiName: string;
  $primaryKey: string;
  id: string;
  name: string;
  image: Media; // TODO(mnayan): Maybe call this media
}

function useImageLibrary() {
  const { data, isLoading, isValidating, error, mutate } = useSWR<IImageItem[]>(
    "images",
    async () => {
      // Try to implement this with the Ontology SDK!
      const imageItems: IImageItem[] = (await Mocks.getImages()).map((
        image,
      ) => ({
        $apiName: image.$apiName,
        $primaryKey: image.$primaryKey,
        id: image.id,
        name: image.name || "",
        image: image.image,
      }));
      return imageItems;
    },
  );

  const uploadImage: (name: string) => Promise<IImageItem["$primaryKey"]> =
    useCallback(
      async (name) => {
        // Try to implement this with the Ontology SDK!
        const id = await Mocks.uploadImage({ name });
        await mutate();
        return id;
      },
      [mutate],
    );

  return {
    images: data,
    isLoading,
    isValidating,
    isError: error,
    uploadImage,
  };
}

export default useImageLibrary;
