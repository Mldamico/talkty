import { Link, useParams } from "react-router-dom";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Loading } from "../../../app/layout/Loading";

export const ActivityDetails = observer(() => {
  const { id } = useParams();
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (loadingInitial || !activity) return <Loading />;

  return (
    <div className="flex flex-col gap-2 p-2 bg-white">
      <img src={`/assets/categoryImages/${activity.category}.jpg`} />
      <div>
        <h3 className="font-bold">{activity.title}</h3>
        <span className="text-gray-500">{activity.date}</span>
        <p>{activity.description}</p>
      </div>
      <div className="flex justify-between">
        <Link to={`/manage/${activity.id}`}>
          <button className="px-2 py-1 text-white bg-blue-500 border border-gray-600 rounded-md">
            Edit
          </button>
        </Link>
        <Link to={`/activities`}>
          <button className="px-2 py-1 text-red-500">Cancel</button>
        </Link>
      </div>
    </div>
  );
});
