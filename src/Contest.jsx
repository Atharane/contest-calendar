import React from "react";
// import moment from "moment";

import HackerRank from "./assets/hackerrank.png";
import HackerEarth from "./assets/hackerearth.png";
import CodeChef from "./assets/chef.png";
import CodeForces from "./assets/codeforces.png";
import AtCoder from "./assets/atcoder.png";
import LeetCode from "./assets/leetcode.png";
import Google from "./assets/google.png";

import ActiveBell from "./assets/active_bell.png";
import InactiveBell from "./assets/bell.png";

function App({ contest, onClickHandler }) {
  let platform_logo = "images/code.png";

  if (contest.url.includes("hackerearth")) {
    platform_logo = HackerEarth;
  } else if (contest.url.includes("hackerrank")) {
    platform_logo = HackerRank;
  } else if (contest.url.includes("codeforces")) {
    platform_logo = CodeForces;
  } else if (contest.url.includes("codechef")) {
    platform_logo = CodeChef;
  } else if (contest.url.includes("atcoder")) {
    platform_logo = AtCoder;
  } else if (contest.url.includes("leetcode")) {
    platform_logo = LeetCode;
  } else if (contest.url.includes("withgoogle")) {
    platform_logo = Google;
  }

  function convertTo12HourFormat(dateString) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid date";
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


  return (
    <div className="contest">
      <img className="platform" src={platform_logo} alt="bell" />
      <div className="details">
        <a href={contest.url}>{contest.name}</a>

        <div className="datetime">
          <span>{convertTo24HourFormat(contest.start_time)}</span>

          <span className="separator">⇀</span>

          <span>{convertTo24HourFormat(contest.end_time)}</span>
        </div>
      </div>
      <img
        onClick={onClickHandler}
        className="bell"
        src={contest.notify ? ActiveBell : InactiveBell}
        alt="bell"
      />
    </div>
  );
}

export default App;
