import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Contest from "./Contest";

import "./loader.css";
import HackerRank from "./assets/hackerrank.png";
import HackerEarth from "./assets/hackerearth.png";
import CodeChef from "./assets/chef.png";
import CodeForces from "./assets/codeforces.png";
import AtCoder from "./assets/atcoder.png";
import LeetCode from "./assets/leetcode.png";
import Google from "./assets/google.png";
import Code from "./assets/code.png";
import Bug from "./assets/bug.png";
import Collaborate from "./assets/collaboration.png";

function Loader() {
  return (
    <div
      aria-label="Orange and tan hamster running in a metal wheel"
      role="img"
      class="wheel-and-hamster"
    >
      <div class="wheel"></div>
      <div class="hamster">
        <div class="hamster__body">
          <div class="hamster__head">
            <div class="hamster__ear"></div>
            <div class="hamster__eye"></div>
            <div class="hamster__nose"></div>
          </div>
          <div class="hamster__limb hamster__limb--fr"></div>
          <div class="hamster__limb hamster__limb--fl"></div>
          <div class="hamster__limb hamster__limb--br"></div>
          <div class="hamster__limb hamster__limb--bl"></div>
          <div class="hamster__tail"></div>
        </div>
      </div>
      <div class="spoke"></div>
    </div>
  );
}

function App() {
  const [contestData, setContestData] = useState([]);

  useEffect(() => {
    fetch("https://kontests.net/api/v1/all")
      .then((response) => response.json())
      .then((data) => {
        // add notify and id property to each contest
        data.forEach((contest) => {
          contest.notify = false;
          contest.id = nanoid();
        });
        setContestData(data);
        console.log(data);
      });
  }, []);

  // switch state of notify property of clicked contest
  function toggleNotify(id) {
    setContestData((prevTable) => {
      return prevTable.map((contest) => {
        return contest.id === id
          ? { ...contest, notify: !contest.notify }
          : contest;
      });
    });
    console.log(id);
  }

  let content = contestData.map((contest) => (
    <Contest
      contest={contest}
      onClickHandler={() => toggleNotify(contest.id)}
      key={contest.id}
    />
  ));

  console.log("Page loaded");

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

        <section id="display">{
          content.length>0 ? content : <Loader />
        }</section>
      </main>

      <footer>
        <a href="atharane.biz" target="_blank">
          <img src={Google} alt="site" />
        </a>
        <a href="atharane.biz" target="_blank">
          <img src={Bug} alt="bug" />
        </a>
        <a href="atharane.biz" target="_blank">
          <img src={Collaborate} alt="collaborate" />
        </a>
        <a href="atharane.biz" target="_blank">
          <img src={Code} alt="code" />
        </a>
        {/* Copyright (c) 2023 Atharva Rane */}
      </footer>
    </div>
  );
}

export default App;
