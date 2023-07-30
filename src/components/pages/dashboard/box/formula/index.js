import React, { useEffect, useState } from "react";
import { Label } from "../../../../commons";
import WARNING from "./../../../../../assets/img/warning.png";
import DELETE from "./../../../../../assets/img/delete.png";
import EQUAL from "./../../../../../assets/img/equal.png";
import FX from "./../../../../../assets/img/fx.png";

const Formula = () => {
  const [content, setContent] = useState([]);
  const [formula, setFormula] = useState("");

  const symbelList = [
    {
      title: "-",
      className: "purple",
      id: "10",
      onDragStart: (e) =>
        handleDragStart(e, {
          id: "10",
          className: "purple",
          title: "-",
        }),
    },
    {
      title: "+",
      className: "green",
      id: "11",
      onDragStart: (e) =>
        handleDragStart(e, {
          id: "11",
          className: "green",
          title: "+",
        }),
    },
    {
      title: "(",
      className: "yellow",
      id: "12",
      onDragStart: (e) =>
        handleDragStart(e, {
          id: "12",
          className: "yellow",
          title: "(",
        }),
    },
    {
      title: ")",
      className: "yellow",
      id: "13",
      onDragStart: (e) =>
        handleDragStart(e, {
          id: "13",
          className: "yellow",
          title: ")",
        }),
    },
  ];

  const handleDrop = (event) => {
    event.preventDefault();
    const labelPropsJSON = event.dataTransfer.getData("application/json");
    const labelProps = JSON.parse(labelPropsJSON);
    if (labelProps) {
      setContent((prevContent) => [...prevContent, labelProps]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragStart = (event, labelProps) => {
    event.dataTransfer.setData("application/json", JSON.stringify(labelProps));
  };


  const clearContent = () => {
    setContent([]);
  };
  useEffect(() => {
    const updateFormula = () => {
      const formulaStr = content.reduce(
        (acc, label) => acc + label.title + " ",
        " "
      );
      setFormula(formulaStr);
    };
    updateFormula();
    // eslint-disable-next-line
  }, [content, updateFormula]);

  return (
    <div className="dashboard__formula">
      <div className="dashboard__formula__title">
        <img src={WARNING} alt="WARNING" />
        <p>در صورتیکه فرمول نویسی برای باید انجام شود</p>
      </div>
      <div className="dashboard__formula__parent">
        <div className="cloning">
          <div className="drag-wrapper" id="numbers">
            {[...Array(10).keys()].reverse().map((item, index) => {
              return (
                <Label
                  title={item}
                  key={index}
                  id={index}
                  draggable
                  onDragStart={(e) =>
                    handleDragStart(e, { id: index, title: item })
                  }
                />
              );
            })}
          </div>
          <p className="desc">برنامه </p>
        </div>
        <div className="cloning">
          <div className="drag-wrapper" id="symbels">
            {symbelList.map((item, index) => {
              return <Label draggable {...item} key={index} />;
            })}
          </div>
          <p className="desc">نماد ها </p>
        </div>
        <div className="cloning">
          <div className="drag-wrapper third">
            <div className="title">
              <p>لطفا فرمول مورد نظر را به روش drag & drop بسازید</p>
              <img src={DELETE} alt="delete" onClick={clearContent} />
            </div>
            <div
              className="dragable-content"
              id="content"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {content.map((item, index) => (
                <Label {...item} key={index} />
              ))}
            </div>
            <div className="formula">
              <div id="formula">{formula}</div>
              <div>
                <img src={EQUAL} alt="equal" className="equl" />
                <img src={FX} alt="fx" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formula;
