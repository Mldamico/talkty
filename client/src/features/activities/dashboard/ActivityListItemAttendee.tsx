import { observer } from "mobx-react-lite";
import { Profile } from "../../../types/profile";
import { Link } from "react-router-dom";
import { Tooltip } from "flowbite-react";
import ProfileCard from "../../profiles/ProfileCard";

interface Props {
  attendees: Profile[];
}

export const ActivityListItemAttendee = observer(({ attendees }: Props) => {
  return (
    <div className="flex gap-5 ml-4">
      {attendees?.map((attendee) => (
        <Tooltip
          className="bg-gray-400"
          content={<ProfileCard profile={attendee} />}
          key={attendee.username}
        >
          <Link to={`/profiles/${attendee.username}`} className="">
            <img
              src={attendee.image || "/assets/user.png"}
              className={`w-12 rounded-full ${
                attendee.following ? "border-2 border-orange-400" : null
              }`}
            />
          </Link>
        </Tooltip>
      ))}
    </div>
  );
});
