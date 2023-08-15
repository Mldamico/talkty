import { useEffect, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Activity } from "../../../types/Activities";
import { Loading } from "../../../app/layout/Loading";
import { v4 as uuid } from "uuid";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../../../app/common/form/Input";
import { TextArea } from "../../../app/common/form/TextArea";
import { SelectInput } from "../../../app/common/form/SelectInput";
import { categoryOptions } from "../../../app/common/options/categoryOptions";

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

  const validationSchema = Yup.object({
    title: Yup.string().required("The activity title is required"),
    description: Yup.string().required("The activity description is required"),
    category: Yup.string().required("The activity category is required"),
    date: Yup.string().required("The activity date is required"),
    venue: Yup.string().required("The activity venue is required"),
    city: Yup.string().required("The activity city is required"),
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
        validationSchema={validationSchema}
        enableReinitialize
        initialValues={activity}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit }) => (
          <Form
            className="flex flex-col"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <Input name="title" placeholder="Title" />

            <TextArea rows={3} placeholder="description" name="description" />
            <SelectInput
              options={categoryOptions}
              placeholder="Category"
              name="category"
            />
            <Input placeholder="Date" name="date" />
            <Input placeholder="City" name="city" />
            <Input placeholder="Venue" name="venue" />
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
          </Form>
        )}
      </Formik>
    </div>
  );
});
