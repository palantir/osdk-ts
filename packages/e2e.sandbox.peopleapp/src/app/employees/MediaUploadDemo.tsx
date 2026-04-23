import { useOsdkMediaUpload } from "@osdk/react/experimental";
import { useRef, useState } from "react";

export function MediaUploadDemo() {
  const { upload, data, isPending, error, reset } = useOsdkMediaUpload();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string>();
  const [fileName, setFileName] = useState<string>();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    setFileName(file.name);

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    if (file.type.startsWith("image/")) {
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setPreviewUrl(undefined);
    }

    try {
      const ref = await upload(file);
      console.log("[MediaUploadDemo] upload success", ref);
    } catch (err) {
      console.error("[MediaUploadDemo] upload failed", err);
    }
  };

  const handleReset = () => {
    reset();
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(undefined);
    setFileName(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="mt-4 p-3 border rounded bg-gray-50">
      <div className="font-medium text-sm mb-2">Media Upload Demo</div>

      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        disabled={isPending}
        className="text-sm"
      />

      {isPending && (
        <div className="text-gray-400 text-sm mt-2">Uploading...</div>
      )}

      {error && (
        <div className="text-red-500 text-sm mt-2">
          Upload failed: {error.message}
        </div>
      )}

      {data && (
        <div className="mt-2">
          <div className="text-green-600 text-sm">Upload successful</div>
          <div className="text-xs text-gray-500 mt-1">
            mediaItemRid: {data.reference.mediaSetViewItem.mediaItemRid}
          </div>
          <div className="text-xs text-gray-500">
            mimeType: {data.mimeType}
          </div>
          {fileName && (
            <div className="text-xs text-gray-500">file: {fileName}</div>
          )}
        </div>
      )}

      {previewUrl && (
        <div className="mt-2">
          <img
            src={previewUrl}
            alt="Upload preview"
            className="rounded max-w-48"
          />
        </div>
      )}

      {(data || error) && (
        <button
          type="button"
          onClick={handleReset}
          className="mt-2 text-sm text-blue-600 underline"
        >
          Reset
        </button>
      )}
    </div>
  );
}
