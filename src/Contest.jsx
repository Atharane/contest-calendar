import React from "react";

import HackerRank from "./assets/hackerrank.png";
import HackerEarth from "./assets/hackerearth.png";
import CodeChef from "./assets/chef.png";
import CodeForces from "./assets/codeforces.png";
import AtCoder from "./assets/atcoder.png";
import LeetCode from "./assets/leetcode.png";
import Google from "./assets/google.png";
import Code from "./assets/code.png";

import ActiveBell from "./assets/active_bell.png";
import InactiveBell from "./assets/bell.png";
import Live from "./assets/live.png";

function App({ contest, onClickHandler }) {
  function extractPlatformName(url) {
    const sites = {
      hackerearth: HackerEarth,
      hackerrank: HackerRank,
      codeforces: CodeForces,
      codechef: CodeChef,
      atcoder: AtCoder,
      leetcode: LeetCode,
      withgoogle: Google,
      default: Code,
    };

    let site = url.match(new RegExp(`${Object.keys(sites).join("|")}`));

    if (site === null) {
      site = "default";
    }

    return sites[site];
  }

  function convertTo12HourFormat(dateString) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString;
    }
    const options = {
      timeZone: "Asia/Kolkata",
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    return formattedDate.replace(" ", ", ");
  }

  function isLive(start_time, end_time) {}

  return (
    <div className="contest">
      <img
        className="contest--platform"
        src={extractPlatformName(contest.url)}
        alt="platform"
      />
      <div className="contest--details">
        <a href={contest.url} className="contest--name">
          {contest.name}
        </a>

        <div className="datetime">
          <span>{convertTo12HourFormat(contest.start_time)}</span>

          <span className="separator">⇀</span>

          <span>{convertTo12HourFormat(contest.end_time)}</span>
        </div>
      </div>

      {contest.status === "CODING" ? (
        <img className="live" src={Live} alt="live" />
      ) : (
        <img
          onClick={onClickHandler}
          className="bell"
          src={contest.notify ? ActiveBell : InactiveBell}
          alt="bell"
        />
      )}
    </div>
  );
}

export default App;
