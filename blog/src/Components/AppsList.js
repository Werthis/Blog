import { Link } from "react-router-dom";

const AppList = ({ myApps, title }) => {
  return (
    <div className="app-list">
      <h1>{title}</h1>
      {myApps.map((myApp) => (
        <div className="myApp-preview" key={myApp.id}>
          <Link to={`/apps/${myApp.id}`}>
            <h2>{myApp.title}</h2>
            <p>Written by {myApp.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AppList;
