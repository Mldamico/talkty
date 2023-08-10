import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

export const ActivityDetailedSidebar = observer(() => {
  return (
    <div className="my-2 bg-white shadow-md">
      <div className="p-2 text-center text-white bg-blue-400">
        3 People Going
      </div>
      <div>
        <div>
          <div className="flex gap-2 py-2 mx-6 border-b border-gray-300">
            <img className="w-28" src={"/assets/user.png"} alt="User" />
            <div>
              <h3 className="text-xl font-semibold">
                <Link to={`#`}>Bob</Link>
              </h3>
              <p className="text-blue-400">Following</p>
            </div>
          </div>

          <div className="flex gap-2 py-2 mx-6 border-b border-gray-300">
            <img className="w-28" src={"/assets/user.png"} alt="User" />
            <div>
              <h3 className="text-xl font-semibold">
                <Link to={`#`}>Tom</Link>
              </h3>
              <p className="text-blue-400">Following</p>
            </div>
          </div>

          <div className="flex gap-2 py-2 mx-6">
            <img className="w-28" src={"/assets/user.png"} alt="User" />
            <div>
              <h3 className="text-xl font-semibold">
                <Link to={`#`}>Sally</Link>
              </h3>
              <p className="text-blue-400">Following</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
