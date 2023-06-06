import React from "react";
import { smile } from "../../utils/images";
export default function Usernotfound() {
  return (
    <div className="smile">
      <div>
        <img src={smile} alt="" />
        <h1>
          UH OH,WE DONT HAVE ANYONE<br></br>IN OUR RECORD BY THAT NAME
        </h1>
        <div className="back-btn">
          <button>GO BACK</button>
        </div>
      </div>
    </div>
  );
}
