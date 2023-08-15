import { observer } from "mobx-react-lite";
import { Activity } from "../../../types/Activities";
import { Link } from "react-router-dom";

const activityImageStyle = {
  filter: "brightness(30%)",
};

interface Props {
  activity: Activity;
}

export const ActivityDetailedHeader = observer(({ activity }: Props) => {
  if (!activity) return "loading";
  return (
    <div className="relative bg-white shadow-md">
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

              <p>{activity.date}</p>
              <p>
                Hosted by <strong>Bob</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-4">
        <div className="flex gap-4">
          <button className="px-3 py-2 font-bold rounded-md bg-cyan-400">
            Join Activity
          </button>
          <button className="px-3 py-2 text-white bg-red-400 rounded-md">
            Cancel attendance
          </button>
        </div>
        <Link
          to={`/manage/${activity.id}`}
          className="px-3 py-2 text-white bg-orange-400 rounded-md"
        >
          Manage Event
        </Link>
      </div>
    </div>
  );
});
