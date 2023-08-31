import { observer } from "mobx-react-lite";
import { ProfileContent } from "./ProfileContent";
import { ProfileHeader } from "./ProfileHeader";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useStore } from "../../app/stores/store";
import { Loading } from "../../app/layout/Loading";

export const ProfilePage = observer(() => {
  const { username } = useParams<{ username: string }>();
  const { profileStore } = useStore();
  const { loadingProfile, loadProfile, profile } = profileStore;

  useEffect(() => {
    if (username) {
      loadProfile(username);
    }
  }, [loadProfile, username]);

  if (loadingProfile) return <Loading content="Loading..." />;
  return (
    <div>
      {profile && (
        <>
          <ProfileHeader profile={profile} />
          <ProfileContent profile={profile} />
        </>
      )}
    </div>
  );
});
