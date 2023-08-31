import { observer } from "mobx-react-lite";
import { Profile } from "../../types/profile";

interface Props {
  profile: Profile;
}

export const ProfileHeader = observer(({ profile }: Props) => {
  return (
    <div className="flex justify-between p-3 bg-white shadow-md">
      <div className="flex items-center gap-4">
        <img
          src={profile.image || "/assets/user.png"}
          alt={profile.displayName || "user"}
          className="w-24 rounded-full"
        />
        <h1 className="text-4xl">{profile.displayName}</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-10 border-b border-gray-600">
          <div className="text-center">
            <p className="text-3xl">5</p>
            <p>Followers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl">50</p>
            <p>Following</p>
          </div>
        </div>
        <button className="py-2 mt-2 text-white bg-blue-600 ">Following</button>
      </div>
    </div>
  );
});
