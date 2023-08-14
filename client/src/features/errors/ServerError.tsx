import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";

export const ServerError = observer(() => {
  const { commonStore } = useStore();
  return (
    <div className="container">
      <h1 className="mb-6 text-3xl font-bold">Server Error</h1>
      <h5 className="my-4 text-xl font-bold text-red-600">
        {commonStore.error?.message}
      </h5>
      {commonStore.error?.details && (
        <div className="p-2 overflow-auto bg-white">
          <h4 className="text-blue-600">Stack Trace</h4>
          <code className="mt-4">{commonStore.error.details}</code>
        </div>
      )}
    </div>
  );
});
