import { Activity } from "../../../types/Activities";
import { ActivityDetails } from "../Details/ActivityDetails";
import { ActivityList } from "./ActivityList";

interface ActivityDashBoardProps {
  activities: Activity[];
}

export const ActivityDashboard = ({ activities }: ActivityDashBoardProps) => {
  return (
    <div className="grid gap-4 grid-cols-[1.2fr_0.6fr]">
      <div className="">
        <ActivityList activities={activities} />
      </div>
      <div className="">
        <ActivityDetails activity={activities[0]} />
      </div>
    </div>
  );
};
