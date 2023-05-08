import React from "react";

const MinRequirements = ({ cls }) => {
  return (
    <>
      <h2>Minimum Requirements for {cls.title}</h2>
      <div>{JSON.stringify(cls.data)}</div>
    </>
  );
};

export default MinRequirements;
