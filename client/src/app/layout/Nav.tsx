import { useStore } from "../stores/store";

export const Nav = () => {
  const { activityStore } = useStore();
  return (
    <div className="fixed top-0 w-full text-white nav">
      <div className="flex items-center max-w-2xl gap-6 p-3 m-auto lg:max-w-4xl xl:max-w-6xl">
        <header className="flex items-center gap-3">
          <img className="w-8" src="/assets/logo.png" alt="Logo" />
          <h3>Talkty</h3>
        </header>
        <div className="">Activities</div>
        <button
          className="p-2 bg-green-600 rounded-md"
          onClick={() => activityStore.openForm()}
        >
          Create Activity
        </button>
      </div>
    </div>
  );
};
