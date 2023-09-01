import { observer } from "mobx-react-lite";
import { Photo, Profile } from "../../types/profile";
import { useStore } from "../../app/stores/store";
import { useState } from "react";
import { PhotoUploadWidget } from "../../app/common/imageUpload/PhotoUploadWidget";

interface Props {
  profile: Profile;
}
export const ProfilePhoto = observer(({ profile }: Props) => {
  const {
    profileStore: {
      isCurrentUser,
      uploadPhoto,
      uploading,
      deletePhoto,
      setMainPhoto,
    },
  } = useStore();

  const [addPhotoMode, setAddPhotoMode] = useState(false);
  function handlePhotoUpload(file: Blob) {
    uploadPhoto(file).then(() => setAddPhotoMode(false));
  }

  const handleDeletePhoto = (photo: Photo) => {
    deletePhoto(photo);
  };

  const handleSetMainPhoto = (photo: Photo) => {
    setMainPhoto(photo);
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1>Photos</h1>
        {isCurrentUser && (
          <button
            className="px-3 py-2 text-white bg-blue-600"
            onClick={() => setAddPhotoMode(!addPhotoMode)}
          >
            {addPhotoMode ? "Cancel" : "Add Photo"}
          </button>
        )}
      </div>
      <div className="">
        {addPhotoMode ? (
          <PhotoUploadWidget
            uploadPhoto={handlePhotoUpload}
            loading={uploading}
          />
        ) : (
          <div className="grid grid-cols-5 gap-3">
            {profile.photos?.map((photo) => (
              <div key={photo?.id}>
                <img src={photo?.url} alt="Photo" />
                {isCurrentUser && (
                  <div className="flex w-full gap-2 pt-2 ">
                    <button
                      className="flex-1 font-bold text-green-500 border border-green-500 disabled:text-green-200"
                      disabled={photo.isMain}
                      onClick={() => handleSetMainPhoto(photo)}
                    >
                      Main
                    </button>
                    <button
                      onClick={() => handleDeletePhoto(photo)}
                      disabled={photo.isMain}
                      className="flex-1 text-red-500 border border-red-500 disabled:bg-red-300"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});
