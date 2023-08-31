import { observer } from "mobx-react-lite";
import { Photo, Profile } from "../../types/profile";
import { useStore } from "../../app/stores/store";
import { SyntheticEvent, useState } from "react";
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
      loading,
      setMainPhoto,
    },
  } = useStore();
  const [target, setTarget] = useState("");
  const [addPhotoMode, setAddPhotoMode] = useState(false);
  function handlePhotoUpload(file: Blob) {
    uploadPhoto(file).then(() => setAddPhotoMode(false));
  }

  const handleSetMainPhoto = (
    photo: Photo,
    e: SyntheticEvent<HTMLButtonElement>
  ) => {
    setTarget(e.currentTarget.name);
    setMainPhoto(photo);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>Photos</h1>
        {isCurrentUser && (
          <button
            className="bg-blue-600 text-white px-3 py-2"
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
          <div className="grid gap-3 grid-cols-5">
            {profile.photos?.map((photo) => (
              <div key={photo?.id}>
                <img src={photo?.url} alt="Photo" />
                {isCurrentUser && (
                  <div className="w-full flex pt-2 gap-2 ">
                    <button
                      className="border-green-500 border flex-1 text-green-500 font-bold disabled:text-green-200"
                      disabled={photo.isMain}
                      onClick={(e) => handleSetMainPhoto(photo, e)}
                    >
                      Main
                    </button>
                    <button className="border-red-500 border text-red-500 flex-1">
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
