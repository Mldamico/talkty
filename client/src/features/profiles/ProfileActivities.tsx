import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { format } from "date-fns";
import { useStore } from "../../app/stores/store";
import { UserActivity } from "../../types/profile";

const panes = [
  { menuItem: "Future Events", pane: { key: "future" } },
  { menuItem: "Past Events", pane: { key: "past" } },
  { menuItem: "Hosting", pane: { key: "hosting" } },
];

export default observer(function ProfileActivities() {
  const { profileStore } = useStore();
  const { loadUserActivities, profile, loadingActivities, userActivities } =
    profileStore;

  useEffect(() => {
    loadUserActivities(profile!.username);
  }, [loadUserActivities, profile]);

  return (
    <div className="grid grid-cols-2 gap-2">
      {userActivities.map((activity: UserActivity) => (
        <Link to={`/activities/${activity.id}`} key={activity.id}>
          <img
            src={`/assets/categoryImages/${activity.category}.jpg`}
            style={{ minHeight: 100, objectFit: "cover" }}
          />
          <div>
            <h3>{activity.title}</h3>
            <p>
              <div>{format(new Date(activity.date), "do LLL")}</div>
              <div>{format(new Date(activity.date), "h:mm a")}</div>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
});
