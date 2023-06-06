import React, { useEffect } from "react";
import AppLayout from "../../shared/layouts";
import { checked } from "../../utils/images";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Checkedin() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div data-aos="zoom-in">
      <AppLayout logo={checked}>
        <div className="allchecked">
          <h1>YOU'RE ALL CHECKED IN</h1>
          <h4>STOP BY THE SNACK BAR FOR A FREE DRINK OR SNACK</h4>
        </div>
      </AppLayout>
    </div>
  );
}
