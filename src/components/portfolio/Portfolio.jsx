import "./portfolio.css";

import IMG1 from "../../assets/AI Website Resume Builder.png";
import IMG2 from "../../assets/E-commerce 3 D website.png";
import IMG3 from "../../assets/Food-ordering.png";
import IMG4 from "../../assets/Grocery Website.png";
import IMG5 from "../../assets/code-arena-visuals-Website.png";
import IMG6 from "../../assets/real-time-scheduler-java.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "AI Website Resume Builder",
      img: IMG1,
      description:
        "This website is useful for building a resume.",
      technologies: "Html | CSS | React Js | Tailwind CSS | Framer Motion | GSAP",
      link: "https://al-powered-3-d-portfolio-website.vercel.app/",
      github: "https://al-powered-3-d-portfolio-website.vercel.app/",
    },
    {
      id: 2,
      title: "E-commerce 3 D website",
      img: IMG2,
      description:
        "This website is useful for buying and selling products with a 3D animation.",
      technologies: "HTML | CSS | Tailwind CSS | React js | Redux | Three.js | Framer Motion | GSAP",
      link: "https://3-d-e-commerce-store.vercel.app/",
      github: "https://github.com/theajeet/3D-E-Commerce-Store",
    },
    {
      id: 3,
      title: "Food-ordering",
      img: IMG3,
      description: "This website is useful for ordering food online.",
      technologies: "HTML | CSS | React js | Redux | Tailwind CSS",
      link: "https://food-ordering-website-two-black.vercel.app/",
      github: "https://food-ordering-website-two-black.vercel.app/",
    },
    {
      id: 4,
      title: "Grocery Website",
      img: IMG4,
      description:
        "This website is useful for buying and selling groceries.",
      technologies: "Html | CSS | React Js | Tailwind CSS | Swiper JS",
      link: "https://grocery-website-phi.vercel.app/",
      github: "https://github.com/theajeet/Grocery_Website",
    },
    {
      id: 5,
      title: "code-arena-visuals-Website",
      img: IMG5,
      description:
        "This website is useful for learning coding and programming.",
      technologies: "Html | React js | Redux | GSAP | Tailwind CSS | Framer Motion",
      link: "https://code-arena-visuals-website.vercel.app/",
      github: "https://github.com/theajeet/code-arena-visuals-Website",
    },
    {
      id: 6,
      title: "real-time-scheduler-java",
      img: IMG6,
      description:
        "This is a real-time scheduler application built using Java.",
      technologies: "Html | React js | Tailwind CSS | Java | Framer Motion | Redux | Javascript",
      link: "https://real-time-scheduler-java.vercel.app/",
      github: "https://real-time-scheduler-java.vercel.app/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
