import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Profile } from "../../../types/profile";

interface Props {
  attendees: Profile[];
}

export const ActivityDetailedSidebar = observer(({ attendees }: Props) => {
  return (
    <div className="my-2 bg-white shadow-md">
      <div className="p-2 text-center text-white bg-blue-400">
        {attendees.length} {attendees.length === 1 ? "Person" : "People"} going
      </div>
      <div>
        <div>
          {attendees.map((attendee) => (
            <div
              className="flex gap-2 py-2 mx-6 border-b border-gray-300"
              key={attendee.username}
            >
              <img
                className="w-28"
                src={attendee.image || "/assets/user.png"}
                alt={attendee.username}
              />
              <div>
                <h3 className="text-xl font-semibold">
                  <Link to={`/profiles/${attendee.username}`}>
                    {attendee.displayName}
                  </Link>
                </h3>
                <p className="text-blue-400">Following</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
