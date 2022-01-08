import { useState, useEffect } from "react";
import AppList from "./AppsList";

const Home = () => {
  const [myApps, setMyApps] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/myApps")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data from server");
          }
          return res.json();
        })
        .then((data) => {
          setMyApps(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {myApps && <AppList myApps={myApps} title="All Apps" />}
    </div>
  );
};

export default Home;
