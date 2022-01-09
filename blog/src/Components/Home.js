import AppList from "./AppsList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: myApps,
    isPending,
    error,
  } = useFetch("http://localhost:8000/myApps");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {myApps && <AppList myApps={myApps} title="All Apps" />}
    </div>
  );
};

export default Home;
