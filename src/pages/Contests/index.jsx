import { useState, useEffect } from "react"
import { nanoid } from "nanoid"

import Contest from "./Contest"
import Loader from "./Loader"

import HackerRank from "../../assets/hackerrank.png"
import HackerEarth from "../../assets/hackerearth.png"
import CodeChef from "../../assets/chef.png"
import CodeForces from "../../assets/codeforces.png"
import AtCoder from "../../assets/atcoder.png"
import LeetCode from "../../assets/leetcode.png"
import Google from "../../assets/google.png"
import Code from "../../assets/code.png"
import Bug from "../../assets/bug.png"
import Collaborate from "../../assets/collaboration.png"

const ContestContainer = () => {
  const [contestData, setContestData] = useState([])

  useEffect(() => {
    fetch("https://kontests.net/api/v1/all")
      .then(response => response.json())
      .then(data => {
        // add notify and id property to each contest
        data.forEach(contest => {
          contest.notify = false
          contest.id = nanoid()
        })
        setContestData(data)
      })
  }, [])

  // function toggleNotify(id) {
  //   setContestData(prevTable => {
  //     return prevTable.map(contest => {
  //       return contest.id === id
  //         ? { ...contest, notify: !contest.notify }
  //         : contest
  //     })
  //   })
  // }

  let content = contestData.map(contest => (
    <Contest
      contest={contest}
      onClickHandler={() => toggleNotify(contest.id)}
      key={contest.id}
    />
  ))

  return (
    <>
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

        <section id="display">
          {content.length > 0 ? content : <Loader />}
        </section>
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

        <p>Copyright (c) 2023 Atharva Rane</p>
      </footer>
    </>
  )
}

export default ContestContainer