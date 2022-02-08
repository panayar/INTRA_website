import React from "react";
import "./Form.css";
import Button from "../buttons/Button";
import Done from "../../assets/img/doneIcon.svg";

export default function Form() {
  return (
    <div className="formBackground">
      <div className="row mb-3">
        <div className="col-12">
          <h6>Buy</h6>
          <hr></hr>
          <br></br>
          <div className="input-group">
            <input
              type="text"
              className="form-control fontInput"
              placeholder="Cantidad"
              aria-label="Dollar amount (with dot and two decimal places)"
            ></input>
            <span className="input-group-text fontInput p-3">INTRA</span>
            <span className="input-group-text  fontInput p-3">INT</span>
          </div>
        </div>
      </div>
      <div className="row mb-3">
          <div className="col-lg-6 col-md-6 col-sm-12"><p className="fontMedium">Saldo</p></div>
          <div className="col-lg-6 col-md-6 col-sm-12"><p className="fontMedium">$1.000</p></div>
      </div>
      <div className="row mb-3">
          <div className="col-12">
          <Button message="Buy now" style="formBtn " />
          </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="col-12">
        <h6>Operations</h6>
         <br></br>
        </div>


        <div className="col-12 opt d-flex p-2 align-center">
           
             <div className="col-1"><p className="fontMedium mt-3">1</p></div>
             <div className="col-2"><p className="fontMedium mt-3">Bitcoin</p></div>
             <div className="col-2"><p className="fontMedium mt-3">BTC</p></div>
             <div className="col-5"><p className="fontMedium mt-3">INTRA 1.000.000,00</p></div>
             <div className="col-2"><img className="mt-3" src={Done}/></div>
         

      </div>
      </div>
    
  );
}
