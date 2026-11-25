import mockImageUrl from "/mock-image.svg";
import { IImageItem } from "./useImageLibrary";

const images: IImageItem[] = [
  {
    $apiName: "MockProject",
    $primaryKey: "1",
    id: "1",
    name: "Mock image 1",
    image: {
      fetchContents,
    },
  },
  {
    $apiName: "MockProject",
    $primaryKey: "2",
    id: "2",
    name: "Yet another mock image",
    image: {
      fetchContents,
    },
  },
];

function fetchContents(): Promise<Response> {
  // Fetch the SVG from the public folder using the imported URL
  return fetch(mockImageUrl);
}

async function delay(): Promise<void> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(), 500 + Math.random() * 1000)
  );
}

// Good enough random id for mocks
function randomId(): string {
  return `${Math.floor(Math.random() * 2 ** 31)}`;
}

async function getImages(): Promise<IImageItem[]> {
  await delay();
  const result = [...images];
  result.sort((p1, p2) => p1.name.localeCompare(p2.name));
  return result;
}

// TODO(mnayan): change to accept image bytes or something
async function uploadImage({
  name,
}: {
  name: string;
}): Promise<IImageItem["$primaryKey"]> {
  await delay();
  const id = randomId();
  images.push({
    $apiName: "MockProject",
    $primaryKey: id,
    id,
    name,
    image: {
      fetchContents,
    },
  });
  return id;
}

const Mocks = {
  getImages,
  uploadImage,
};

export default Mocks;
