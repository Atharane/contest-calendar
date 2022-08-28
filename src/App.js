import React from "react";

import data from "./data";
import Contest from "./Contest.js";

function App() {
  // covert the api data into preffered data
  const [contestData, setContestData] = React.useState(
    data.map((contest) => {
      contest.notify = false;
      return contest;
    })
  );

  // switch state of notify property of clicked contest
  function addToList(id) {
    setContestData((prevTable) => {
      return prevTable.map((contest) => {
        return contest.name === id
          ? { ...contest, notify: !contest.notify }
          : contest;
      });
    });
  }

  let content = contestData.map((contest) =>
    Contest({
      ...contest,
      id: contest.name,
      key: contest.start_time,
      notifyUser: addToList,
    })
  );

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
    </div>
  );
}

export default App;
