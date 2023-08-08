import { NavLink } from "react-router-dom";
import { Activity } from "../../../types/Activities";
import { SyntheticEvent, useState } from "react";
import { useStore } from "../../../app/stores/store";

interface ActivityListItemProps {
  activity: Activity;
}

export const ActivityListItem = ({ activity }: ActivityListItemProps) => {
  const { activityStore } = useStore();
  const { deleteActivity, loading } = activityStore;

  const [target, setTarget] = useState("");
  const handleActivityDelete = (
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  };

  return (
    <div key={activity.id}>
      <div className="flex flex-col gap-2 py-2 pb-4 border-b-2 border-gray-300">
        <h3 className="text-xl font-bold">{activity.title}</h3>
        <p className="text-gray-500">{activity.date}</p>
        <p>{activity.description}</p>
        <p>
          {activity.city}, {activity.venue}
        </p>
        <div className="flex justify-between px-4">
          <div className="p-1 border border-gray-300">{activity.category}</div>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 text-white bg-red-500 rounded-sm"
              disabled={loading && target === activity.id}
              onClick={(e) => handleActivityDelete(e, activity.id)}
            >
              Delete
            </button>
            <NavLink to={`/activities/${activity.id}`}>
              <button className="px-3 py-1 text-white bg-blue-500 rounded-sm">
                View
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
