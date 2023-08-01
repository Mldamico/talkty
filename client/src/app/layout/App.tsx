import axios from "axios";
import { useEffect, useState } from "react";
import { Activity } from "../../types/Activities";
import { Nav } from "./Nav";

function App() {
  const [activities, setActivities] = useState<Activity[]>();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/activities")
      .then((response) => setActivities(response.data));
  }, []);
  return (
    <>
      <Nav />
      <ul>
        {activities?.map((activity) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
