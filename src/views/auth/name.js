import AppLayout from "../../shared/layouts";
import { appLogo } from "../../utils/images";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Name() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      <div data-aos="zoom-in">
        <AppLayout>
          <div className="checkin-type mt-5">
            <h1>WE'RE GLAD YOUR BACK!</h1>
            <input type="text" placeholder="Name" />
            <div className="continue-btn">
              <Link to="/allusers">
                <button className="continue">CONTINUE</button>
              </Link>
            </div>
          </div>
        </AppLayout>
      </div>
      {/* <div className="">
        <div>
          <img src={appLogo} alt="" />

        </div>
      </div> */}
    </>
  );
}
