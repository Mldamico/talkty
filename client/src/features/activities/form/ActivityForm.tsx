import { ChangeEvent, useState } from "react";
import { Activity } from "../../../types/Activities";

interface ActivityFormProps {
  closeForm: () => void;
  activity: Activity | undefined;
}

export const ActivityForm = ({
  activity: selectedActivity,
  closeForm,
}: ActivityFormProps) => {
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    description: "",
    category: "",
    date: "",
    city: "",
    venue: "",
  };
  const [activity, setActivity] = useState(initialState);

  const handleSubmit = () => {
    console.log(activity);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
  };

  return (
    <div className="p-2 mt-4 bg-white">
      <form
        className="flex flex-col"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <input
          type="text"
          value={activity.title}
          name="title"
          onChange={handleInputChange}
          placeholder="Title"
          className="p-1 mb-2 border border-gray-300 rounded-md"
        />
        <textarea
          placeholder="description"
          value={activity.description}
          name="description"
          onChange={handleInputChange}
          className="p-1 mb-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Category"
          value={activity.category}
          onChange={handleInputChange}
          name="category"
          className="p-1 mb-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Date"
          value={activity.date}
          name="date"
          onChange={handleInputChange}
          className="p-1 mb-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="City"
          value={activity.city}
          name="city"
          onChange={handleInputChange}
          className="p-1 mb-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Venue"
          value={activity.venue}
          name="venue"
          onChange={handleInputChange}
          className="p-1 mb-2 border border-gray-300 rounded-md"
        />
        <div className="flex justify-between px-4 py-2">
          <button
            type="submit"
            className="px-2 py-1 text-white bg-blue-500 rounded-md"
          >
            Submit
          </button>
          <button
            type="button"
            className="text-red-500"
            onClick={() => closeForm()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
