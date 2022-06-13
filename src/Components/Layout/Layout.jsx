import React, {useState} from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import Home from "../../pages/Home/Home";
import Document from "../../pages/Document/Document";
import Tutorial from "../../pages/Tutorial/Tutorial";
import Blog from "../../pages/Blog/Blog";
import Community from "../../pages/Community/Community";

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

export default function Layout() {
  const [listName, setListName] = useState("home");
  const checkId = e => {
    setListName(e.target.id);
  };

  return (
    <>
      <Header checkId={checkId} listName={listName} />
      <main>
        <Contents listName={listName} />
      </main>
      <Footer />
    </>
  );
}
