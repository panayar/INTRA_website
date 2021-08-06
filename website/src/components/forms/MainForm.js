import React from "react";
import Button from "../buttons/Button";
import "./Form.css";

export default function MainForm() {
  return (
    <div className="containerForm">
      <div className="bgForm align-text">
        <h5>Hi, nice to meet you</h5>
        <p>Input your data</p>

        <div class="col-12 mb-3">
          <input
            type="text"
            class="form-control fontInput"
            id="name"
            placeholder="Full name"
          ></input>
        </div>
        <div class="col-12 mb-3">
          <input
            type="number"
            class="form-control fontInput"
            id="amount"
            placeholder="Cantidad a comprar"
          ></input>
        </div>
        <div class="col-12 mb-3">
          <input
            type="mail"
            class="form-control fontInput"
            id="mail"
            placeholder="Email"
          ></input>
        </div>
        <div class="col-12 mb-3">
          <input
            type="text"
            class="form-control fontInput"
            id="country"
            placeholder="Country"
          ></input>
        </div>
        <div className="row">
          <div class="col-lg-4 col-sm-12 mb-3 ">
            <select class="form-select" aria-label="Default select example">
              <option selected>+57</option>
              <option value="1">+1</option>
              <option value="2">+56</option>
              <option value="3">+50</option>
            </select>
          </div>
          <div class="col-lg-8 col-sm-12 mb-3">
            <input
              type="text"
              class="form-control fontInput"
              id="country"
              placeholder="Country"
            ></input>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-sm-6 col-sm-12">
            <a href="/" style={{textDecoration: "none" , cursor: "pointer"}}>
              <p>Terms & Conditions</p>
            </a>
          </div>
          <div className="col-lg-6 col-sm-6 col-sm-12">
            <p>Min compra USD $1.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
