import { Activity } from "../../../types/Activities";

interface ActivityListProps {
  activities: Activity[];
  handleSelectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export const ActivityList = ({
  activities,
  handleSelectActivity,
  deleteActivity,
  submitting,
}: ActivityListProps) => {
  return (
    <div className="p-4 bg-white">
      <div className="">
        {activities.map((activity) => (
          <div key={activity.id}>
            <div className="flex flex-col gap-2 py-2 pb-4 border-b-2 border-gray-300">
              <h3 className="text-xl font-bold">{activity.title}</h3>
              <p className="text-gray-500">{activity.date}</p>
              <p>{activity.description}</p>
              <p>
                {activity.city}, {activity.venue}
              </p>
              <div className="flex justify-between px-4">
                <div className="p-1 border border-gray-300">
                  {activity.category}
                </div>
                <div className="flex gap-2">
                  <button
                    className="px-3 py-1 text-white bg-red-500 rounded-sm"
                    disabled={submitting}
                    onClick={() => deleteActivity(activity.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="px-3 py-1 text-white bg-blue-500 rounded-sm"
                    onClick={() => handleSelectActivity(activity.id)}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
