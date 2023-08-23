import { Link } from "react-router-dom";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import { LoginForm } from "../users/LoginForm";
import { RegisterForm } from "../users/RegisterForm";

export const HomePage = observer(() => {
  const { userStore, modalStore } = useStore();
  return (
    <div className="flex flex-col items-center justify-center masthead">
      <div>
        <h1 className="flex items-center justify-center gap-2 mb-4 text-6xl text-white">
          <img className="w-14" src="/assets/logo.png" alt="logo" />
          Talkty
        </h1>
        {userStore?.isLoggedIn ? (
          <>
            <h2 className="text-white">Welcome to Talkty</h2>
            <Link
              className="flex justify-center py-2 mt-2 text-white border-2 border-white"
              to="/activities"
            >
              Go to Activities!
            </Link>
          </>
        ) : (
          <div className="flex gap-2">
            <button
              className="flex justify-center flex-grow py-2 mt-2 text-white border-2 border-white"
              onClick={() => modalStore.openModal(<LoginForm />)}
            >
              Login
            </button>
            <button
              className="flex justify-center flex-grow py-2 mt-2 text-white border-2 border-white"
              onClick={() => modalStore.openModal(<RegisterForm />)}
            >
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
});
