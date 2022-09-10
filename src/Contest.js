import React from "react";
import moment from "moment";

function App(props) {
  let platform_logo = "images/code.png";

  if (props.url.includes("hackerearth")) {
    platform_logo = "images/hackerearth.png";
  } else if (props.url.includes("hackerrank")) {
    platform_logo = "images/hackerrank.png";
  } else if (props.url.includes("codeforces")) {
    platform_logo = "images/codeforces.png";
  } else if (props.url.includes("codechef")) {
    platform_logo = "images/chef.png";
  } else if (props.url.includes("atcoder")) {
    platform_logo = "images/atcoder.png";
  } else if (props.url.includes("leetcode")) {
    platform_logo = "images/leetcode.png";
  } else if (props.url.includes("withgoogle")) {
    platform_logo = "images/google.png";
  }

  return (
    <div className="contest">
      <img className="platform" src={platform_logo} alt="bell" />
      <div className="details">
        <a href={props.url}>{props.name}</a>

        <div className="datetime">
          <span>
            {moment.utc(props.start_time).format("MMM Do, YYYY, dddd")}{" "}
          </span>

          <span className="time">
            {moment.utc(props.start_time).format("HH:mm")}
          </span>
          
        </div>
      </div>
      <img
        onClick={props.onClickHandler}
        className="bell"
        src={props.notify ? "images/active_bell.png" : "images/bell.png"}
        alt="bell"
      />
    </div>
  );
}

export default App;
