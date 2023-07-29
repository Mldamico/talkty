import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useState<any>();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/activities")
      .then((response) => setActivities(response.data));
  }, []);
  return (
    <>
      <h2 className="text-3xl">Talkty</h2>
      <ul>
        {activities?.map((activity: any) => (
          <li key={activities.id}>{activity.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
