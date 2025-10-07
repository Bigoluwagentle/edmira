import Head from "next/head";
import { motion } from "framer-motion";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  function hamburger(): void {
    const mobileMenu = document.querySelector<HTMLElement>(".mobile");

    if (mobileMenu) {
      mobileMenu.style.display = "block";
    }
  }
  function close(): void {
    const mobileMenu = document.querySelector<HTMLElement>(".mobile");

    if (mobileMenu) {
      mobileMenu.style.display = "none";
    }
  }

  return (
    <>
      <Head>
        <title>Edmira</title>
        <meta name="description" content="Edmira" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id={styles.container}>

        <motion.div id={styles.mobile} className="mobile"
          initial={{x:-120, opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{duration:1}}
        >
          <article>
            <img src="/icon-close.svg" id={styles.close} onClick={close} />
            <section>
              <Link href="/">Home</Link>
              <Link href="#about">About</Link>
              <Link href="/">Forum</Link>
              <Link href="/">News Feed</Link>
              <Link href="/">My Courses</Link>
            </section>

            <aside>
              <button id="sign">Sign up</button>
              <button>Login</button>
            </aside>
          </article>
          
        </motion.div>

        {/* Header section */}

        <motion.header id={styles.header}
          initial={{y:-100, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:2}}
        >
          <section>
            <img src="/Logo1.jpg"/>
          </section>

          <section>
            <Link href="/">Home</Link>
            <Link href="#about">About</Link>
            <Link href="/">Forum</Link>
            <Link href="/">News Feed</Link>
            <Link href="/">My Courses</Link>
          </section>

          <aside>
            <button id="sign">Sign up</button>
            <button>Login</button>
            <img src="/icon-hamburger.svg" id={styles.hamburger} onClick={hamburger} />
          </aside>

        </motion.header>
        
      </div>
    </>
  );
}