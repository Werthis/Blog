import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="no-found">
      <h2>I am sorry but</h2>
      <p>That page cannot be found</p>
      <Link to={"/"}>Back to homepage</Link>
    </div>
  );
};

export default PageNotFound;
