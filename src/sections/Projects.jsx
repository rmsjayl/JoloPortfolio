import PROJECTSTYLE from "@styles/components/projects.module.css";
import Cards from "@components/Cards";
import ILLUSTRATIONS from "@assets/illustration";

const Projects = () => {
  const irushTools = ["ReactJS", "CSS", "NodeJS", "ExpressJS", "MongoDB"];
  const streetwiseTools = ["ReactJS", "CSS", "NodeJS", "ExpressJS", "MongoDB"];
  const vowelCheckerTools = ["HTML", "CSS", "JavaScript"];
  const stopwatchTimerTools = ["HTML", "CSS", "JavaScript"];
  const todoListTools = ["ReactJS", "CSS", "NodeJs", "ExpressJS", "MySQL"];
  const worldClockTools = ["TailwindCSS", "ReactJS"];

  const randomIndex = Math.floor(Math.random() * ILLUSTRATIONS.length);

  let array = [];

  const checkDuplicate = (index) => {
    if (array.includes(index)) {
      return true;
    } else {
      array.push(index);
      return false;
    }
  };

  const getRandomImage = () => {
    let index = randomIndex;
    while (checkDuplicate(index)) {
      index = Math.floor(Math.random() * ILLUSTRATIONS.length);
    }
    return ILLUSTRATIONS[index].image;
  };

  return (
    <div className={PROJECTSTYLE.container} id="Projects">
      <span className={PROJECTSTYLE.header}> Sample Projects </span>
      <small>
        Browse my{" "}
        <a href="https://github.com/rmsjayl" target="_blank">
          <span className={PROJECTSTYLE.githubEmphasis}>GITHUB</span>
        </a>{" "}
        for more
      </small>
      <div className={PROJECTSTYLE.containerWrapper}>
        <Cards
          href="https://github.com/rmsjayl/Official-iRUSH"
          title="iRUSH"
          src={getRandomImage()}
          description="A web-based application that serves as a Service Helpdesk for user enrollment needs. Users can submit complaints, concerns, and inquiries related to enrollment."
          toolUsed={
            <ul className={PROJECTSTYLE.toolsUtilized}>
              {irushTools.map((tool, key) => (
                <li key={key} className={PROJECTSTYLE.tools}>
                  {tool}
                </li>
              ))}
            </ul>
          }
        />
        <Cards
          href="https://github.com/rmsjayl/StreetwiseGraphicsOfficial"
          title="Streetwise Graphics"
          src={getRandomImage()}
          description="A portfolio website for a client to showcase their graphic design works. It has a contact form that can be used by potential clients to get in touch with the creative talent behind the designs."
          toolUsed={
            <ul className={PROJECTSTYLE.toolsUtilized}>
              {streetwiseTools.map((tool, key) => (
                <li key={key} className={PROJECTSTYLE.tools}>
                  {tool}
                </li>
              ))}
            </ul>
          }
        />
        <Cards
          href="https://github.com/rmsjayl/Vowel-Checker-APP"
          title="Vowel Checker App"
          src={getRandomImage()}
          description="A web-based web-based application crafted for the specific purpose of determining whether a given word contains vowels."
          toolUsed={
            <ul className={PROJECTSTYLE.toolsUtilized}>
              {vowelCheckerTools.map((tool, key) => (
                <li key={key} className={PROJECTSTYLE.tools}>
                  {tool}
                </li>
              ))}
            </ul>
          }
        />
        <Cards
          href="https://github.com/rmsjayl/Stopwatch-Timer"
          title="Stopwatch Timer"
          src={getRandomImage()}
          description="A stopwatch timer that can be used to track time. It has a start, stop, pause, and reset. It also has a lap button that can be used to track the time of a certain event."
          toolUsed={
            <ul className={PROJECTSTYLE.toolsUtilized}>
              {stopwatchTimerTools.map((tool, key) => (
                <li key={key} className={PROJECTSTYLE.tools}>
                  {tool}
                </li>
              ))}
            </ul>
          }
        />
        <Cards
          href="https://github.com/rmsjayl/simple-to-do-list-app"
          title="To-do List app"
          src={getRandomImage()}
          description="A simple to-do list application that can be used to track your daily tasks. It has a create, read, update, and delete functionality to provide a seamless experience for users to manage their day-to-day responsibilities."
          toolUsed={
            <ul className={PROJECTSTYLE.toolsUtilized}>
              {todoListTools.map((tool, key) => (
                <li key={key} className={PROJECTSTYLE.tools}>
                  {tool}
                </li>
              ))}
            </ul>
          }
        />
        <Cards
          href="https://github.com/rmsjayl/vite-project"
          title="World Clock"
          src={getRandomImage()}
          description="A timekeeping application that showcases the current local time in the Philippines."
          toolUsed={
            <ul className={PROJECTSTYLE.toolsUtilized}>
              {worldClockTools.map((tool, key) => (
                <li key={key} className={PROJECTSTYLE.tools}>
                  {tool}
                </li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Projects;
