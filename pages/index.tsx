import Head from "next/head";
import Styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
// import Course from "./course";
import Link from "next/link";

export default function Home() {
  function hamburger(): void {
    const mobileMenu = document.querySelector<HTMLElement>(".mobile");
    if (mobileMenu) mobileMenu.style.display = "block";
  }

  function close(): void {
    const mobileMenu = document.querySelector<HTMLElement>(".mobile");
    if (mobileMenu) mobileMenu.style.display = "none";
  }
  const handleLoginClick = () => {
    const loginLink = document.querySelector<HTMLAnchorElement>("#login");
    loginLink?.click();
  };

  return (
    <>
      <Head>
        <title>EdMira</title>
        <meta name="description" content="Edmira" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </Head>

      <div id={Styles.container}>
        <motion.header
          initial={{opacity:0, y:-100}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:2}}
        >
          <img src="/Logo1.jpg" alt="" />
          <div>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Forum</Link>
            <Link href="#">News Feed</Link>
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleLoginClick}>Sign Up</button>
            <Link href="/AuthForm" id="login"></Link>
          </div>
          <i className="fa-solid fa-bars" id="menu" onClick={hamburger}></i>
        </motion.header>
        <motion.div
          initial={{opacity:0, x:100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:2}}
          className="mobile"
        >
          <section>
            <i className="fa-solid fa-xmark" onClick={close}></i>
            <div>
              <Link href="#">Home</Link>
              <Link href="#">About</Link>
              <Link href="#">Forum</Link>
              <Link href="#">News Feed</Link>
              <button onClick={handleLoginClick}>Login</button>
              <button onClick={handleLoginClick}>Sign Up</button>
            </div>
          </section>
        </motion.div>
        <section>
          <div>
            <motion.h1
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{duration:2, delay:0.1}}
            >Empowering Africa’s Future Doctors</motion.h1>
            <motion.p
              initial={{opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:2}}
            >Learn, discuss, and excel with interactive lessons, peer forums, and curated medical updates.</motion.p>
            <aside>
              <motion.button
                initial={{opacity:0, x:-100}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:2, delay:0.3}}
                onClick={handleLoginClick}
              >Get Started</motion.button>
              <motion.button
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:2, delay:0.2}}
              ><i className="fa-brands fa-apple"></i> <i className="fa-brands fa-android"></i> Download App</motion.button>
            </aside>
          </div>
          <motion.img src="/heroImage.webp" alt="" 
                initial={{opacity:0, x:100}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:2, delay:0.2}}
          />
        </section>

        <aside>
          <motion.img src="/illustration.jpg" alt="" 
            initial={{opacity:0, x:-100}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:2, delay:0.4}}
          />
          <div>
            <motion.h2
                initial={{opacity:0, x:100}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:2, delay:0.2}}
            >About EdMira</motion.h2>
            <motion.p
              initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:2, delay:0.2}}
            >EdMira is dedicated to transforming medical education across Africa by providing accessible digital resources that strengthen understanding, improve exam performance, and bridge the gap between theory and clinical practice.</motion.p>
            <motion.button
                initial={{opacity:0, x:-100}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:2, delay:0.5}}
            >Learn More</motion.button>
          </div>
        </aside>

        <aside>
          <div>
            <motion.h2
              initial={{opacity:0, x:100}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:2, delay:0.2}}
            >Our Mission</motion.h2>
            <motion.p
              initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:2, delay:0.2}}
            >To become the leading edtech platform for medical education in Africa, empowering students with digital learning resources that improve knowledge retention, exam performance, and real-world medical practice.</motion.p>
            <motion.h2
              initial={{opacity:0, x:100}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:2, delay:0.2}}
            >Our Vission</motion.h2>
            <motion.p
              initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:2, delay:0.2}}
            >To become the leading edtech platform for medical education in Africa, empowering students with digital learning resources that improve knowledge retention, exam performance, and real-world medical practice.</motion.p>
            <button>Learn More</button>
          </div>
          <motion.img src="/mission.jpg" alt="" 
            initial={{opacity:0, scale:0}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:2, delay:0.2}}
          />
        </aside>

        <nav>
          <h1>Forum & News Feed</h1>
          <p>Stay connected and informed with EdMira's integrated forum and news feed. Engage with peers, share insights, and stay up-to-date on the latest developments in the medical fields. </p>
        </nav>
        <summary>
          <motion.section
            initial={{opacity:0, x:-100}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:2, delay:0.2}}
          >
            <h2>Community Forum</h2>
            <p>Join our Vibrant community forum to connect with fellow medical students, ask questions, and participate in discussions on a wide range of medical topics.</p>
            <button
              onClick={() => {
                const a = document.createElement("a");
                a.href = "https://wa.me/8032877945";
                a.target = "_blank";

                const body = document.querySelector("body");
                if (body) {
                  body.appendChild(a);
                  a.click();
                  body.removeChild(a);
                }
              }}
            >
              Join Now! <i className="fa-brands fa-whatsapp"></i>
            </button>

          </motion.section>
          <motion.section
                initial={{opacity:0, x:100}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:2, delay:0.2}}
          >
            <h2>Medical News and Updates</h2>
            <p>Join our Vibrant community forum to connect with fellow medical students, ask questions, and participate in discussions on a wide range of medical topics.</p>
              <button
              onClick={() => {
                const a = document.createElement("a");
                a.href = "https://wa.me/8032877945";
                a.target = "_blank";

                const body = document.querySelector("body");
                if (body) {
                  body.appendChild(a);
                  a.click();
                  body.removeChild(a);
                }
              }}
            >
              Join Now! <i className="fa-brands fa-whatsapp"></i>
            </button>
          </motion.section>
        </summary>

        <motion.h1
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:2}}
        >Our Team</motion.h1>
        <article>
          <motion.nav
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:2}}
          >
            <i className="fa-solid fa-user"></i>
            <h4>Jamiu Sanni (Emjay)</h4>
            <p>Founder, EdMira</p>
          </motion.nav>
          <motion.nav
            initial={{opacity:0, x:100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:2}}
          >
            <i className="fa-solid fa-user"></i>
            <h4>Rasheedah Dada</h4>
            <p>Co-Founder, EdMira</p>
          </motion.nav>
          
        </article>
        <footer>
          <article>
            <section>
                <img src="/Logo1.jpg" alt="" />
                <p>Empowering Africa’s Future Doctors</p>
              </section>
              <section>
                <Link href="#">Home</Link>
                <Link href="#">About</Link>
                <Link href="#">Forum</Link>
                <Link href="#">News Feed</Link>
                <Link href="#">Privacy</Link>
              </section>
              <section>
                <i className="fa-brands fa-whatsapp" 
                  onClick={() => {
                  const a = document.createElement("a");
                  a.href = "https://wa.me/8032877945";
                  a.target = "_blank";

                  const body = document.querySelector("body");
                  if (body) {
                    body.appendChild(a);
                    a.click();
                    body.removeChild(a);
                  }
                }}
                ></i>
                <i className="fa-brands fa-linkedin" 
                  onClick={() => {
                const a = document.createElement("a");
                a.href = "www.linkedin.com/in/edmiragroup";
                a.target = "_blank";

                const body = document.querySelector("body");
                if (body) {
                  body.appendChild(a);
                  a.click();
                  body.removeChild(a);
                }
              }}
                ></i>
                <i className="fa-brands fa-twitter" 
                  onClick={() => {
                    const a = document.createElement("a");
                    a.href = "https://x.com/edmira_group";
                    a.target = "_blank";

                    const body = document.querySelector("body");
                    if (body) {
                      body.appendChild(a);
                      a.click();
                      body.removeChild(a);
                    }
                  }}
                ></i>
                <i className="fa-brands fa-instagram"
                  onClick={() => {
                    const a = document.createElement("a");
                    a.href = "htpps://www.instagram.com/edmira_group";
                    a.target = "_blank";

                    const body = document.querySelector("body");
                    if (body) {
                      body.appendChild(a);
                      a.click();
                      body.removeChild(a);
                    }
                  }}
                ></i>
                <i className="fa-brands fa-facebook" 
                  onClick={() => {
                const a = document.createElement("a");
                a.href = "https://web.facebook/profile.php?id=61581985767152";
                a.target = "_blank";

                const body = document.querySelector("body");
                if (body) {
                  body.appendChild(a);
                  a.click();
                  body.removeChild(a);
                }
              }}
                ></i>
              </section>
              <section>
                <button 
                  onClick={() => {
                const a = document.createElement("a");
                a.href = "https://wa.me/8032877945";
                a.target = "_blank";

                const body = document.querySelector("body");
                if (body) {
                  body.appendChild(a);
                  a.click();
                  body.removeChild(a);
                }
              }}
                >Chat on Whatsapp</button>
                <button 
                  onClick={() => {
                const a = document.createElement("a");
                a.href = "https://wa.me/8032877945";
                a.target = "_blank";

                const body = document.querySelector("body");
                if (body) {
                  body.appendChild(a);
                  a.click();
                  body.removeChild(a);
                }
              }}
                >Chat on Email</button>
                <h2>Subscribe</h2>
                <div>
                  <input type="email" placeholder="Enter Your Email Address"/>
                  <button>Subscribe</button>
                </div>
                
            </section>
          </article>
          <p>&copy; 2025 EdMira. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
