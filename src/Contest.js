function App(props) {
  const url = new URL(props.url);
  const platform = url.hostname.split(".")[1];
  console.log(platform)

  const platform_logos = {
    "codechef": "images/chef.png",
    "withgoogle": "images/google.png",
    "leetcode": "images/leetcode.png",
    "hackerrank": "images/hackerrank.png",
    "codeforces": "images/codeforces.png",
    "hackerearth": "images/hackerearth.png",
    "jp": "images/atcoder.png",
  }

  let platform_logo = platform_logos[platform];

  if (!platform_logo) {
    platform_logo = "images/codeforces.png";
  }

  return (
    <div className="contest">
      <img className="platform" src={platform_logo} alt="bell" />
      <div className="details">
        <a href={props.url}>{props.name}</a>

        <div className="datetime">
          <span> {props.start_time} </span>
          {/* <span> 8:00:00 PM </span> */}
          <span className="time"> 8:00:00 PM </span>
        </div>
      </div>
      <img
        className="bell"
        src={props.notify ? "images/active_bell.png" : "images/bell.png"}
        alt="bell"
      />
    </div>
  );
}

export default App;
