import React, {  useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { DoubleSide } from "three";
import Folder from "./Folder";
import TypewriterText from "./TypewriterText";
import Project from "./Project";
export function Monitor({ isAtPC }) {
  const { gl } = useThree();


  const [projectsTab, setProjectsTab] = useState(false);
  const [currentProject, setCurrentProject] = useState("Projects");
  const projects = {
    "rashnor.com": {
      description:
        "My personal portfolio website, built around a 3d world, using handcrafted 3d assets with Blender, the website showcases my personal info, skills, bio, and projects.",
      stacks: ["Next.js/React.js", "Three.js", "React Three Fiber", "Blender", "Theatre.js"],
      projectLink: "https://rashnor.com/",
      githubLink: "https://github.com/Rasheednour/rashnor.com",
      gifSrc: "rashnor_dev.gif",
    },
    "PromptyDumpty": {
      description:
        "A web application designed to inspire creativity and facilitate the sharing of AI prompts for platforms like ChatGPT and Midjourney.",
      stacks: [
        "Next.js/React.js",
        "Typescript/Tailwind",
        "MongoDB/Mongoose",
        "Firebase",
      ],
      projectLink: "https://promptydumpty-pp86pxgil-rasheednour.vercel.app/",
      githubLink: "https://github.com/Rasheednour/promptydumpty",
      gifSrc: "prompty_dumpty.gif",
    },
    "TCG_Central": {
      description:
        "An interactive application for designing and playing user-created Trading Card Games. It features extensive customization tools, deck building, game rule creation, and community sharing features.",
      stacks: [
        "Javascript/React.js",
        "Express.js/Node.js",
        "GCP/Firebase",
        "Phaser3",
      ],
      projectLink: "https://tcg-central-backend.ew.r.appspot.com/",
      githubLink: "https://github.com/Rasheednour/TCG-Central",
      gifSrc: "tcg_central.gif",
    },
    "Posts_API": {
      description:
        "A REST API representing a simple social media application with support for user authentication, userposts, and comments.",
      stacks: ["Javascript/Pug", "Express.js/Node.js", "GCP/Google OAuth 2.0"],
      projectLink:
        "https://drive.google.com/file/d/1jVhmBvhAbVc3hE1X8ZCrpFHnon8dKRk_/view?usp=drive_link",
      githubLink: "https://github.com/Rasheednour/posts-api",
      gifSrc: "posts_api.gif",
    },
    "Pomodoor": {
      description:
        "A retro-style time management app with task creation, execution, and work time management features based on the Pomodoro technique.",
      stacks: ["Javascript/HTML/CSS", "React.js"],
      projectLink: "https://pomodoor-7j7okyyl9-rasheednour.vercel.app/",
      githubLink: "https://github.com/Rasheednour/pomodoor",
      gifSrc: "pomodoor.gif",
    },
    "Tracker": {
      description:
        "A simple exercise tracking web app developed using the MERN stack.",
      stacks: ["Javascript/React.js", "Express.js/Node.js, MongoDB/Mongoose"],
      projectLink: "https://pomodoor.herokuapp.com/",
      githubLink: "https://github.com/Rasheednour/CS290-Exercise-Tracker",
      gifSrc: "pomodoor.gif",
    },
  };
  useEffect(() => {
  }, [currentProject]);

  return (
      <Html
        transform
        portal={{ current: gl.domElement.parentNode }}
        position={[0, 0, 0]}
        rotation-x={Math.PI}
        rotation-z={Math.PI}
        rotation-y={Math.PI}
        scale={0.02958}
        material={
          <meshPhysicalMaterial
            side={DoubleSide} // Required
            transparent
            opacity={1}
          />

        } // Degree of influence of lighting on the HTML
      >
        <div className="wrapper">
          <div className="crt">
            {!isAtPC ? (
              <div className="skynet-window">
                <img src="images/skynet.png" width={330}></img>
                <TypewriterText text={"****"} />
              </div>
            ) : (
              <div className="window">
                <div className="tabs">
                  <div
                    className={projectsTab ? "idle-tab" : "current-tab"}
                    onClick={() => {
                      setProjectsTab(false);
                      setCurrentProject("Projects");
                    }}
                  >
                    <p>Bio</p>
                  </div>
                  <div
                    className={projectsTab ? "current-tab" : "idle-tab"}
                    onClick={() => {
                      setProjectsTab(true);
                      setCurrentProject("Projects");
                    }}
                  >
                    <p>Projects</p>
                  </div>
                </div>
                <div className="tab-content">
                  {currentProject !== "Projects" ? (
                    <Project
                      title={currentProject}
                      description={projects[currentProject].description}
                      stacks={projects[currentProject].stacks}
                      projectLink={projects[currentProject].projectLink}
                      githubLink={projects[currentProject].githubLink}
                      gifSrc={"images/"+projects[currentProject].gifSrc}
                      setCurrentProject={setCurrentProject}
                      setProjectsTab={setProjectsTab}
                    />
                  ) : (
                    <div className="content-section">
                      {projectsTab && currentProject == "Projects" ? (
                        <div className="projects-content">
                          <Folder
                            name="rashnor.com"
                            setCurrentProject={setCurrentProject}
                          />
                          <Folder
                            name="PromptyDumpty"
                            setCurrentProject={setCurrentProject}
                          />
                          <Folder
                            name="TCG_Central"
                            setCurrentProject={setCurrentProject}
                          />
                          <Folder
                            name="Posts_API"
                            setCurrentProject={setCurrentProject}
                          />
                          <Folder
                            name="Pomodoor"
                            setCurrentProject={setCurrentProject}
                          />
                        </div>
                      ) : (
                        <div className="bio-content">
                          <p className="sgt mt-2">
                            <b>1990</b> ├─ Born in Madani, Sudan.
                          </p>
                          <p className="sgt mt-0">
                            <b>2013</b> ├─ Completed the Bachelor of Science
                          </p>
                          <p className="sgt2">
                            │&nbsp; program in Architecture from the
                          </p>
                          <p className="sgt2">
                            │&nbsp; University of Khartoum.
                          </p>
                          <p className="sgt mt-0">
                            <b>2014</b> ├─ Worked as an Architect for 6 years.
                          </p>
                          <p className="sgt mt-0">
                            <b>2020</b> ├─ Worked as a Design Manager for 2
                            years
                          </p>
                          <p className="sgt mt-0">
                            <b>2023</b> ├─ Completed the Bachelor of Science
                          </p>
                          <p className="sgt2">
                            │&nbsp; program in Computer Science from{" "}
                          </p>
                          <p className="sgt2">
                            │&nbsp; Oregon State University, (4.0 GPA)
                          </p>
                          <p className="sgt mt-0">
                            <b>cur.</b> ├─ Working as a freelance Fullstack
                          </p>
                          <p className="sgt2">│&nbsp; Developer.</p>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="scroll-space">
                    <div className="arrow">
                      <div className="arrow-up"></div>
                    </div>
                    <div className="scroll-bar">
                      <div className="bar"></div>
                    </div>
                    <div className="arrow">
                      <div className="arrow-down"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="sgt mt-1">
                    <b>page 1 of 1</b>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Html>
  );
}
