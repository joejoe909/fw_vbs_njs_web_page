import Image from "next/image";
import styles from "../page.module.css";

export default function About() {
  let about = "About Farrish Works";
  let description = "Farrish Works are the creators of Visual Brainstorm";
  let img_src = "/vbs_logo_512x512.png"; 
  return (
    <div className={styles.bus_card}>
      <Image className={styles.img_flex}
             src={img_src} 
             width={192} 
             height={192}
             alt="The Farrish Works log a pupiless eye in place a brainstorm tree."
             />
      <div className={styles.inner_card}>
        <h1>{about}</h1>
        <p>{description}</p>
      </div>

    </div>
  );
}