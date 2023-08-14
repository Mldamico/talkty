import { Link } from "react-router-dom";
import { MdOutlineErrorOutline } from "react-icons/md";
export const NotFound = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-8 bg-white shadow-md">
      <MdOutlineErrorOutline size={36} />
      <h3 className="text-xl">
        Oops - we've looked everywhere but could not foind what you are looking
        for!
      </h3>
      <div className="px-3 py-2 text-blue-900 border border-blue-500 rounded-md bg-blue-50">
        <Link to="/activities">Return to activities</Link>
      </div>
    </div>
  );
};
