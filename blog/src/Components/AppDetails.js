import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const AppDetails = () => {
  const { id } = useParams();
  const {
    data: myApps,
    isPending,
    error,
  } = useFetch("http://localhost:8000/myApps/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/myApps/" + myApps.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="app-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {myApps && (
        <article>
          <h2>{myApps.title}</h2>
          <p>Written by {myApps.author}</p>
          <div>{myApps.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default AppDetails;
