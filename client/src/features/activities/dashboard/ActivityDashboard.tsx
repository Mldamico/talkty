import { Activity } from "../../../types/Activities";
import { ActivityDetails } from "../Details/ActivityDetails";
import { ActivityForm } from "../form/ActivityForm";
import { ActivityList } from "./ActivityList";

interface ActivityDashBoardProps {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  handleSelectActivity: (id: string) => void;
  handleCancelSelectActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
}

export const ActivityDashboard = ({
  activities,
  selectedActivity,
  handleSelectActivity,
  handleCancelSelectActivity,
  editMode,
  openForm,
  closeForm,
  createOrEdit,
  deleteActivity,
}: ActivityDashBoardProps) => {
  return (
    <div className="grid gap-4 grid-cols-[1.2fr_0.6fr]">
      <div className="">
        <ActivityList
          activities={activities}
          deleteActivity={deleteActivity}
          handleSelectActivity={handleSelectActivity}
        />
      </div>
      <div className="">
        {selectedActivity && !editMode && (
          <ActivityDetails
            activity={selectedActivity}
            cancelSelectActivity={handleCancelSelectActivity}
            openForm={openForm}
          />
        )}
        {editMode && (
          <ActivityForm
            createOrEdit={createOrEdit}
            closeForm={closeForm}
            activity={selectedActivity}
          />
        )}
      </div>
    </div>
  );
};
