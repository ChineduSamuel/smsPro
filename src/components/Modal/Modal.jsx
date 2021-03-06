import React from "react";
export default function Modal(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div
      className={`modal-area ${props.show ? `modal-area-show` : ""}`}
      onClick={props.onClose}
    >
      <div className="modal-area-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-area-header">
          <div
            className="d-flex justify-content-end align-items-top"
            onClick={props.onClose}
            style={{ cursor: "pointer", fontSize: "18px" }}
          >
            &times;
          </div>
          <div className="modal-area-title pt-5">{props.title}</div>
        </div>
        <div className="modal-area-body">{props.children}</div>
        <div className="modal-area-footer">
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn-light" onClick={props.onClose}>
              CANCEL
            </button>
            <button className="btn-dark" onClick={props.posted}>
              CREATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
