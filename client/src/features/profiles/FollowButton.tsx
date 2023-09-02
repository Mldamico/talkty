import { observer } from "mobx-react-lite";
import { Profile } from "../../types/profile";
import { useStore } from "../../app/stores/store";
import { SyntheticEvent } from "react";

interface Props {
  profile: Profile;
}

export const FollowButton = observer(({ profile }: Props) => {
  const { profileStore, userStore } = useStore();
  const { updateFollowing, loading } = profileStore;

  function handleFollow(e: SyntheticEvent, username: string) {
    e.preventDefault();
    profile.following
      ? updateFollowing(username, false)
      : updateFollowing(username, true);
  }

  if (userStore.user?.username === profile.username) return null;
  return (
    <button
      className="w-full px-3 py-2 mt-2 text-white bg-blue-600"
      onClick={(e) => handleFollow(e, profile.username)}
      disabled={loading}
    >
      {profile.following ? "Unfollow" : "Follow"}
    </button>
  );
});
