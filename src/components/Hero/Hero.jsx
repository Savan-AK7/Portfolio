import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h5 className={styles.title}>
          Hello Folks, <h5>I am Savan Pansuriya</h5>
          <h5>Software Developer</h5>
        </h5>
        
        <p className={styles.description}>
          A result-driven individual with expertise in Software Development and
          Developing production skills. I look forward to being a part of a
          growing and developing organization. I had 6 months of hands-on
          experience as front-end Engineer.
        </p>
        <a
          href="mailto:savanpansuriya979@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
          <a
            href="https://drive.google.com/file/d/1XdEwWXHGRl5CmvBY4DZbA9ZT_YKXJYxw/view?usp=drive_link"
            className={styles.contactBtn}
          >
            Check Resume
          </a>
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
