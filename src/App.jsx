import React, { useEffect } from "react";
import Contest from "./Contest";

import HackerRank from "./assets/hackerrank.png";
import HackerEarth from "./assets/hackerearth.png";
import CodeChef from "./assets/chef.png";
import CodeForces from "./assets/codeforces.png";
import AtCoder from "./assets/atcoder.png";
import LeetCode from "./assets/leetcode.png";
import Google from "./assets/google.png";
import Code from "./assets/code.png";
import Bug from "./assets/bug.png";
import Collab from "./assets/collaboration.png";


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
    // setContestData((prevTable) => {
    //   return prevTable.map((contest) => {
    //     return contest.name === id
    //       ? { ...contest, notify: !contest.notify }
    //       : contest;
    //   });
    // });
    console.log(id);
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
          <img src={CodeChef} alt="codechef" />
          <img src={Google} alt="google" />
          <img src={LeetCode} alt="leetcode" />
          <img src={HackerRank} alt="hackerrank" />
          <img src={CodeForces} alt="codeforces" />
          <img src={HackerEarth} alt="hackerearth" />
          <img src={AtCoder} alt="atcoder" />
        </aside>

        <section id="display">{content}</section>
      </main>

      <footer>
        <a href="#">
          <img src={Google} alt="site" />
        </a>
        <a href="#">
          <img src={Bug} alt="bug" />
        </a>
        <a href="#">
          <img src={Collab} alt="collab" />
        </a>
        <a href="#">
          <img src={Code} alt="code" />
        </a>
      </footer>
    </div>
  );
}

export default App;
