import AppLayout from "../../shared/layouts";
import { Link } from "react-router-dom";
import { appLogo } from "../../utils/images";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function CheckInType() {
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
        <h1 className="text-center welcome">WELCOME IN!</h1>
        <div className="continue-btn">
          <Link to="/name">
            <button className="returning-std">RETURNING STUDENT</button>
          </Link>
          <Link to="/studentdetails">
            <button className="first-time">
              FIRST <br /> TIME?
            </button>
          </Link>
        </div>
      </AppLayout>
    </div>
    // <>
    //   <div className="checkin-type">
    //     <div>
    //       <img src={appLogo} alt="" />

    //     </div>
    //   </div>
    // </>
  );
}
