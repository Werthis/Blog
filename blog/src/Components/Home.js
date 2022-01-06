import { useState } from "react";

const Home = () => {
  const [myApps, setMyApps] = useState([
    {
      title: "Covid-19 Wolrd Map",
      body: "lorem ipsum...",
      author: "Werthis",
      id: 1,
    },
    {
      title: "Validation Form",
      body: "lorem ipsum...",
      author: "yoshi",
      id: 2,
    },
    {
      title: "Climate Wolrd Map",
      body: "lorem ipsum...",
      author: "Werthis",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {myApps.map((myApp) => (
        <div className="myApp-preview" key={myApp.id}>
          <h2>{myApp.title}</h2>
          <p>Written by {myApp.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
