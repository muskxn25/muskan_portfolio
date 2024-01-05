import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import resumePdf from "./Resume.pdf"; 


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Muskan</h1>
        <p className={styles.description}>
        Don't let my coding skills fool you, I have a secret weapon:
        an artistic soul! While I whip up websites and web apps like a tech ninja,
        I also wield the power of graphic design to craft stunning visuals and brand experiences.
        Combining the best of both worlds lets me express myself creatively and build solutions
        that are both beautiful and user-friendly. I'm just getting started, but watch out for this
        tech-savvy artist - I'm ready to change the game!
        </p>
        <a href="https://www.behance.net/muskansahetai" target="_blank" className={styles.behanceBtn}>
          Behance
        </a>
        <a href={resumePdf} target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
          Resume
        </a>

      </div>
      <img
        src={getImageUrl("hero/1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
