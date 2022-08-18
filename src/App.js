import data from "./data";
import Contest from "./Contest.js";

function App() {

  let content = data.map((contest) => Contest({ ...contest, notify: true }));

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

        <section id="display">
          {content}
        </section>
      </main>
    </div>
  );
}

export default App;
