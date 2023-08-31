import { useState } from "react";
import { PhotoWidgetDropzone } from "./PhotoWidgetDropzone";

export const PhotoUploadWidget = () => {
  const [files, setFiles] = useState<any>([]);
  return (
    <div className="grid grid-cols-3 gap-4 mt-4 ">
      <div className="font-bold text-blue-600 text-center">
        <h2>'Step 1 - Add Photo'</h2>
        <PhotoWidgetDropzone setFiles={setFiles} />
      </div>
      <div className="font-bold text-blue-600 flex flex-col items-center">
        <h2>'Step 2 - Resize image'</h2>
        {files && files.length > 0 && <img src={files[0].preview} />}
      </div>
      <div className="text-center font-bold text-blue-600">
        <h2>'Step 3 - Preview & Upload'</h2>
      </div>
    </div>
  );
};
