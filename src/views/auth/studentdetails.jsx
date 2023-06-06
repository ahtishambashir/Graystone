import React from "react";
import { detailstudent } from "../../utils/images";
import { social3, social4 } from "../../utils/images";
import { useState } from "react";
import { Link } from "react-router-dom";
import AppLayout from "../../shared/layouts";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Select from "react-select";
import { TiSocialInstagram } from "react-icons/ti";
export default function Studentdetails() {
  const [grade, setGrade] = useState("");
  const [campus, setCampus] = useState("");
  const navigate = useNavigate();
  const options = [
    { value: "6th Grade", label: "6th Grade" },
    { value: "7th Grade", label: "7th Grade" },
    { value: "8th Grade", label: "8th Grade" },
    { value: "9th Grade", label: "9th Grade" },
    { value: "10th Grade", label: "10th Grade" },
    { value: "11th Grade", label: "11th Grade" },
    { value: "12th Grade", label: "12th Grade" },
  ];
  const optionsCampus = [
    { value: "Oconee", label: "Oconee" },
    { value: "Ozora", label: "Ozora" },
    { value: "Walton", label: "Walton" },
  ];
  const handleChange = (selectedOption) => {
    setGrade(selectedOption);
  };
  const handleChangeCampus = (selectedOption) => {
    setCampus(selectedOption);
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: "black",
      background: state.isSelected ? "#fff" : "#fff ",
      padding: 10,
    }),
  };

  const handleSubmit = () => {
    navigate("/allcheckedin");
  };
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
        <AppLayout logo={detailstudent}>
          <h1 className="about-text">FIRST TIME? TELL US MORE ABOUT YOU!</h1>
          <form onSubmit={handleSubmit}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <div class="form-group row">
                    <label class="col-sm-5 col-form-label text-end">
                      <p>
                        FIRST NAME: <strong className="red-color">*</strong>
                      </p>
                    </label>
                    <div class="col-sm-7">
                      <input required type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row mt-1">
                    <label class="col-sm-5 col-form-label text-end">
                      <p>
                        LAST NAME: <strong className="red-color">*</strong>{" "}
                      </p>
                    </label>
                    <div class="col-sm-7">
                      <input required type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row mt-1">
                    <label class="col-sm-5 col-form-label text-end">
                      <p>CELL#:</p>
                    </label>
                    <div class="col-sm-7">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row mt-1">
                    <label class="col-sm-5 col-form-label text-end">
                      <p>E-MAIL:</p>
                    </label>
                    <div class="col-sm-7">
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row mt-1">
                    <label class="col-sm-5 col-form-label text-end">
                      <p>ADDRESS:</p>
                    </label>
                    <div class="col-sm-7">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row mt-1">
                    <label class="col-sm-5 col-form-label text-end">
                      <p>STATE:</p>
                    </label>
                    <div class="col-sm-7">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row mt-1">
                    <label class="col-sm-5 col-form-label text-end">
                      <p>PARENT(S):</p>
                    </label>
                    <div class="col-sm-7">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row mt-1">
                    <label class="col-sm-5 col-form-label text-end">
                      <p>PARENT E-MAIL:</p>
                    </label>
                    <div class="col-sm-7">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div class="form-group row mt-1">
                    <label class="col-sm-5 col-form-label text-end">
                      <p>
                        BIRTHDAY: <strong className="red-color">*</strong>{" "}
                      </p>
                    </label>
                    <div class="col-sm-7">
                      <input required type="date" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row mt-1">
                    <label class="col-sm-5 col-form-label text-end">
                      <p>
                        GRADE: <strong className="red-color">*</strong>
                      </p>
                    </label>
                    <div class="col-sm-7">
                      <Select
                        required
                        styles={customStyles}
                        options={options}
                        value={grade}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div class="form-group row mt-1">
                    <label class="col-sm-5 col-form-label text-end">
                      <p>SCHOOL:</p>
                    </label>
                    <div class="col-sm-7">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row mt-1">
                    <label class="col-sm-5 col-form-label text-end">
                      <p>
                        CAMPUS: <strong className="red-color">*</strong>
                      </p>
                    </label>
                    <div class="col-sm-7">
                      <Select
                        required
                        styles={customStyles}
                        options={optionsCampus}
                        value={campus}
                        onChange={handleChangeCampus}
                      />
                    </div>
                  </div>
                  <div class="form-group row mt-1">
                    <label class="col-sm-5 col-form-label text-end">
                      <p>CITY:</p>
                    </label>
                    <div class="col-sm-7">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row mt-1">
                    <label class="col-sm-5 col-form-label text-end">
                      <p>ZIP:</p>
                    </label>
                    <div class="col-sm-7">
                      <input type="number" class="form-control" />
                    </div>
                  </div>

                  <div class="form-group row mt-1">
                    <label class="col-sm-5 col-form-label text-end">
                      <p>PARENT #:</p>
                    </label>
                    <div class="col-sm-7">
                      <input type="number" class="form-control" />
                    </div>
                  </div>
                  {/* <div class="form-group row mt-1">
                    <div className="col-sm-5 d-flex align-items-center">
                      <img src={social3} alt="" className="social-img" />
                    </div>
                    <div class="col-sm-7">
                      <input type="text" class="form-control" />
                    </div>
                  </div> */}
                  <div class="form-group row mt-1">
                    <div className="col-sm-5 d-flex align-items-center">
                      <img src={social4} alt="" className="social-img" />
                    </div>
                    <div class="col-sm-7">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div className="submit-btn-main">
                  <div className="text-center mt-2">
                    <button className="std-continue" type="submit">
                      CONTINUE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </AppLayout>
      </div>
    </>
  );
}
