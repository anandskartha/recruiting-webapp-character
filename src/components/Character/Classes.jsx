import React, { useState } from "react";

const Classes = ({ classes, showMinRequirements }) => {
  const handleClick = (e, cls) => {
    e.preventDefault();
    console.log("Link clicked");
    showMinRequirements(cls);
  };

  return (
    <>
      <h2>Classes</h2>
      <div style={{ border: "1px solid white" }}>
        <div>
          {classes.map((item) => (
            <div>
              <a
                href="#"
                style={{ color: "inherit", textDecoration: "inherit" }}
                onClick={(e) => handleClick(e, item.name)}
              >
                <span
                  key={item.id}
                  style={item.attrMatch ? { color: "red" } : {}}
                >
                  {item.name}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Classes;
