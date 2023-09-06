import { observer } from "mobx-react-lite";
import Calendar from "react-calendar";
import { MdFilterAlt } from "react-icons/md";
import { useStore } from "../../../app/stores/store";
export const ActivityFilters = observer(() => {
  const {
    activityStore: { predicate, setPredicate },
  } = useStore();
  return (
    <>
      <div className="flex flex-col w-full mb-4 bg-white shadow-md">
        <h3 className="flex items-center justify-center gap-2 py-2 text-xl font-semibold text-blue-400">
          Filters
          <span>
            <MdFilterAlt />
          </span>
        </h3>
        <button
          className={`p-2 border-b border-b-gray-400 text-left ${
            predicate.has("all") && "bg-slate-100"
          }`}
          onClick={() => setPredicate("all", "true")}
        >
          All Activities
        </button>
        <button
          onClick={() => setPredicate("isGoing", "true")}
          className={`p-2 border-b border-b-gray-400 text-left ${
            predicate.has("isGoing") && "bg-slate-100"
          }`}
        >
          I'm going
        </button>
        <button
          className={`p-2  text-left ${
            predicate.has("isHost") && "bg-slate-100"
          }`}
          onClick={() => setPredicate("isHost", "true")}
        >
          I'm hosting
        </button>
      </div>
      <Calendar
        onChange={(date) => setPredicate("startDate", date as Date)}
        value={predicate.get("startDate") || new Date()}
      />
    </>
  );
});
