import { Activity } from "../../../types/Activities";

interface ActivityFormProps {
  closeForm: () => void;
  activity: Activity | undefined;
}

export const ActivityForm = ({ activity, closeForm }: ActivityFormProps) => {
  return (
    <div className="p-2 mt-4 bg-white">
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="Title"
          className="p-1 mb-2 border border-gray-300 rounded-md"
        />
        <textarea
          placeholder="description"
          className="p-1 mb-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Category"
          className="p-1 mb-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Date"
          className="p-1 mb-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="City"
          className="p-1 mb-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Venue"
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
