"use client";
import { useState, useEffect } from "react";
import { PatientLS } from "./PatientLS";
import { PatientSS } from "./PatientSS";

function PatientSect() {
    const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowWidth === null) return null; // or loading placeholder

  return (
    <div>
      {windowWidth < 858 ? <PatientSS /> : <PatientLS />}
    </div>
  );
}
export default PatientSect;