import { observer } from "mobx-react-lite";

export const ActivityDetailedChat = observer(() => {
  return (
    <div className="my-2 bg-white shadow-md">
      <div className="p-2 text-center text-white bg-blue-400">
        <h4 className="text-xl font-semibold">Chat about this event</h4>
      </div>
      <div>
        <div>
          <div className="flex gap-4 m-4">
            <img
              className="rounded-full w-28"
              src="/assets/user.png"
              alt="user"
            />
            <div>
              <p>
                <span className="text-lg font-bold">Matt</span>
                <span className="ml-2 text-sm font-light">
                  - Today at 5:42PM
                </span>
              </p>

              <p className="font-semibold">How artistic!</p>
              <div className="mt-2">
                <button className="font-light">Reply</button>
              </div>
            </div>
          </div>

          <div className="flex gap-4 m-4">
            <img
              className="rounded-full w-28"
              src="/assets/user.png"
              alt="user"
            />
            <div>
              <p>
                <span className="text-lg font-bold">Joe Henderson</span>
                <span className="ml-2 text-sm font-light">- 5 days ago</span>
              </p>

              <p className="font-semibold">
                Dude, this is awesome. Thanks so much
              </p>
              <div className="mt-2">
                <button className="font-light">Reply</button>
              </div>
            </div>
          </div>

          <form className="flex flex-col items-center justify-center gap-4 pb-4">
            <textarea className="w-[80%] p-4 border-2 resize-none" />
            <button className="px-3 py-2 text-white bg-blue-400 rounded-md">
              Add Reply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});
