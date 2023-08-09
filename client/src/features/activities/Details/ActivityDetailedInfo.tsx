import { observer } from "mobx-react-lite";
import { Activity } from "../../../types/Activities";
import { IoInformationOutline, IoCalendarClearOutline } from "react-icons/io5";
import { LiaMapMarkerSolid } from "react-icons/lia";
interface Props {
  activity: Activity;
}

export const ActivityDetailedInfo = observer(({ activity }: Props) => {
  return (
    <div className="my-4 bg-white shadow-md">
      <div className="p-4 border-b border-gray-300">
        <div className="flex items-center gap-2">
          <IoInformationOutline />
          <div>
            <p>{activity.description}</p>
          </div>
        </div>
      </div>
      <div className="p-4 border-b border-gray-300">
        <div className="flex items-center gap-2">
          <IoCalendarClearOutline />
          <div>
            <span>{activity.date}</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <LiaMapMarkerSolid />

          <div>
            <span>
              {activity.venue}, {activity.city}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
