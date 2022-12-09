import React from "react";
import moment from "moment";

function App({ contest, onClickHandler }) {
  let platform_logo = "images/code.png";

  if (contest.url.includes("hackerearth")) {
    platform_logo = "images/hackerearth.png";
  } else if (contest.url.includes("hackerrank")) {
    platform_logo = "images/hackerrank.png";
  } else if (contest.url.includes("codeforces")) {
    platform_logo = "images/codeforces.png";
  } else if (contest.url.includes("codechef")) {
    platform_logo = "images/chef.png";
  } else if (contest.url.includes("atcoder")) {
    platform_logo = "images/atcoder.png";
  } else if (contest.url.includes("leetcode")) {
    platform_logo = "images/leetcode.png";
  } else if (contest.url.includes("withgoogle")) {
    platform_logo = "images/google.png";
  }

  return (
    <div className="contest">
      <img className="platform" src={platform_logo} alt="bell" />
      <div className="details">
        <a href={contest.url}>{contest.name}</a>

        <div className="datetime">
          <span>
            {moment.utc(contest.start_time).format("MMM Do, YYYY, dddd")}{" "}
          </span>

          <span className="time">
            {moment.utc(contest.start_time).format("HH:mm")}
          </span>
          
        </div>
      </div>
      <img
        onClick={onClickHandler}
        className="bell"
        src={contest.notify ? "images/active_bell.png" : "images/bell.png"}
        alt="bell"
      />
    </div>
  );
}

export default App;
