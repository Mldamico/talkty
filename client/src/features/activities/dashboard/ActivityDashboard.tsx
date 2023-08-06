import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";
import { ActivityDetails } from "../Details/ActivityDetails";
import { ActivityForm } from "../form/ActivityForm";
import { ActivityList } from "./ActivityList";

export const ActivityDashboard = observer(() => {
  const { activityStore } = useStore();
  const { selectedActivity, editMode } = activityStore;
  return (
    <div className="grid gap-4 grid-cols-[1.2fr_0.6fr]">
      <div className="">
        <ActivityList />
      </div>
      <div className="">
        {selectedActivity && !editMode && <ActivityDetails />}
        {editMode && <ActivityForm />}
      </div>
    </div>
  );
});
