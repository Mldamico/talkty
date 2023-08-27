import { NavLink } from "react-router-dom";
import { Activity } from "../../../types/Activities";
import { AiFillClockCircle } from "react-icons/ai";
import { FaLocationPin } from "react-icons/fa6";
import { format } from "date-fns";
import { ActivityListItemAttendee } from "./ActivityListItemAttendee";
interface ActivityListItemProps {
  activity: Activity;
}

export const ActivityListItem = ({ activity }: ActivityListItemProps) => {
  return (
    <div className="border border-gray-300 shadow-md">
      <div className="flex flex-col gap-2 pb-2 border-gray-300">
        <div className="flex items-center p-4 border-b border-gray-400">
          <img
            className="w-20 rounded-full"
            src="/assets/user.png"
            alt="User"
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold ">{activity.title}</h3>
            <div>
              <p>Hosted by {activity.host?.displayName}</p>
              {activity.isHost && (
                <p className="px-2 py-1 font-semibold text-blue-600 border border-blue-600 rounded-sm">
                  You are hosting this activity
                </p>
              )}
              {activity.isGoing && !activity.isHost && (
                <p className="px-2 py-1 font-semibold text-green-600 border border-green-600 rounded-sm">
                  You are going to this activity
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2">
            <span>
              <AiFillClockCircle />
            </span>
            <p className="text-gray-500">
              {format(activity.date!, "dd MMM yyyy h:mm aa")}
            </p>
            <span>
              <FaLocationPin />
            </span>
            <p>
              {activity.city}, {activity.venue}
            </p>
          </div>
        </div>
        <div className="px-2 py-3 bg-gray-200 border-gray-600 border-y">
          <ActivityListItemAttendee attendees={activity.attendees!} />
        </div>

        <div className="p-4">
          <p>{activity.description}</p>

          <div className="flex justify-end px-4">
            <div className="flex gap-2">
              <NavLink to={`/activities/${activity.id}`}>
                <button className="px-3 py-1 text-white bg-blue-500 rounded-md">
                  View
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
