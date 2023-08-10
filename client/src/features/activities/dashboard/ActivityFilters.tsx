import Calendar from "react-calendar";
import { MdFilterAlt } from "react-icons/md";
export const ActivityFilters = () => {
  return (
    <>
      <div className="flex flex-col w-full gap-4 mb-4 bg-white shadow-md">
        <h3 className="flex items-center justify-center gap-2 py-2 text-xl font-semibold text-blue-400">
          Filters
          <span>
            <MdFilterAlt />
          </span>
        </h3>
        <div className="p-2 border-b border-b-gray-400">
          <p>All Activities</p>
        </div>
        <div className="p-2 border-b border-b-gray-400">
          <p>I'm going</p>
        </div>
        <div className="p-2">
          <p>I'm hosting</p>
        </div>
      </div>
      <Calendar />
    </>
  );
};
