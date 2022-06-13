import React, {useState} from "react";
import Home from "./Components/Home";
import Document from "./Components/Document";
import Tutorial from "./Components/Tutorial";
import Blog from "./Components/Blog";
import Community from "./Components/Community";

function Contents({listName}) {
  if (listName === "home") {
    return <Home />;
  } else if (listName === "document") {
    return <Document />;
  } else if (listName === "tutorial") {
    return <Tutorial />;
  } else if (listName === "blog") {
    return <Blog />;
  } else if (listName === "community") {
    return <Community />;
  }
}

function App() {
  const [listName, setListName] = useState("home");
  const checkId = e => {
    setListName(e.target.id);
  };

  return (
    <>
      <header>
        <h1>
          <span id="home" onClick={checkId}>
            React
          </span>
        </h1>
        <nav>
          <ul>
            <li
              id="document"
              style={
                listName === "document"
                  ? {color: "dodgeblue"}
                  : {color: "black"}
              }
              onClick={checkId}
            >
              문서
            </li>
            <li
              id="tutorial"
              style={
                listName === "tutorial"
                  ? {color: "dodgeblue"}
                  : {color: "black"}
              }
              onClick={checkId}
            >
              자습서
            </li>
            <li
              id="blog"
              style={
                listName === "blog" ? {color: "dodgeblue"} : {color: "black"}
              }
              onClick={checkId}
            >
              블로그
            </li>
            <li
              id="community"
              style={
                listName === "community"
                  ? {color: "dodgeblue"}
                  : {color: "black"}
              }
              onClick={checkId}
            >
              커뮤니티
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Contents listName={listName} />
      </main>
    </>
  );
}

export default App;
