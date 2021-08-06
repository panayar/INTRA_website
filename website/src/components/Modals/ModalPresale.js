import React from "react";
import FormPresale from "../forms/FormPresale";
import Button from "../buttons/Button";

export default function ModalPresale(props) {
  return (
    <div
      class="modal fade"
      id={props.modalId}
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
            <FormPresale />
            <Button message="Ingresar a la lista" style="formBtn " />
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  );
}
