import React from "react";

export default function TextForm(props) {
  return (
    <div>
      <form>
        <h1>{props.heading}</h1>
        <div className="form-group">
          <label for="myBox"></label>
          <textarea className="form-control" id="myBox" rows="8"></textarea>
        </div>
        <button className="btn.btn-primary">Convert to Uppercase</button>
      </form>
    </div>
  );
}
