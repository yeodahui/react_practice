import Menu from "../../Menu/Menu";

export default function Header({checkId, listName}) {
  return (
    <header>
      <h1>
        <span id="home" onClick={checkId}>
          React
        </span>
      </h1>
      <Menu checkId={checkId} listName={listName} />
    </header>
  );
}
