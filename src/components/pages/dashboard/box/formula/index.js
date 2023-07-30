import React, { useState } from "react";
import { Label } from "../../../../commons";
import WARNING from "./../../../../../assets/img/warning.png";
import DELETE from "./../../../../../assets/img/delete.png";
import EQUAL from "./../../../../../assets/img/equal.png";
import FX from "./../../../../../assets/img/fx.png";

const Formula = () => {
  const [content, setContent] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    const label = document.getElementById(id);
    if (label) {
      setContent((prevContent) => [...prevContent, label.innerText]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragStart = (event, id) => {
    event.dataTransfer.setData("text/plain", id);
  };

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
                  onDragStart={(e) => handleDragStart(e, index)}
                />
              );
            })}
          </div>
          <p className="desc">برنامه </p>
        </div>
        <div className="cloning">
          <div className="drag-wrapper" id="symbels">
            <Label
              title={"-"}
              className="purple"
              id="10"
              draggable
              onDragStart={(e) => handleDragStart(e, "10")}
            />
            <Label
              title={"+"}
              className="green"
              id="11"
              draggable
              onDragStart={(e) => handleDragStart(e, "11")}
            />
            <Label
              title={"("}
              className="yellow"
              id="12"
              draggable
              onDragStart={(e) => handleDragStart(e, "12")}
            />
            <Label
              title={")"}
              className="yellow"
              id="13"
              draggable
              onDragStart={(e) => handleDragStart(e, "13")}
            />
          </div>
          <p className="desc">نماد ها </p>
        </div>
        <div className="cloning">
          <div className="drag-wrapper third">
            <div className="title">
              <p>لطفا فرمول مورد نظر را به روش drag & drop بسازید</p>
              <img src={DELETE} alt="delete" />
            </div>
            <div
              className="dragable-content"
              id="content"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {content.map((item, index) => (
                <Label title={item} key={index} />
              ))}
            </div>
            <div className="formula">
              <div>fsdfsdf</div>
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
