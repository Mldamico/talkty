import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center masthead">
      <div>
        <h1 className="flex items-center justify-center gap-2 mb-4 text-6xl text-white">
          <img className="w-14" src="/assets/logo.png" alt="logo" />
          Talkty
        </h1>
        <h2 className="text-white">Welcome to Talkty</h2>
        <Link
          className="flex justify-center py-2 mt-2 text-white border-2 border-white"
          to="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
};
