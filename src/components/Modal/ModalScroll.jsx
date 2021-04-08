import React from "react";
export default function Modal(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div
      className={`my_modal ${props.show ? `my_modal-show` : ""}`}
      onClick={props.onClose}
    >
      <div className="my_modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="my_modal-header">
          <div
            className="d-flex justify-content-end align-items-top"
            onClick={props.onClose}
            style={{ cursor: "pointer", fontSize: "18px" }}
          >
            &times;
          </div>
          <div className="my_modal-title pt-5">{props.title}</div>
        </div>
        <div className="my_modal-body">{props.children}</div>
        <div className="my_modal-footer">
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
