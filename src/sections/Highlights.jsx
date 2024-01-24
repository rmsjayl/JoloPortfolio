import { useState } from "react";
import HIGHLIGHTSTYLE from "@styles/components/highlights.module.css";
import RESUME from "@docs/RAMOS_Resume.pdf";

const Highlights = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [ueHovered, setIsueHovered] = useState(false);
  const [ustHovered, setIsustHovered] = useState(false);
  const [blackfortHovered, setIsblackfortHovered] = useState(false);

  const onDownloadResumeClicked = () => {
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 10000);
  };

  const ueMouseEnter = () => {
    setIsueHovered(true);
  };

  const ueMouseLeave = () => {
    setIsueHovered(false);
  };

  const ustMouseLeave = () => {
    setIsustHovered(false);
  };

  const ustMouseEnter = () => {
    setIsustHovered(true);
  };

  const blackfortMouseLeave = () => {
    setIsblackfortHovered(false);
  };

  const blackfortMouseEnter = () => {
    setIsblackfortHovered(true);
  };

  return (
    <section className={HIGHLIGHTSTYLE.highlights} id="About">
      <div className={HIGHLIGHTSTYLE.container}>
        <div className={HIGHLIGHTSTYLE.about}>
          <div className={HIGHLIGHTSTYLE.header}>PROFILE</div>
          <div className={HIGHLIGHTSTYLE.paragraph} data-aos="fade-up">
            A <span>technology enthusiast</span> from
            <span> University of Santo Tomas </span> with a degree of{" "}
            <span>Bachelor of Science in Information Systems.</span> <br />
            <br />
            Specialized in building scalable web applications and working across
            fullstack with his <span> skills and procedures</span>. — Major in
            Service Management.
            <br />
            <br />I take pride in delivering services of
            <span> exceptional quality. </span> I embrace challenges with
            confidence and continuously strive to explore new learning
            opportunities.
            <br />
            <br />I possess a strong enthusiasm for full stack development,
            backed by a solid understanding of software engineering and
            experience with agile development methodology.
            <br />
            <br />
            Actively searching for opportunities to apply my skills and advance
            as a highly skilled full stack software engineer.
            <br />
            <br />
            Let's connect and discover thrilling opportunities for innovation in
            software projects.
            <div className={HIGHLIGHTSTYLE.downloadResume}>
              <a
                className={
                  !isClicked
                    ? `${HIGHLIGHTSTYLE.resumeButton}`
                    : `${HIGHLIGHTSTYLE.resumeButtonDisabled}`
                }
                onClick={onDownloadResumeClicked}
                href={RESUME}
                download="Jay Lord Ramos - Resume"
              >
                {!isClicked ? "Download resume" : "Resume downloaded"}
              </a>
            </div>
          </div>
        </div>

        <div
          onMouseEnter={ueMouseEnter}
          onMouseLeave={ueMouseLeave}
          className={HIGHLIGHTSTYLE.ue}
        >
          {!ueHovered ? (
            <>
              <div className={HIGHLIGHTSTYLE.redwarriorOverlay}>
                <div className={HIGHLIGHTSTYLE.header}>UE</div>
                <div className={HIGHLIGHTSTYLE.completionDateUe}>
                  <span> June 2017 - June 2019</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={HIGHLIGHTSTYLE.header}>UE</div>
              <div className={HIGHLIGHTSTYLE.subHeader}>
                University of the East — Manila
              </div>

              <div className={HIGHLIGHTSTYLE.additionalInfo}>
                <div className={HIGHLIGHTSTYLE.accomplishmentsUe}>
                  <ul>
                    <li>
                      SENIOR HIGHSCHOOL — SCIENCE, TECHNOLOGY, ENGINEERING,
                      MATHEMATICS TRACK
                    </li>
                    <li> Finished Grade 11 with Honors </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>

        <div
          className={HIGHLIGHTSTYLE.ust}
          onMouseEnter={ustMouseEnter}
          onMouseLeave={ustMouseLeave}
        >
          {!ustHovered ? (
            <>
              <div className={HIGHLIGHTSTYLE.tigerOverlay}>
                <div className={HIGHLIGHTSTYLE.header}>UST</div>
                <div className={HIGHLIGHTSTYLE.completionDateUST}>
                  <span> Aug 2019 - June 2023</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={HIGHLIGHTSTYLE.header}>UST</div>
              <div className={HIGHLIGHTSTYLE.subHeader}>
                University of Santo Tomas
              </div>

              <div className={HIGHLIGHTSTYLE.additionalInfo}>
                <div className={HIGHLIGHTSTYLE.accomplishmentsUst}>
                  <ul>
                    <li>
                      Bachelor of Science in Information Sytems - Major in
                      Service Management
                    </li>
                    <li>
                      Latin Honors: <span>CUM LAUDE</span>
                    </li>
                    <li>Dean's Lister A.Y 2021-2023</li>

                    <li> Rotaract UST A.Y 2019-2020 </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
        <div
          className={HIGHLIGHTSTYLE.blackfort}
          onMouseEnter={blackfortMouseEnter}
          onMouseLeave={blackfortMouseLeave}
        >
          {!blackfortHovered ? (
            <>
              <div className={HIGHLIGHTSTYLE.blackfortOverlay}>
                <div className={HIGHLIGHTSTYLE.header}>BLACKFORT PH</div>
                <div className={HIGHLIGHTSTYLE.completionDateBlackfort}>
                  <span> Feb 2023 - June 2023</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={HIGHLIGHTSTYLE.header}>BLACKFORT</div>
              <div className={HIGHLIGHTSTYLE.subHeader}>
                Blackfort Consulting, Inc.
              </div>
              <div className={HIGHLIGHTSTYLE.additionalInfo}>
                <div className={HIGHLIGHTSTYLE.accomplishmentsBlackfort}>
                  <ul>
                    <li>Software Engineer — Intern</li>
                    <li>
                      Worked on Agile methodology, which gained an exposure on
                      sprints.
                    </li>
                    <li>
                      Utilized Angular in Front-end Development to ensure the
                      end-user satisfaction.
                    </li>
                    <li>
                      Developed UI-UX designs to create visually appealing and
                      user-friendly interfaces.
                    </li>
                    <li>
                      Utilized Back-end development using Microsoft .NET
                      Framework and Swagger for testing Restful APIs.
                    </li>
                    <li>
                      Run Pipelines in Azure DevOps after successfully merged
                      the Pull request.
                    </li>
                    <li>
                      Version Control Systems, particularly GIT. For
                      modifications and collaborate efficiently with the team.
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
