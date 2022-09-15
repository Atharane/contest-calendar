import React from "react";
import Contest from "./Contest.js";

function App() {

  const [contestData, setContestData] = React.useState([
    {
      name: "reinvent",
      url: "https://www.hackerearth.com/challenges/hackathon/cheggs-hackathon/",
      start_time: "2022-09-12T14:35:00.000Z",
      end_time: "2022-10-02T18:25:00.000Z",
      duration: "1403700.0",
      site: "HackerEarth",
      in_24_hours: "No",
      status: "BEFORE",
      notify: false,
    },
    {
      name: "Bestie Programming Contest 2022 (AtCoder Heuristic Contest 014)",
      url: "https://atcoder.jp/contests/ahc014",
      start_time: "2022-09-17T06:00:00.000Z",
      end_time: "2022-10-01T10:00:00.000Z",
      duration: "1224000",
      site: "AtCoder",
      in_24_hours: "No",
      status: "BEFORE",
      notify: false,
    },
    {
      name: "UNICORN Programming Contest 2022(AtCoder Beginner Contest 269)",
      url: "https://atcoder.jp/contests/abc269",
      start_time: "2022-09-17T12:00:00.000Z",
      end_time: "2022-09-17T13:40:00.000Z",
      duration: "6000",
      site: "AtCoder",
      in_24_hours: "No",
      status: "BEFORE",
      notify: false,
    },
  ]);

  // fetch("https://kontests.net/api/v1/all")
  //   .then((res) => res.json())
  //   .then((data) =>
  //     setContestData(
  //       data.map((contest) => {
  //         contest.notify = false;
  //         return contest;
  //       })
  //     )
  //   );

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
      onClickHandler: () => addToList(contest.name),
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
