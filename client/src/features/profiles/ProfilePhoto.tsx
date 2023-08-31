import { observer } from "mobx-react-lite";
import { Profile } from "../../types/profile";

interface Props {
  profile: Profile;
}
export const ProfilePhoto = observer(({ profile }: Props) => {
  return (
    <div>
      <h1>Photos</h1>
      <div className="grid gap-3 grid-cols-5">
        {profile.photos?.map((photo) => (
          <div key={photo?.id}>
            <img src={photo?.url} alt="Photo" />
          </div>
        ))}
      </div>
    </div>
  );
});
