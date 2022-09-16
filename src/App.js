import React from "react";
import Contest from "./Contest.js";

function App() {

  const [contestData, setContestData] = React.useState([
  {
    name: "ProjectEuler+",
    url: "https://hackerrank.com/contests/projecteuler",
    start_time: "2014-07-07T15:38:00.000Z",
    end_time: "2024-07-30T18:30:00.000Z",
    duration: "317616720.0",
    site: "HackerRank",
    in_24_hours: "No",
    status: "CODING",
  },
  {
    name: "The Very First Daisi™ Hackathon",
    url: "https://www.hackerearth.com/challenges/hackathon/the-very-first-daisitm-hackathon/",
    start_time: "2022-07-13T07:00:00.000Z",
    end_time: "2022-10-08T06:59:00.000Z",
    duration: "7516740.0",
    site: "HackerEarth",
    in_24_hours: "No",
    status: "CODING",
  },
  {
    name: "Web3athon",
    url: "https://web3athon.hackerearth.com/",
    start_time: "2022-08-18T03:00:00.000Z",
    end_time: "2022-09-20T04:59:00.000Z",
    duration: "2858340.0",
    site: "HackerEarth",
    in_24_hours: "No",
    status: "CODING",
  },
  {
    name: "Xiaomi Ode2Code 2.0",
    url: "https://www.hackerearth.com/challenges/hackathon/ode2code-20/",
    start_time: "2022-08-26T18:30:00.000Z",
    end_time: "2022-09-18T18:29:00.000Z",
    duration: "1987140.0",
    site: "HackerEarth",
    in_24_hours: "No",
    status: "CODING",
  },
  {
    name: "Urbanize Away",
    url: "https://www.hackerearth.com/challenges/hackathon/Urbanize-Away/",
    start_time: "2022-08-31T16:30:00.000Z",
    end_time: "2022-10-15T16:30:00.000Z",
    duration: "3888000.0",
    site: "HackerEarth",
    in_24_hours: "No",
    status: "CODING",
  },
  {
    name: "Shell.ai Hackathon",
    url: "https://www.hackerearth.com/challenges/competitive/shellai-hackathon-2022/",
    start_time: "2022-09-02T12:30:00.000Z",
    end_time: "2022-10-02T18:25:00.000Z",
    duration: "2613300.0",
    site: "HackerEarth",
    in_24_hours: "No",
    status: "CODING",
  },
  {
    name: "MoMo Hackathon 2022",
    url: "https://momo2022fr.hackerearth.com/",
    start_time: "2022-09-05T00:00:00.000Z",
    end_time: "2022-09-25T23:59:00.000Z",
    duration: "1814340.0",
    site: "HackerEarth",
    in_24_hours: "No",
    status: "CODING",
  },
  {
    name: "MoMo Hackathon 2022",
    url: "https://momo2022.hackerearth.com/",
    start_time: "2022-09-05T00:00:00.000Z",
    end_time: "2022-09-18T23:59:00.000Z",
    duration: "1209540.0",
    site: "HackerEarth",
    in_24_hours: "No",
    status: "CODING",
  },
  {
    name: "IBM zStudent Contest",
    url: "https://www.hackerearth.com/challenges/hackathon/ibm-z-student-contest-2022/",
    start_time: "2022-09-14T04:00:00.000Z",
    end_time: "2023-01-01T04:59:00.000Z",
    duration: "9421140.0",
    site: "HackerEarth",
    in_24_hours: "No",
    status: "CODING",
  },
  {
    name: "Great Learning Software Development \u0026 Engineering Admission Challenge",
    url: "https://www.hackerearth.com/challenges/competitive/great-learning-software-development-engineering-admission-challenge/",
    start_time: "2022-09-14T12:30:00.000Z",
    end_time: "2022-10-10T00:30:00.000Z",
    duration: "2203200.0",
    site: "HackerEarth",
    in_24_hours: "No",
    status: "CODING",
  },
  {
    name: "ICPC 2022 Online Challenge powered by HUAWEI - Problem 2",
    url: "https://codeforces.com/contestRegistration/1724",
    start_time: "2022-09-15T00:00:00.000Z",
    end_time: "2022-09-30T00:00:00.000Z",
    duration: "1296000",
    site: "CodeForces",
    in_24_hours: "Yes",
    status: "CODING",
  },
  {
    name: "ICPC 2022 Online Challenge powered by HUAWEI - Problem 1",
    url: "https://codeforces.com/contestRegistration/1723",
    start_time: "2022-09-15T00:00:00.000Z",
    end_time: "2022-09-30T00:00:00.000Z",
    duration: "1296000",
    site: "CodeForces",
    in_24_hours: "Yes",
    status: "CODING",
  },
  {
    name: "CodeNite - Beginner Round",
    url: "https://www.codechef.com/COBR2022",
    start_time: "2022-09-16 14:30:00 UTC",
    end_time: "2022-09-16 16:30:00 UTC",
    duration: "7200",
    site: "CodeChef",
    in_24_hours: "Yes",
    status: "BEFORE",
  },
  {
    name: "September Circuits '22",
    url: "https://www.hackerearth.com/challenges/competitive/september-circuits-22/",
    start_time: "2022-09-16T16:00:00.000Z",
    end_time: "2022-09-23T16:00:00.000Z",
    duration: "604800.0",
    site: "HackerEarth",
    in_24_hours: "Yes",
    status: "BEFORE",
  },
  {
    name: "‎",
    url: "https://www.hackerearth.com/challenges/hackathon/cheggs-hackathon/",
    start_time: "2022-09-16T18:25:00.000Z",
    end_time: "2022-10-02T18:25:00.000Z",
    duration: "1382400.0",
    site: "HackerEarth",
    in_24_hours: "Yes",
    status: "BEFORE",
  },
  {
    name: "Oracle OCI Hack Day Challenge",
    url: "https://hackerrank.com/contests/hackathon-oci",
    start_time: "2022-09-17T03:30:00.000Z",
    end_time: "2022-09-18T03:30:00.000Z",
    duration: "86400.0",
    site: "HackerRank",
    in_24_hours: "Yes",
    status: "BEFORE",
  },
  {
    name: "estie Programming Contest 2022（AtCoder Heuristic Contest 014）",
    url: "https://atcoder.jp/contests/ahc014",
    start_time: "2022-09-17T06:00:00.000Z",
    end_time: "2022-10-01T10:00:00.000Z",
    duration: "1224000",
    site: "AtCoder",
    in_24_hours: "No",
    status: "BEFORE",
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
  },
  {
    name: "Biweekly Contest 87",
    url: "https://leetcode.com/contest/",
    start_time: "2022-09-17T14:30:00.000Z",
    end_time: "2022-09-17T16:00:00.000Z",
    duration: "5400",
    site: "LeetCode",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "Weekly Contest 311",
    url: "https://leetcode.com/contest/",
    start_time: "2022-09-18T02:30:00.000Z",
    end_time: "2022-09-18T04:00:00.000Z",
    duration: "5400",
    site: "LeetCode",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "Round F 2022",
    url: "https://codingcompetitions.withgoogle.com/kickstart/schedule",
    start_time: "2022-09-18T17:00:00.000Z",
    end_time: "2022-09-18T20:00:00.000Z",
    duration: "10800.0",
    site: "Kick Start",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "Codeforces Round #821 (Div. 2)",
    url: "https://codeforces.com/contestRegistration/1733",
    start_time: "2022-09-19T14:35:00.000Z",
    end_time: "2022-09-19T16:35:00.000Z",
    duration: "7200",
    site: "CodeForces",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "Starters 57 (Rated for Div 2, 3 \u0026 4)",
    url: "https://www.codechef.com/START57",
    start_time: "2022-09-21 14:30:00 UTC",
    end_time: "2022-09-21 17:30:00 UTC",
    duration: "10800",
    site: "CodeChef",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "Ballerina Coding Challenge",
    url: "https://www.hackerearth.com/challenges/competitive/ballerina-coding-challenge/",
    start_time: "2022-09-21T23:01:00.000Z",
    end_time: "2022-09-24T22:59:00.000Z",
    duration: "259080.0",
    site: "HackerEarth",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "September Lunchtime 2022 (Rated for All) (Based on EJOI)",
    url: "https://www.codechef.com/LTIME112",
    start_time: "2022-09-23 14:30:00 UTC",
    end_time: "2022-09-23 17:30:00 UTC",
    duration: "10800",
    site: "CodeChef",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "Codeforces Round #822 (Div. 2)",
    url: "https://codeforces.com/contestRegistration/1734",
    start_time: "2022-09-23T14:35:00.000Z",
    end_time: "2022-09-23T16:35:00.000Z",
    duration: "7200",
    site: "CodeForces",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "TOYOTA MOTOR CORPORATION Programming Contest 2022(AtCoder Beginner Contest 270)",
    url: "https://atcoder.jp/contests/abc270",
    start_time: "2022-09-24T12:00:00.000Z",
    end_time: "2022-09-24T13:40:00.000Z",
    duration: "6000",
    site: "AtCoder",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "Codeforces Round (Div. 1 + Div. 2)",
    url: "https://codeforces.com/contestRegistration/1730",
    start_time: "2022-09-25T14:35:00.000Z",
    end_time: "2022-09-25T17:05:00.000Z",
    duration: "9000",
    site: "CodeForces",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "Build With Celo Hackathon '22",
    url: "https://build-with-celo.hackerearth.com/",
    start_time: "2022-09-26T07:01:00.000Z",
    end_time: "2022-11-19T07:59:00.000Z",
    duration: "4669080.0",
    site: "HackerEarth",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "Starters 58 (Rated for Div 2, 3 \u0026 4)",
    url: "https://www.codechef.com/START58",
    start_time: "2022-09-28 14:30:00 UTC",
    end_time: "2022-09-28 17:30:00 UTC",
    duration: "10800",
    site: "CodeChef",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "Quantum Science and Technology Hackathon 2022",
    url: "https://quantum-science-and-technology-hackathon-2022.hackerearth.com/",
    start_time: "2022-09-29T04:30:00.000Z",
    end_time: "2022-10-29T18:29:00.000Z",
    duration: "2642340.0",
    site: "HackerEarth",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "R1 RCM Software Engineer Hiring Challenge",
    url: "https://www.hackerearth.com/challenges/hiring/r1-rcm-software-engineer-hiring-challenge/",
    start_time: "2022-09-30T12:30:00.000Z",
    end_time: "2022-10-10T00:30:00.000Z",
    duration: "820800.0",
    site: "HackerEarth",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "Juspay Developer Hiring Challenge(Bangalore) - 2022",
    url: "https://www.hackerearth.com/challenges/hiring/juspay-developer-hiring-challengebangalore-2022/",
    start_time: "2022-09-30T12:30:00.000Z",
    end_time: "2022-10-02T18:25:00.000Z",
    duration: "194100.0",
    site: "HackerEarth",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "KYOCERA Programming Contest 2022（AtCoder Beginner Contest 271）",
    url: "https://atcoder.jp/contests/abc271",
    start_time: "2022-10-01T12:00:00.000Z",
    end_time: "2022-10-01T13:40:00.000Z",
    duration: "6000",
    site: "AtCoder",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "All Things e-Commerce - GeTS Hackathon",
    url: "https://www.hackerearth.com/challenges/hackathon/get-hack/",
    start_time: "2022-10-01T18:30:00.000Z",
    end_time: "2022-10-23T18:29:00.000Z",
    duration: "1900740.0",
    site: "HackerEarth",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "AtCoder Regular Contest 149",
    url: "https://atcoder.jp/contests/arc149",
    start_time: "2022-10-02T12:00:00.000Z",
    end_time: "2022-10-02T14:00:00.000Z",
    duration: "7200",
    site: "AtCoder",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "Codeforces Round (Div. 2)",
    url: "https://codeforces.com/contestRegistration/1735",
    start_time: "2022-10-02T14:35:00.000Z",
    end_time: "2022-10-02T16:35:00.000Z",
    duration: "7200",
    site: "CodeForces",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "Flexcar Codeathon",
    url: "https://www.hackerearth.com/challenges/hiring/flexcar-codeathon/",
    start_time: "2022-10-07T12:30:00.000Z",
    end_time: "2022-10-09T18:25:00.000Z",
    duration: "194100.0",
    site: "HackerEarth",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "Full Stack Developer Hiring Challenge",
    url: "https://www.hackerearth.com/challenges/hiring/full-stack-developer-siemens-healthineers-hiring-challenge/",
    start_time: "2022-10-07T12:30:00.000Z",
    end_time: "2022-10-17T00:30:00.000Z",
    duration: "820800.0",
    site: "HackerEarth",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "AtCoder Beginner Contest 272",
    url: "https://atcoder.jp/contests/abc272",
    start_time: "2022-10-08T12:00:00.000Z",
    end_time: "2022-10-08T13:40:00.000Z",
    duration: "6000",
    site: "AtCoder",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "OPPO Inspiration Cup",
    url: "https://www.hackerearth.com/challenges/competitive/oppo-inspiration-cup/",
    start_time: "2022-10-08T12:30:00.000Z",
    end_time: "2022-10-08T12:45:00.000Z",
    duration: "900.0",
    site: "HackerEarth",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "Mercedes-Benz Cloud Platform Developer Hiring Challenge v4.0",
    url: "https://www.hackerearth.com/challenges/hiring/mercedes-benz-cloud-platform-developer-hiring-challenge-v40/",
    start_time: "2022-10-08T12:30:00.000Z",
    end_time: "2022-10-16T18:25:00.000Z",
    duration: "712500.0",
    site: "HackerEarth",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "DTCC Grace Hopper Codeathon Challenge",
    url: "https://hackerrank.com/contests/dtcc-gracehopper-codeathon",
    start_time: "2022-10-14T11:30:00.000Z",
    end_time: "2022-10-15T04:00:00.000Z",
    duration: "59400.0",
    site: "HackerRank",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "Round G 2022",
    url: "https://codingcompetitions.withgoogle.com/kickstart/schedule",
    start_time: "2022-10-15T12:00:00.000Z",
    end_time: "2022-10-15T15:00:00.000Z",
    duration: "10800.0",
    site: "Kick Start",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "5th Online International Mathematics Olympiad 2022 - IEMATICS",
    url: "https://www.codechef.com/OIMO2022",
    start_time: "2022-10-15 12:30:00 UTC",
    end_time: "2022-10-15 15:30:00 UTC",
    duration: "10800",
    site: "CodeChef",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "ServiceNow AMS Code to Win",
    url: "https://hackerrank.com/contests/servicenow-ams-code-to-win",
    start_time: "2022-10-21T13:30:00.000Z",
    end_time: "2022-10-21T21:30:00.000Z",
    duration: "28800.0",
    site: "HackerRank",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "Codeforces Round (Div. 2)",
    url: "https://codeforces.com/contestRegistration/1732",
    start_time: "2022-10-23T10:05:00.000Z",
    end_time: "2022-10-23T12:05:00.000Z",
    duration: "7200",
    site: "CodeForces",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "Round H 2022",
    url: "https://codingcompetitions.withgoogle.com/kickstart/schedule",
    start_time: "2022-11-12T03:00:00.000Z",
    end_time: "2022-11-12T06:00:00.000Z",
    duration: "10800.0",
    site: "Kick Start",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "​",
    url: "https://www.hackerearth.com/challenges/hackathon/shift-hackathon-2022/",
    start_time: "2022-11-17T03:30:00.000Z",
    end_time: "2022-11-18T04:30:00.000Z",
    duration: "90000.0",
    site: "HackerEarth",
    in_24_hours: "No",
    status: "BEFORE",
  },
  {
    name: "Codeforces Round (Div. 2)",
    url: "https://codeforces.com/contestRegistration/1731",
    start_time: "2022-12-27T14:35:00.000Z",
    end_time: "2022-12-27T16:35:00.000Z",
    duration: "7200",
    site: "CodeForces",
    in_24_hours: "No",
    status: "BEFORE",
  },
]
);

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
