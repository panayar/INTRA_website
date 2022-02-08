import React from "react";
import FormPresale from "../forms/FormPresale";
import Button from "../buttons/Button";

export default function ModalPresale(props) {
  return (
    <div
      className="modal fade"
      id={props.modalId}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <FormPresale />
            <Button message="Ingresar a la lista" styles="formBtn " />
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
}
