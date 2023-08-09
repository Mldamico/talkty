import { NavLink } from "react-router-dom";
import { Activity } from "../../../types/Activities";
import { AiFillClockCircle } from "react-icons/ai";
import { FaLocationPin } from "react-icons/fa6";
interface ActivityListItemProps {
  activity: Activity;
}

export const ActivityListItem = ({ activity }: ActivityListItemProps) => {
  return (
    <div className="border border-gray-500">
      <div className="flex flex-col gap-2 pb-2 border-gray-300">
        <div className="flex items-center p-4 border-b border-gray-400">
          <img
            className="w-20 rounded-full"
            src="/assets/user.png"
            alt="User"
          />
          <h3 className="ml-4 text-xl font-bold">{activity.title}</h3>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2">
            <span>
              <AiFillClockCircle />
            </span>
            <p className="text-gray-500">{activity.date}</p>
            <span>
              <FaLocationPin />
            </span>
            <p>
              {activity.city}, {activity.venue}
            </p>
          </div>
        </div>
        <div className="px-2 py-3 bg-gray-200 border-gray-600 border-y">
          Text placeholder
        </div>

        <div className="p-4">
          <p>{activity.description}</p>

          <div className="flex justify-end px-4">
            <div className="flex gap-2">
              <NavLink to={`/activities/${activity.id}`}>
                <button className="px-3 py-1 text-white bg-blue-500 rounded-sm">
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
