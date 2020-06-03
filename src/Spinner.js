import React from "react";

export const Spinner = ({ message }) => (
  <div className="ui segment" style={{ minHeight: "10em" }}>
    <div className="ui active inverted dimmer">
      <div className="ui text loader">{message || "Loading..."}</div>
    </div>
  </div>
);
