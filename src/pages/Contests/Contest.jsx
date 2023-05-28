import HackerRank from "../../assets/hackerrank.png";
import HackerEarth from "../../assets/hackerearth.png";
import CodeChef from "../../assets/chef.png";
import CodeForces from "../../assets/codeforces.png";
import AtCoder from "../../assets/atcoder.png";
import LeetCode from "../../assets/leetcode.png";
import Google from "../../assets/google.png";
import Code from "../../assets/code.png";

import ActiveBell from "../../assets/active_bell.png";
import InactiveBell from "../../assets/bell.png";
import Live from "../../assets/live.png";

function Contest({ contest, onClickHandler }) {
  function getPlatformLogo(url) {
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
    return formattedDate
  }

 function getGCalLink(name, start_time_string, end_time_string, url) {
   // Use regular expression to validate start_time and end_time strings
   const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.000Z$/;
   if (!regex.test(start_time_string) || !regex.test(end_time_string)) {
     return "#"
   }

   // Create Date objects from start_time and end_time strings
   const start_time = new Date(start_time_string);
   const end_time = new Date(end_time_string);

   // Format start_time and end_time to YYYYMMDDTHHmmssZ format
   const startTimeFormatted = start_time
     .toISOString()
     .replace(/-|:|\.\d+/g, "");
   const endTimeFormatted = end_time.toISOString().replace(/-|:|\.\d+/g, "");

   // Create the Google Calendar API link
   const link = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${name}&dates=${startTimeFormatted}/${endTimeFormatted}&details=${url}&location=&sf=true&output=xml`;

   return link;
 }

  return (
    <div className="contest">
      <img
        className="contest--platform"
        src={getPlatformLogo(contest.url)}
        alt="platform"
      />

      <div className="contest--details">
        <a href={contest.url} target="_blank" className="contest--name">
          {contest.name}
        </a>

        <div className="datetime">
          <span>{convertTo12HourFormat(contest.start_time)}</span>

          <span className="separator">⇀</span>

          <span>{convertTo12HourFormat(contest.end_time)}</span>
        </div>
      </div>

      {/* if contest is live, show a flickering "live" image else show a notify (bell) button */}
      {contest.status != "BEFORE" ? (
        <img className="live contest--status" src={Live} alt="live" />
      ) : (
        <a
          href={getGCalLink(
            contest.name,
            contest.start_time,
            contest.end_time,
            contest.url
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="contest--status"
        >
          <img
            // onClick={onClickHandler}
            className="bell"
            src={contest.notify ? ActiveBell : InactiveBell}
            alt="bell"
          />
        </a>
      )}
    </div>
  );
}

export default Contest;
