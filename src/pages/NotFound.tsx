import { Link } from "react-router";

const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found Page.</h1>
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default NotFound;
