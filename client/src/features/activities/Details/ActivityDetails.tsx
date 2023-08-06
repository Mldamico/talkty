import { useStore } from "../../../app/stores/store";

export const ActivityDetails = () => {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    openForm,
    cancelSelectedActivity,
  } = activityStore;

  if (!activity) return;

  return (
    <div className="flex flex-col gap-2 p-2 bg-white">
      <img src={`/assets/categoryImages/${activity.category}.jpg`} />
      <div>
        <h3 className="font-bold">{activity.title}</h3>
        <span className="text-gray-500">{activity.date}</span>
        <p>{activity.description}</p>
      </div>
      <div className="flex justify-between">
        <button
          className="px-2 py-1 text-white bg-blue-500 border border-gray-600 rounded-md"
          onClick={() => openForm(activity.id)}
        >
          Edit
        </button>
        <button
          className="px-2 py-1 text-red-500"
          onClick={() => cancelSelectedActivity()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
