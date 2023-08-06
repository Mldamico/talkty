import { useEffect, useState } from "react";
import { Activity } from "../../types/Activities";
import { Nav } from "./Nav";
import { ActivityDashboard } from "../../features/activities/dashboard/ActivityDashboard";
import agent from "../api/agent";
import { Loading } from "./Loading";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const { activityStore } = useStore();
  const [activities, setActivities] = useState<Activity[]>();
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  const handleDeleteActivity = (id: string) => {
    setSubmitting(true);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities!.filter((act) => act.id !== id)]);
      setSubmitting(false);
    });
  };

  if (activityStore.loadingInitial) return <Loading content="Loading..." />;
  return (
    <>
      <Nav />
      <div className="max-w-2xl mx-auto mt-24 lg:max-w-4xl xl:max-w-6xl">
        <ActivityDashboard
          activities={activityStore.activities}
          deleteActivity={handleDeleteActivity}
          submitting={submitting}
        />
      </div>
    </>
  );
}

export default observer(App);
