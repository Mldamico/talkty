import { useEffect, useState } from "react";
import { PhotoWidgetDropzone } from "./PhotoWidgetDropzone";
import { PhotoWidgetCropper } from "./PhotoWidgetCropper";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

export const PhotoUploadWidget = () => {
  const [files, setFiles] = useState<any>([]);
  const [cropper, setCropper] = useState<Cropper>();

  function onCrop() {
    if (cropper) {
      cropper.getCroppedCanvas().toBlob((blob) => console.log(blob));
    }
  }

  useEffect(() => {
    return () => {
      files.forEach((file: any) => {
        URL.revokeObjectURL(file.preview);
      });
    };
  }, [files]);

  return (
    <div className="grid grid-cols-3 gap-4 mt-4 ">
      <div className="font-bold text-blue-600 text-center">
        <h2>'Step 1 - Add Photo'</h2>
        <PhotoWidgetDropzone setFiles={setFiles} />
      </div>
      <div className="font-bold text-blue-600 flex flex-col items-center">
        <h2>'Step 2 - Resize image'</h2>
        {files && files.length > 0 && (
          <PhotoWidgetCropper
            setCropper={setCropper}
            imagePreview={files[0].preview}
          />
        )}
      </div>
      <div className="text-center font-bold text-blue-600 flex flex-col items-center">
        <h2>'Step 3 - Preview & Upload'</h2>
        {files && files.length > 0 && (
          <>
            <div className="img-preview overflow-hidden min-h-[200px]" />
            <div className="flex w-full justify-center gap-4 pt-2">
              <button
                onClick={onCrop}
                className="bg-green-500 text-white px-6 rounded-md py-2"
              >
                <AiOutlineCheck />
              </button>
              <button
                onClick={() => setFiles([])}
                className="bg-red-500 text-white px-6 rounded-md py-2"
              >
                <RxCross1 />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
