import React from "react";
import AppLayout from "../../shared/layouts";
import { checked } from "../../utils/images";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Checkedintwo() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);
  return (
    <div data-aos="zoom-in">
      <AppLayout logo={checked}>
        <div className="allchecked">
          <h1>YOU'RE ALL CHECKED IN</h1>
        </div>
      </AppLayout>
    </div>
  );
}
