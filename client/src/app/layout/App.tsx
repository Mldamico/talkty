import axios from "axios";
import { useEffect, useState } from "react";
import { Activity } from "../../types/Activities";

function App() {
  const [activities, setActivities] = useState<Activity[]>();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/activities")
      .then((response) => setActivities(response.data));
  }, []);
  return (
    <>
      <h2 className="text-3xl">Talkty</h2>
      <ul>
        {activities?.map((activity) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
