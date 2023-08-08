import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <div className="container mt-24">HomePage</div>
      <p>
        Go to <Link to="/activities">Activities</Link>
      </p>
    </>
  );
};
