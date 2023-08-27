import { observer } from "mobx-react-lite";
import { Activity } from "../../../types/Activities";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { useStore } from "../../../app/stores/store";

const activityImageStyle = {
  filter: "brightness(30%)",
};

interface Props {
  activity: Activity;
}

export const ActivityDetailedHeader = observer(({ activity }: Props) => {
  const {
    activityStore: { updateAttendance, loading, cancelActivityToggle },
  } = useStore();
  if (!activity) return "loading";
  return (
    <div className="relative bg-white shadow-md">
      {activity.isCancelled && (
        <div className="absolute z-30 px-2 bg-red-700 rounded-md -left-4 top-4">
          <p className="text-white">Cancelled</p>
        </div>
      )}
      <div className="p-0">
        <img
          className="w-full"
          src={`/assets/categoryImages/${activity.category}.jpg`}
          style={activityImageStyle}
        />
        <div>
          <div>
            <div className="absolute z-10 w-full h-auto text-white bottom-[25%] left-8">
              <h3 className="text-3xl">{activity.title}</h3>

              <p>{format(activity.date!, "dd MMM yyyy")}</p>
              <p>
                Hosted by{" "}
                <strong>
                  <Link to={`/profiles/${activity.host?.username}`}>
                    {activity.host?.displayName}
                  </Link>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-4">
        <div className="flex w-full gap-4">
          {activity.isHost ? (
            <div className="flex items-center justify-between w-full">
              <button
                className={
                  activity.isCancelled
                    ? "bg-green-600 px-3 py-2 text-white  rounded-md"
                    : "bg-red-600 px-3 py-2 text-white  rounded-md"
                }
                onClick={cancelActivityToggle}
                disabled={loading}
              >
                {activity.isCancelled
                  ? "Reactivate Activity"
                  : "Cancel Activity"}
              </button>
              <Link
                to={`/manage/${activity.id}`}
                className="px-3 py-2 text-white bg-orange-400 rounded-md"
              >
                Manage Event
              </Link>
            </div>
          ) : activity.isGoing ? (
            <button
              className="px-3 py-2 text-white bg-red-400 rounded-md"
              onClick={updateAttendance}
              disabled={loading}
            >
              Cancel attendance
            </button>
          ) : (
            <button
              className="px-3 py-2 font-bold rounded-md bg-cyan-400"
              onClick={updateAttendance}
              disabled={loading}
            >
              Join Activity
            </button>
          )}
        </div>
      </div>
    </div>
  );
});
