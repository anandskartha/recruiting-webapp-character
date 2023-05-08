import React, { useState, useEffect } from "react";
import { ATTRIBUTE_LIST, CLASS_LIST } from "../../consts";
import Attributes from "./Attributes";
import Classes from "./Classes";
import MinRequirements from "./MinRequirements";

const Character = () => {
  const initialAttr = [];
  let idGen = 1;
  for (const i of ATTRIBUTE_LIST) {
    const obj = {
      id: idGen++,
      name: i,
      value: 9, // Initialized to 9 for dev testing
      modifier: 0,
    };
    initialAttr.push(obj);
  }

  const initialClass = [];
  idGen = 1;
  for (const i in CLASS_LIST) {
    const obj = {
      id: idGen++,
      name: i,
      attrCriteria: CLASS_LIST[i],
      attrMatch: false,
    };
    initialClass.push(obj);
  }
  const [attributeData, setAttributeData] = useState(initialAttr);
  const [classData, setClassData] = useState(initialClass);
  const [showReq, setShowReq] = useState(false);
  const [showReqFor, setShowReqFor] = useState({});
  useEffect(() => {
    checkClassAtrributes();
  }, [attributeData]);

  const checkClassAtrributes = () => {
    let updatedClass = classData;
    for (const i of updatedClass) {
      let flag = true;
      for (const a in i.attrCriteria) {
        const attrItem = attributeData.filter((item) => item.name === a)[0];
        if (i.attrCriteria[a] > attrItem.value) {
          flag = false;
          break;
        }
      }
      updatedClass = updatedClass.map((item) => {
        if (item.name === i.name) {
          return { ...item, attrMatch: flag };
        } else {
          return item;
        }
      });
    }
    setClassData(updatedClass);
  };

  const updateAttr = (id, modifier) => {
    const updatedAttrs = attributeData.map((item) => {
      if (item.id === id) {
        return { ...item, value: item.value + modifier };
      } else {
        return item;
      }
    });

    setAttributeData(updatedAttrs);
  };

  const showMinRequirements = (cls) => {
    setShowReq(true);
    const c = classData.filter((i) => i.name === cls)[0];
    setShowReqFor({
      title: cls,
      data: c.attrCriteria,
    });
  };

  return (
    <>
      <h2>Character</h2>
      <div style={{ border: "1px solid white" }}>
        <Attributes attributes={attributeData} updateAttr={updateAttr} />
        <Classes
          classes={classData}
          showMinRequirements={showMinRequirements}
        />
        {showReq && <MinRequirements cls={showReqFor} />}
      </div>
    </>
  );
};

export default Character;
