import React from 'react';
import MainForm from "../forms/MainForm";
import Button from "../buttons/Button";

export default function ModalWallet(props) {
    return (
        <div
        className="modal fade"
        id={props.modal}
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
              <MainForm />
              <Button message="Quiero que me contacten" style="formBtn " />
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>
    )
}
