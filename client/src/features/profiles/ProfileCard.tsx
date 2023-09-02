import { observer } from "mobx-react-lite";
import { Profile } from "../../types/profile";
import { Link } from "react-router-dom";
import { FollowButton } from "./FollowButton";

interface Props {
  profile: Profile;
}

export default observer(function ProfileCard({ profile }: Props) {
  return (
    <div className="p-2 border-2 border-gray-900 rounded-md">
      <Link to={`/profiles/${profile.username}`}>
        <img src={profile.image || "/assets/user.png"} />
        <div>
          <h4>{profile.displayName}</h4>
          <p>Bio goes here</p>
        </div>
        <div className="">
          <p>
            {profile.followersCount}{" "}
            {profile.followersCount > 1 ? "followers" : "follower"}
          </p>
        </div>
        <FollowButton profile={profile} />
      </Link>
    </div>
  );
});
