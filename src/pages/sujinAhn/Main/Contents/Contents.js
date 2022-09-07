import { useState, useEffect } from "react";
import Feeds from "./Components/Feeds";
import Etc from "./Components/Etc";

const Contents = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch("/data/sujinAhn/feedInfoList.json")
      .then(res => res.json())
      .then(feedInfo => setFeeds(feedInfo));
  }, []);

  return (
    <main className="container">
      <div className="feeds">
        {feeds.map(feedList => (
          <Feeds key={feedList.id} feedList={feedList} />
        ))}
      </div>
      <Etc />
    </main>
  );
};

export default Contents;
