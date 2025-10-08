"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Course.module.css";

interface University {
  name: string;
  country: string;
  web_pages: string[];
}

export default function UniversityEnroll() {
  const [universities, setUniversities] = useState<University[]>([]);
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const courses = [
    "Medicine & Surgery",
    "Nursing Science",
    "Pharmacy",
    "Anatomy",
    "Biochemistry",
    "Physiology",
    "Public Health",
  ];

  useEffect(() => {
    let mounted = true;
    const fetchUniversities = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          "https://universities.hipolabs.com/search?country=Nigeria"
        );
        if (!res.ok) throw new Error(`Direct fetch failed: ${res.status}`);
        const data = await res.json();
        if (mounted) setUniversities(data);
        return;
      } catch (err) {
        console.warn("Direct fetch failed, will try proxy:", err);
      }

      try {
        const proxyRes = await fetch(
          "https://api.allorigins.win/get?url=" +
            encodeURIComponent(
              "https://universities.hipolabs.com/search?country=Nigeria"
            )
        );
        if (!proxyRes.ok) throw new Error(`Proxy fetch failed: ${proxyRes.status}`);
        const proxyData = await proxyRes.json();
        const parsed = JSON.parse(proxyData.contents);
        if (mounted) setUniversities(parsed);
        return;
      } catch (err) {
        console.warn("Proxy fetch failed too:", err);
      }

      const fallback: University[] = [
        { name: "University of Lagos", country: "Nigeria", web_pages: [] },
        { name: "University of Ibadan", country: "Nigeria", web_pages: [] },
        { name: "Obafemi Awolowo University", country: "Nigeria", web_pages: [] },
        { name: "Ahmadu Bello University", country: "Nigeria", web_pages: [] },
        { name: "University of Nigeria, Nsukka", country: "Nigeria", web_pages: [] },
        { name: "Ladoke Akintola", country: "Nigeria", web_pages: [] },
      ];
      if (mounted) {
        setUniversities(fallback);
        setError("");
      }
    };

    fetchUniversities().finally(() => {
      if (mounted) setLoading(false);
    });

    return () => {
      mounted = false;
    };
  }, []);

  const handleEnroll = () => {
    if (!selectedUniversity || !selectedCourse) {
      alert("Please select both a university and a course.");
      return;
    }
    alert(
      ` Enrollment successful!\n\nUniversity: ${selectedUniversity}\nCourse: ${selectedCourse}`
    );
  };

  return (
    <div id={styles.course}>
      <motion.h1
        initial={{x:100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:2, type:'spring', stiffness: 120}}
      >Enrolled Course</motion.h1>

      {loading && <p></p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <label>Select University:</label>
        <motion.select
          value={selectedUniversity}
          onChange={(e) => setSelectedUniversity(e.target.value)}
          initial={{y:100, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:1}}
        >
          <option value="">Select a University</option>
          {universities.map((u, idx) => (
            <option key={idx} value={u.name}>
              {u.name}
            </option>
          ))}
        </motion.select>
      </div>

      <div>
        <label>Select Course:</label>
        <motion.select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          initial={{y:100, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:1}}
        >
          <option value="">Select a Course</option>
          {courses.map((course, idx) => (
            <option key={idx} value={course}>
              {course}
            </option>
          ))}
        </motion.select>
      </div>

      <motion.button onClick={handleEnroll}
            initial={{x:-100, opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{duration:1, type: "spring", stiffness:120}}
          whileHover={{scale:1.1}}
      >Enroll</motion.button>
    </div>
  );
}
