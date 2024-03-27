import css from "../Assests/css.jpg";
import tailwind from "../Assests/tailwind.jpg";
import html from "../Assests/html.jpg";
import nodejs from "../Assests/nodejs.jpg";
import reactjs  from "../Assests/reactjs.jpg";
import mongodb from "../Assests/mongodb.jpg";
import javascript from "../Assests/javascript.jpg";
import web from "../Assests/web.jpg";
import typescript from "../Assests/typescript.jpg";
import ux from "../Assests/ux.jpg";
import reacr from "../Assests/reacr.jpg";
import git from "../Assests/git.jpg";
import java from "../Assests/java.jpg";
import pro1 from "../Assests/pro1.png";

const services = [
    {
        title: "web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: reacr,
    },
    {
        title: "UI/UX Designer",
        icon: ux,
    }
];

const technologies = [
    {
      name: "HTML 5",
      icon: html,   
    },
    {
        name: "CSS3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "NodeJS",
        icon: nodejs,
    },
    {
        name: "ReactJs",
        icon: reactjs,
    },
    {
        name: "TailWind",
        icon:  tailwind,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Git",
        icon:  git,
    }

];

const projects = [
    {
        name: "Free Hold",
        description:
          "Web site for made using Angular and Typescript for buying and renting real-estate to style and make it responsive",
          tags: [
            {
                name: "Typescript",
                color: "blue-text-gradient",

            },
            {
                name: "Angular",
                color: "green-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
          ],
          image: pro1,
        //   source_deploy_link=
        //   source_code_link=
        }

];
export {services, technologies, projects};