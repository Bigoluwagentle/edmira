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
        
        {/* footer section */}
        <footer id={styles.footer}>
          <section>
            <motion.img src="/Logo1.jpg" 
              initial={{scale:0, opacity:0}}
              whileInView={{scale:1, opacity:1}}
              transition={{duration:2}}
            />
          </section>
          <motion.section
            initial={{x:-100, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:2}}
          >
            <Link href="/">Home</Link>
            <Link href="#about">About</Link>
            <Link href="/">Forum</Link>
            <Link href="/">News Feed</Link>
            <Link href="/">My Courses</Link>
          </motion.section>
          <section>
            <motion.img src="/icon-facebook.svg" alt="" 
              initial={{opacity:0, x:100}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:2}}
            />
            <motion.img src="/icon-instagram.svg" alt="" 
              initial={{opacity:0, x:-100}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:2}}
            />
            <motion.img src="/icon-twitter.svg" alt="" 
              initial={{opacity:0, x:100}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:2}}
            />
            <motion.img src="icon-youtube.svg" alt="" 
              initial={{opacity:0, x:-100}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:2}}
            />
          </section>
          <section>
            <motion.h2
              initial={{opacity:0, x:100}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:2, type: "spring", stiffness:120, delay:0.8}}
            >Subscribe</motion.h2>
            <div>
              <input type="email" placeholder="Enter your Email Address" />
              <motion.button
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:2}}
              >Subscribe</motion.button>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
}