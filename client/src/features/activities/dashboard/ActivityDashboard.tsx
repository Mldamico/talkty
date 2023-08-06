import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";
import { Activity } from "../../../types/Activities";
import { ActivityDetails } from "../Details/ActivityDetails";
import { ActivityForm } from "../form/ActivityForm";
import { ActivityList } from "./ActivityList";

interface ActivityDashBoardProps {
  activities: Activity[];
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export const ActivityDashboard = observer(
  ({ activities, deleteActivity, submitting }: ActivityDashBoardProps) => {
    const { activityStore } = useStore();
    const { selectedActivity, editMode } = activityStore;
    return (
      <div className="grid gap-4 grid-cols-[1.2fr_0.6fr]">
        <div className="">
          <ActivityList
            activities={activities}
            deleteActivity={deleteActivity}
            submitting={submitting}
          />
        </div>
        <div className="">
          {selectedActivity && !editMode && <ActivityDetails />}
          {editMode && <ActivityForm />}
        </div>
      </div>
    );
  }
);
