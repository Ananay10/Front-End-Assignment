import React, { useEffect, useState } from "react";
import Holder from "../../Hoc/holder";
import axios from "axios";
import { FaChevronRight, FaChevronLeft, FaArrowRight } from "react-icons/fa";
import Newslogo from "../../assets/newslogo.svg";
import classes from "./News.css";

const NewsUpdate = () => {
  const [articles, setArticles] = useState([]);
  const [x, setX] = useState(0);

  const api_key = "c6a1adbb29f74f2eb5a2a5c54c6f51da";
  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?q=COVID&country=in&apiKey=${api_key}`
      )
      .then((response) => {
        let NewsArticle = response.data.articles.slice(0, 10);
        // console.log(NewsArticle);
        setArticles(NewsArticle);
      });
  }, []);

  const Left = () =>
    x === 0 ? setX(-100 * (articles.length - 1)) : setX(x + 100);
  const Right = () =>
    x === -100 * (articles.length - 1) ? setX(0) : setX(x - 100);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       Right();
//     }, 10000);
//     return () => clearInterval(timer);
//   }, [articles, x, setX]);

  const NewsTime = (time) => {
    let Fulltime = new Date(time).toString().split(" ");
    let date = `${Fulltime[1]} ${Fulltime[2]}, ${Fulltime[3]}  `;
    let timeclock = Fulltime[4].split(":");
    let midday = "AM";
    if (timeclock[0] > 12) {
      timeclock[0] -= 12;
      midday = "PM";
    }
    let timeString = `${timeclock[0]}:${timeclock[1]} ${midday}`;
    return `${date} at ${timeString}`;
  };

  return (
    <div className={classes.NewsUpdate}>
      <Holder>
        <div className={classes.Slider}>
          {articles.map((article, index) => (
            <div
              className={classes.NewsCard}
              key={index}
              style={{ transform: `translateX(${x}%)` }}
            >
              <div>
                <img src={Newslogo} height="150px" width="130px"/>
              </div>
              <div className={classes.NewsInfo}>
                <span>News and Updates</span>
                <div className={classes.NewsTitle}>{article.title}</div>
                <div className={classes.NewsTime}>
                  Posted on: {NewsTime(article.publishedAt)}
                </div>
                <div className={classes.NewsDesc}>
                  <span>
                    <a href={article.url}>
                      Read More <FaArrowRight />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={() => Left()}
            className={[classes.NavigationButtons, classes.GoLeft].join(" ")}>
            <FaChevronLeft />
          </button>
          <button
            onClick={() => Right()}
            className={[classes.NavigationButtons, classes.GoRight].join(" ")} >
            <FaChevronRight />
          </button>
        </div>
      </Holder>
    </div>
  );
};

export default NewsUpdate;
