import axios from "axios";
import { useEffect, useState } from "react";
import { Activity } from "../../types/Activities";
import { Nav } from "./Nav";
import { ActivityDashboard } from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/activities")
      .then((response) => setActivities(response.data));
  }, []);

  if (!activities) return;
  return (
    <>
      <Nav />
      <div className="max-w-2xl mx-auto mt-24 lg:max-w-4xl xl:max-w-6xl">
        <ActivityDashboard activities={activities} />
      </div>
    </>
  );
}

export default App;
