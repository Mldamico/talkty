import { observer } from "mobx-react-lite";
import { Profile } from "../../../types/profile";
import { Link } from "react-router-dom";

interface Props {
  attendees: Profile[];
}

export const ActivityListItemAttendee = observer(({ attendees }: Props) => {
  return (
    <div className="flex gap-5 ml-4">
      {attendees?.map((attendee) => (
        <Link
          to={`/profiles/${attendee.username}`}
          key={attendee.username}
          className=""
        >
          <img
            src={attendee.image || "/assets/user.png"}
            className="w-12 rounded-full"
          />
        </Link>
      ))}
    </div>
  );
});
