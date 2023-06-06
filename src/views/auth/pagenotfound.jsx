import React from "react";
import { notfound } from "../../utils/images";
export default function pagenotfound() {
  return (
    <div className="page-not-found">
      <div>
        <img src={notfound} alt="" />
        <h1>
          404<br></br> NOT FOUND
        </h1>
      </div>
    </div>
  );
}
