export default function Menu({listName, checkId}) {
  return (
    <nav>
      <ul>
        <li id="document" onClick={checkId}>
          문서
        </li>
        <li id="tutorial" onClick={checkId}>
          자습서
        </li>
        <li id="blog" onClick={checkId}>
          블로그
        </li>
        <li id="community" onClick={checkId}>
          커뮤니티
        </li>
      </ul>
    </nav>
  );
}
