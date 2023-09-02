import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import ProfileCard from "./ProfileCard";

export const ProfileFollowings = observer(() => {
  const { profileStore } = useStore();
  const { followings, profile, activeTab } = profileStore;

  return (
    <div>
      <h2 className="text-3xl text-center">
        {activeTab === 3
          ? `People following ${profile?.displayName}`
          : `People ${profile?.displayName} is following`}
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {followings.map((profile) => (
          <ProfileCard key={profile.username} profile={profile} />
        ))}
      </div>
    </div>
  );
});
