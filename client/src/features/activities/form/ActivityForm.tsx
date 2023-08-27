import { useEffect, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ActivityFormValues } from "../../../types/Activities";
import { Loading } from "../../../app/layout/Loading";
import { v4 as uuid } from "uuid";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../../../app/common/form/Input";
import { TextArea } from "../../../app/common/form/TextArea";
import { SelectInput } from "../../../app/common/form/SelectInput";
import { categoryOptions } from "../../../app/common/options/categoryOptions";
import { DateInput } from "../../../app/common/form/DateInput";

export const ActivityForm = observer(() => {
  const { activityStore } = useStore();
  const { id } = useParams();
  const { createActivity, updateActivity, loadingInitial, loadActivity } =
    activityStore;
  const navigate = useNavigate();

  const [activity, setActivity] = useState<ActivityFormValues>(
    new ActivityFormValues()
  );

  const validationSchema = Yup.object({
    title: Yup.string().required("The activity title is required"),
    description: Yup.string().required("The activity description is required"),
    category: Yup.string().required("The activity category is required"),
    date: Yup.string().required("The activity date is required"),
    venue: Yup.string().required("The activity venue is required"),
    city: Yup.string().required("The activity city is required"),
  });

  useEffect(() => {
    if (id)
      loadActivity(id).then((activity) =>
        setActivity(new ActivityFormValues(activity))
      );
  }, [id, loadActivity]);

  const handleFormSubmit = (activity: ActivityFormValues) => {
    if (!activity.id) {
      let newActivity = {
        ...activity,
        id: uuid(),
      };

      createActivity(newActivity).then(() => {
        navigate(`/activities/${newActivity.id}`);
      });
    } else {
      updateActivity(activity).then(() => {
        console.log("Navigating");
        navigate(`/activities/${activity.id}`);
      });
    }
  };

  if (loadingInitial) return <Loading content="Loading activity..." />;

  return (
    <div className="p-2 mt-4 bg-white">
      <h2 className="text-xl text-blue-600">Activity Details</h2>
      <Formik
        validationSchema={validationSchema}
        enableReinitialize
        initialValues={activity}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
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
            <DateInput
              placeholderText="Date"
              name="date"
              showTimeSelect
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
            />
            <h2 className="text-xl text-blue-600">Location Details</h2>
            <Input placeholder="City" name="city" />
            <Input placeholder="Venue" name="venue" />
            <div className="flex items-center justify-end gap-6 px-4 py-2">
              <Link to="/activities" type="button" className="text-red-500">
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isSubmitting || !dirty || !isValid}
                className={`disabled:bg-gray-400 px-2 py-1 text-white bg-blue-500 rounded-md`}
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
