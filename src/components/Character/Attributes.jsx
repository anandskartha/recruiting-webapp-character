import React from "react";

const Attributes = ({ attributes, updateAttr }) => {
  return (
    <>
      <h2>Attributes</h2>
      <div style={{ border: "1px solid white" }}>
        <div>
          {attributes.map((attrItem) => (
            <div>
              <span key={attrItem.id}>
                {attrItem.name}: {attrItem.value}
              </span>
              <button onClick={() => updateAttr(attrItem.id, 1)}>+</button>
              <button onClick={() => updateAttr(attrItem.id, -1)}>-</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Attributes;
