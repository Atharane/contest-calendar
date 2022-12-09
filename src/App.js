import React, { useEffect } from "react";
import Contest from "./Contest.js";

function App() {
  const [contestData, setContestData] = React.useState([]);

  useEffect(() => {
    fetch("https://kontests.net/api/v1/all")
      .then((response) => response.json())
      .then((data) => {
        setContestData(data);
      });
  }, []);

  // log name of all contest who have notify: true
  console.log(contestData.filter((contest) => contest.notify === true));

  // switch state of notify property of clicked contest
  function toggleNotify(id) {
    setContestData((prevTable) => {
      return prevTable.map((contest) => {
        return contest.name === id
          ? { ...contest, notify: !contest.notify }
          : contest;
      });
    });
  }

  let content = contestData.map((contest) => (
    <Contest contest={contest} onClickHandler={toggleNotify} />
  ));

  console.log('Page loaded')

  return (
    <div className="App">
      <h1>Contest Calendar</h1>

      <main>
        <aside>
          <img src="images/chef.png" alt="code" />
          <img src="images/google.png" alt="code" />
          <img src="images/leetcode.png" alt="code" />
          <img src="images/hackerrank.png" alt="code" />
          <img src="images/codeforces.png" alt="code" />
          <img src="images/hackerearth.png" alt="code" />
          <img src="images/atcoder.png" alt="code" />
        </aside>

        <section id="display">{content}</section>
      </main>

      <footer>
        <a href="#">
          <img src="images/google.png" alt="site" />
        </a>
        <a href="#">
          <img src="images/bug.png" alt="bug" />
        </a>
        <a href="#">
          <img src="images/collaboration.png" alt="collab" />
        </a>
        <a href="#">
          <img src="images/source.png" alt="source code" />
        </a>
      </footer>
    </div>
  );
}

export default App;
