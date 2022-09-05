import { RingProgress, Text, HoverCard, Group } from "@mantine/core";
import { useEffect, useState } from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaMailBulk,
  FaTwitterSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { SiHtml5, SiCss3, SiExpress, SiMongodb } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import cv from "..//images/JUSTICE_ISREAL_AGBONMA_CV.pdf";

const profileImg =
  "https://res.cloudinary.com/isreal/image/upload/v1662247912/My%20portfolio%20Project/IMG_4050-removebg-preview_krtdts.png";

function RightSide() {
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [javasript, setJavasript] = useState(0);
  const [node, setNode] = useState(0);
  const [express, setExpress] = useState(0);
  const [mongo, setMongo] = useState(0);

  // RightSide();
  useEffect(() => {
    function htmlFunc() {
      if (html < 90) {
        setHtml(html + 1);
      }
    }
    htmlFunc();
    function cssFunc() {
      if (css < 80) {
        setCss(css + 1);
      }
    }
    cssFunc();
    function javasriptFunc() {
      if (javasript < 70) {
        setJavasript(javasript + 1);
      }
    }
    javasriptFunc();
    function nodeFunc() {
      if (node < 75) {
        setNode(node + 1);
      }
    }
    nodeFunc();
    function expressFunc() {
      if (express < 70) {
        setExpress(express + 1);
      }
    }
    expressFunc();
    function mongoDBfunc() {
      if (mongo < 90) {
        setMongo(mongo + 1);
      }
    }
    mongoDBfunc();
  }, [html, css, javasript, node, express, mongo]);

  return (
    <section className="right-side-container">
      <div className="top-details">
        <div className="profileImg-container">
          <img src={profileImg} alt="ProfileImg" />
        </div>
        <h1 className="my-name">Justice Isreal Agbonma</h1>
        <p className="software">{`< Software Developer />`}</p>
        <p className="lets-connect">Let's Connect</p>
        <div className="social-media-icons">
          <span>
            <Group>
              <HoverCard width={""} shadow="md">
                <HoverCard.Target>
                  <a href="https://justiceyba@gmail.com" target="blank">
                    <FaMailBulk className="social-icon mail" />
                  </a>
                </HoverCard.Target>
                <HoverCard.Dropdown
                  style={{
                    backgroundColor: "rgb(13, 21, 34)",
                    border: "1px solid rgba(65, 105, 225, 0.255)",
                    color: "rgb(150, 171, 217)",
                    padding: "2px 5px",
                  }}
                >
                  <Text size="sm">E-mail</Text>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>
          </span>
          <span>
            <Group>
              <HoverCard width={""} shadow="md">
                <HoverCard.Target>
                  <a
                    href="https://www.linkedin.com/in/justice-isreal-agbonma-314bbb188/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BfvAOUKn7RO2bADRrc36z8g%3D%3D"
                    target="blank"
                  >
                    <FaLinkedin className="social-icon linkedin" />
                  </a>
                </HoverCard.Target>
                <HoverCard.Dropdown
                  style={{
                    backgroundColor: "rgb(13, 21, 34)",
                    border: "1px solid rgba(65, 105, 225, 0.255)",
                    color: "rgb(150, 171, 217)",
                    padding: "2px 5px",
                  }}
                >
                  <Text size="sm">linkedIn</Text>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>
          </span>
          <span>
            <Group>
              <HoverCard width={""} shadow="md">
                <HoverCard.Target>
                  <a href="https://github.com/JusticeIsreal" target="blank">
                    <FaGithubSquare className="social-icon git" />
                  </a>
                </HoverCard.Target>
                <HoverCard.Dropdown
                  style={{
                    backgroundColor: "rgb(13, 21, 34)",
                    border: "1px solid rgba(65, 105, 225, 0.255)",
                    color: "rgb(150, 171, 217)",
                    padding: "2px 5px",
                  }}
                >
                  <Text size="sm">GitHub</Text>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>
          </span>
          <span>
            <Group>
              <HoverCard width={""} shadow="md">
                <HoverCard.Target>
                  <a
                    href="https://www.facebook.com/justice.agbonma"
                    target="blank"
                  >
                    <FaFacebookSquare className="social-icon fb" />
                  </a>
                </HoverCard.Target>
                <HoverCard.Dropdown
                  style={{
                    backgroundColor: "rgb(13, 21, 34)",
                    border: "1px solid rgba(65, 105, 225, 0.255)",
                    color: "rgb(150, 171, 217)",
                    padding: "2px 5px",
                  }}
                >
                  <Text size="sm">facebook</Text>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>
          </span>
          <span>
            <Group>
              <HoverCard width={""} shadow="md">
                <HoverCard.Target>
                  <a href="https://twitter.com/Justice_Israell" target="blank">
                    <FaTwitterSquare className="social-icon fb" />
                  </a>
                </HoverCard.Target>
                <HoverCard.Dropdown
                  style={{
                    backgroundColor: "rgb(13, 21, 34)",
                    border: "1px solid rgba(65, 105, 225, 0.255)",
                    color: "rgb(150, 171, 217)",
                    padding: "2px 5px",
                  }}
                >
                  <Text size="sm">twitter</Text>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>
          </span>
        </div>
      </div>

      {/* BRIEF INFO */}
      <div className="languages-container">
        <div>
          <p>Language : </p>
          <p>English</p>
        </div>
        <div>
          <p>Nationality : </p>
          <p>Nigerian</p>
        </div>
      </div>

      {/* SKILL SET */}
      <h3 className="skill-set">Sill Set :</h3>
      <div className="skill">
        <RingProgress
          size={80}
          background={"green"}
          thickness={7}
          roundCaps
          sections={[
            { value: 100 - html, color: " " },
            { value: html, color: "rgb(238, 123, 7, 0.7)" },
          ]}
          label={
            <Text
              color="rgb(150, 171, 217)"
              weight={40}
              align="center"
              size="sm"
            >
              <h4>
                {html}
                <sup style={{ fontSize: "10px" }}>%</sup>
              </h4>
              <p>{`<HTML/>`}</p>
            </Text>
          }
        />
        <RingProgress
          size={80}
          background={"green"}
          thickness={7}
          roundCaps
          sections={[
            { value: 100 - css, color: " " },
            { value: css, color: "rgb(238, 123, 7, 0.7)" },
          ]}
          label={
            <Text
              color="rgb(150, 171, 217)"
              weight={40}
              align="center"
              size="sm"
            >
              <h4>
                {css}
                <sup style={{ fontSize: "10px" }}>%</sup>
              </h4>
              <p>{`{CSS}`}</p>
            </Text>
          }
        />
        <RingProgress
          size={80}
          background={"green"}
          thickness={7}
          roundCaps
          sections={[
            { value: 100 - javasript, color: " " },
            { value: javasript, color: "rgb(238, 123, 7, 0.7)" },
          ]}
          label={
            <Text
              color="rgb(150, 171, 217)"
              weight={40}
              align="center"
              size="sm"
            >
              <h4>
                {javasript}
                <sup style={{ fontSize: "10px" }}>%</sup>
              </h4>
              <p>{`[JavaScript]`}</p>
            </Text>
          }
        />
        <RingProgress
          size={80}
          background={"green"}
          thickness={7}
          roundCaps
          sections={[
            { value: 100 - node, color: " " },
            { value: node, color: "rgb(238, 123, 7, 0.7)" },
          ]}
          label={
            <Text
              color="rgb(150, 171, 217)"
              weight={40}
              align="center"
              size="sm"
            >
              <h4>
                {node}
                <sup style={{ fontSize: "10px" }}>%</sup>
              </h4>
              <p>{`{Node js}`}</p>
            </Text>
          }
        />
        <RingProgress
          size={80}
          background={"green"}
          thickness={7}
          roundCaps
          sections={[
            { value: 100 - express, color: " " },
            { value: express, color: "rgb(238, 123, 7, 0.7)" },
          ]}
          label={
            <Text
              color="rgb(150, 171, 217)"
              weight={40}
              align="center"
              size="sm"
            >
              <h4>
                {express}
                <sup style={{ fontSize: "10px" }}>%</sup>
              </h4>
              <p>{`{Express}`}</p>
            </Text>
          }
        />
        <RingProgress
          size={80}
          background={"green"}
          thickness={7}
          roundCaps
          sections={[
            { value: 100 - mongo, color: " " },
            { value: mongo, color: "rgb(238, 123, 7, 0.7)" },
          ]}
          label={
            <Text
              color="rgb(150, 171, 217)"
              weight={40}
              align="center"
              size="sm"
            >
              <h4>
                {mongo}
                <sup style={{ fontSize: "10px" }}>%</sup>
              </h4>
              <p>{`{mongoDB}`}</p>
            </Text>
          }
        />
      </div>
      <p className="skill-set">Stack Set :</p>

      {/*stack slides */}
      <div className="stack-set">
        <span>
          <SiHtml5 />
        </span>
        <span>
          <SiCss3 />
        </span>
        <span>
          <DiJavascript />
        </span>
        <span>
          <FaReact />
        </span>
        <span>
          <FaNodeJs />
        </span>
        <span>
          <SiExpress />
        </span>
        <span>
          <SiMongodb />
        </span>
        <span>
          <CgFigma />
        </span>
      </div>
      <div className="punt">
        <marquee className="slideCont">
          <p>
            {"❖ HTML ❖"}

            {" CSS ❖"}

            {" Sass ❖"}

            {" Bootstrap ❖"}

            {" JavaScript ❖"}

            {" TypeScript ❖"}

            {" Jquery ❖"}

            {" GitHub ❖"}

            {" React.Js ❖"}

            {" Redux ❖"}

            {" Next ❖"}

            {" Node.Js ❖"}

            {" Express ❖"}

            {" MongoDB ❖"}

            {" MySQL ❖"}

            {" PostgreSQL ❖"}
          </p>
        </marquee>
      </div>

      {/* cv button */}
      <div className="cv-btn">
        <a href={cv} download>
          <button className="button-29">
            <h1>{"< Download Cv />"}</h1>
          </button>
        </a>
      </div>
    </section>
  );
}

export default RightSide;
