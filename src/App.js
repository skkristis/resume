import "./styles/App.css";

import linkedinPng from "./img/linkedin.svg";
import twitterPng from "./img/twitter.svg";
import githubPng from "./img/github.svg";
import blogPng from "./img/blog.svg";

import FlexContainer from "./components/FlexContainer";
import SectionContainer from "./components/SectionContainer";
import ArticleList from "./components/ArticleList";
import Pill from "./components/Pill";

function App() {
  const ArticleListInfo = [
    {
      title: "JOB POSITION",
      company: "Company",
      timeStart: "2018",
      timeEnd: "present",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.",
      list: ["Lorem ipsum dolor", "Consectetur adipiscing elit"],
    },
    {
      title: "JOB POSITION",
      company: "Company",
      timeStart: "2017",
      timeEnd: "2018",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.",
      list: ["Lorem ipsum dolor", "Consectetur adipiscing elit"],
    },
    {
      title: "JOB POSITION",
      company: "Company",
      timeStart: "2015",
      timeEnd: "2017",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.",
      list: ["Lorem ipsum dolor", "Consectetur adipiscing elit"],
    },
  ]; // would be fethed info from DB

  return (
    <div className="App">
      <div className="sleeve-first"></div>
      <div className="container">
        <header>
          <h1>sophie alpert</h1>
          <h3>programmer</h3>
        </header>
        <main>
          <FlexContainer>
            <SectionContainer title="LINKS">
              <ul>
                <li>
                  <img src={linkedinPng} alt="linkedin" />
                  <p>
                    <span>linkedin</span>/username
                  </p>
                </li>
                <li>
                  <img src={twitterPng} alt="twitter" />
                  <p>
                    <span>twitter</span>/@user-handle
                  </p>
                </li>
                <li>
                  <img src={githubPng} alt="github" />
                  <p>
                    <span>github</span>/username
                  </p>
                </li>
                <li>
                  <img src={blogPng} alt="blog" />
                  <p>
                    <span>blog</span>/blog-name
                  </p>
                </li>
              </ul>
            </SectionContainer>
            <SectionContainer title="ABOUT ME">
              <p className="not-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus
                eleifend diam vel tempor lacinia. Suspendisse non augue egestas,
                dapibus justo et, lobortis ex. Nullam tortor diam, venenatis at
                enim a, lacinia porttitor erat. Vivamus tempor dictum leo id
                aliquam. Praesent elit lacus, tempus ac vehicula in, imperdiet
                dapibus elit. Nullam scelerisque euismod leo id vestibulum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ut justo libero. Vestibulum vitae mattis diam.
              </p>
            </SectionContainer>
          </FlexContainer>
          <FlexContainer>
            <SectionContainer title="EDUCATION">
              <p>
                <span>school name</span> <br />
                2009 - 2013 <br />
                Degree
              </p>
              <div className="hr static"></div>
              <p>
                <span>school name</span> <br />
                2009 - 2013 <br />
                Degree
              </p>
            </SectionContainer>
            <FlexContainer className="flex-container-sub">
              <SectionContainer title="PERSONAL SKILLS">
                <Pill color="green">teamwork</Pill>
                <Pill color="yellow">communication</Pill>
                <Pill color="red">organization</Pill>
              </SectionContainer>
              <SectionContainer title="TECHNICAL SKILLS">
                <Pill color="green">html</Pill>
                <Pill color="green">css/scss</Pill>
                <Pill color="yellow">javascript</Pill>
                <Pill color="yellow">react.js</Pill>
              </SectionContainer>
            </FlexContainer>
          </FlexContainer>
          <SectionContainer title="WORK EXPERIENCE" className="work-exp">
            <ArticleList ArticleListInfo={ArticleListInfo} />
          </SectionContainer>
        </main>
        <div className="hr static"></div>
        <footer>
          <div className="container-pg">
            <article>
              <h3>location</h3>
              <p>Porto, Portugal</p>
            </article>
            <article>
              <h3>contact</h3>
              <p>
                <a href="tel:+37060000333 ">+37060000333</a>, <br />
                <a href="mailto: email@test.dev">email@test.dev</a>
              </p>
            </article>
            <article>
              <h3>social</h3>
              <p>
                <a target="_blank" href="https://www.linkedin.com/in/username">
                  LinkedIn/username
                </a>{" "}
                <br />
                <a target="_blank" href="https://twitter.com/user-handle">
                  Twitter/@user-handle
                </a>
              </p>
            </article>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
