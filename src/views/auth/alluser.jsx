import React from "react";
import { Link } from "react-router-dom";
import AppLayout from "../../shared/layouts";
import { appLogo } from "../../utils/images";
import { user, users, tick } from "../../utils/images";
import { FaRegUser, FaCheck } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import { MdGroups } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Alluser(props) {
  const [active, setActive] = useState(-1);
  const dataarray = [
    {
      id: 1,
      name: "umar",
      grade: "10th grade A",
    },
    {
      id: 2,
      name: "umar",
      grade: "10th grade A",
    },
    {
      id: 3,
      name: "umar",
      grade: "10th grade A",
    },
    {
      id: 4,
      name: "umar",
      grade: "10th grade A",
    },
    {
      id: 5,
      name: "umar",
      grade: "10th grade A",
    },
    {
      id: 6,
      name: "umar",
      grade: "10th grade A",
    },
    {
      id: 7,
      name: "umar",
      grade: "10th grade A",
    },
  ];
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
      <AppLayout>
        <div className="all-users">
          <div>
            <div className="main-scroll">
              {dataarray.map((item, i) => (
                <div
                  className={`main-div ${
                    active == i ? "selected-main-div" : ""
                  }`}
                  onClick={() => setActive(i)}
                  key={i}
                >
                  <div className="align" key={item.id}>
                    <FaRegUser className="usersingle" />
                    <p>{item.name}</p>
                  </div>
                  <div className="align" key={item.id}>
                    <MdGroups className="usersingle" />
                    <p className="ms-1">{item.grade}</p>
                  </div>
                  <div className="" key={item.id}>
                    <div className="tick-mark">
                      <FaCheck />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center mt-2">
              <Link to="/checkedin">
                <button className="checked">CHECKED</button>
              </Link>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
}
