import { observer } from "mobx-react-lite";
import { Profile } from "../../types/profile";
import { useStore } from "../../app/stores/store";
import { useState } from "react";

interface Props {
  profile: Profile;
}
export const ProfilePhoto = observer(({ profile }: Props) => {
  const {
    profileStore: { isCurrentUser },
  } = useStore();

  const [addPhotoMode, setAddPhotoMode] = useState(false);
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
          <p>Photo widget</p>
        ) : (
          <div className="grid gap-3 grid-cols-5">
            {profile.photos?.map((photo) => (
              <div key={photo?.id}>
                <img src={photo?.url} alt="Photo" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});
