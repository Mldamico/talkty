import { useEffect, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Activity } from "../../../types/Activities";
import { Loading } from "../../../app/layout/Loading";
import { v4 as uuid } from "uuid";
import { Formik } from "formik";

export const ActivityForm = observer(() => {
  const { activityStore } = useStore();
  const { id } = useParams();
  const {
    createActivity,
    updateActivity,
    loading,
    loadingInitial,
    loadActivity,
  } = activityStore;
  const navigate = useNavigate();

  const [activity, setActivity] = useState<Activity>({
    id: "",
    title: "",
    description: "",
    category: "",
    date: "",
    city: "",
    venue: "",
  });

  useEffect(() => {
    if (id) loadActivity(id).then((activity) => setActivity(activity!));
  }, [id, loadActivity]);

  // const handleSubmit = (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   if (!activity.id) {
  //     activity.id = uuid();
  //     createActivity(activity).then(() => {
  //       navigate(`/activities/${activity.id}`);
  //     });
  //   } else {
  //     updateActivity(activity).then(() => {
  //       console.log("Navigating");
  //       navigate(`/activities/${activity.id}`);
  //     });
  //   }
  // };

  // const handleInputChange = (
  //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setActivity({ ...activity, [name]: value });
  // };

  if (loadingInitial) return <Loading content="Loading activity..." />;

  return (
    <div className="p-2 mt-4 bg-white">
      <Formik
        enableReinitialize
        initialValues={activity}
        onSubmit={(values) => console.log(values)}
      >
        {({ values: activity, handleChange, handleSubmit }) => (
          <form
            className="flex flex-col"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <input
              type="text"
              value={activity.title}
              name="title"
              onChange={handleChange}
              placeholder="Title"
              className="p-1 mb-2 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="description"
              value={activity.description}
              name="description"
              onChange={handleChange}
              className="p-1 mb-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Category"
              value={activity.category}
              onChange={handleChange}
              name="category"
              className="p-1 mb-2 border border-gray-300 rounded-md"
            />
            <input
              placeholder="Date"
              value={activity.date}
              type="date"
              name="date"
              onChange={handleChange}
              className="p-1 mb-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="City"
              value={activity.city}
              name="city"
              onChange={handleChange}
              className="p-1 mb-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Venue"
              value={activity.venue}
              name="venue"
              onChange={handleChange}
              className="p-1 mb-2 border border-gray-300 rounded-md"
            />
            <div className="flex items-center justify-end gap-6 px-4 py-2">
              <Link to="/activities" type="button" className="text-red-500">
                Cancel
              </Link>
              <button
                type="submit"
                disabled={loading}
                className="px-2 py-1 text-white bg-blue-500 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
});
