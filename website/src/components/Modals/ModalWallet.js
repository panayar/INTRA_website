import React from 'react';
import MainForm from "../forms/MainForm";
import Button from "../buttons/Button";

export default function ModalWallet(props) {
    return (
        <div
        class="modal fade"
        id={props.modal}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <MainForm />
              <Button message="Quiero que me contacten" style="formBtn " />
            </div>
            <div class="modal-footer">
            </div>
          </div>
        </div>
      </div>
    )
}
