import "./mult.css";

import { useRef, useState, useEffect } from "react";
export default function Mult() {
  const [array, setArray] = useState([]);
  const [num, setNum] = useState("");
  const handleClick = (e) => {
    let temp = [...array];
    var i=parseInt(0)
    for (i = 0; i < 10; i++) temp.push(i + 1);
    // alert(temp)
    setArray(temp);
    // var a = [1, 2, 3].map(function(x) { return x * 5; });
    // console.log(a)
    // setNum("")
  
  };
  const remove = (e, indx) => {
    const temp = [...array];
    temp.splice(indx, 1);
    setArray(temp);
  };
  return (
    <>
      <div className="mult_box">
        <h3 style={{ textAlign: "center" }}>Multiplication Tables</h3>
        <div className="mult_box_row1">
          <input
            type="text"
            placeholder="enter a number"
            value={num}
            onChange={(e) => {
              setNum(e.target.value);
              setArray([]);
            }}
          />
          <div>
            <button
              onClick={(e) => {
                handleClick(e);
              }}
            >
              ok
            </button>
          </div>
        </div>
        <div>
          {array.map((itm, indx) => {
            return (
              <>
                <div className="mult_box_row2">
                  <label className="mult_box_row2_label">
                    {itm}*{num} ={itm * parseInt(num)}
                  </label>{" "}
                  <button
                    onClick={(e) => {
                      remove(e, indx);
                    }}
                  >
                    X
                  </button>
                </div>
                <br />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
