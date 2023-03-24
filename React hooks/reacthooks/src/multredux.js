import "./mult.css";

import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Multredux() {
 const num=useSelector(state=>state.num)
  const array=useSelector(state=>state.array)
   const dispatch=useDispatch();
  const handleClick=(e)=>{
    var temp =[...array]
    let i=parseInt(0);
    for (i = 0; i < 10; i++) temp.push(i + 1);
    dispatch({type:"setArray", payload:temp})
    // alert(array)
  }
  const remove=(e,indx)=>{
   let temp=[...array]
   temp.splice(indx,1)
   dispatch({type:"setArray", payload:temp})
  }
  return (
    <>
      <div className="mult_box">
        <h3 style={{ textAlign: "center" }}>Multiplication Tables</h3>
        <div className="mult_box_row1">
          <input
            type="text"
            placeholder="enter a number"
            value={num}
            onChange={(e)=>{dispatch({type:"setNum",payload: e.target.value})
        dispatch({type:"setArray", payload:[]})}}
          />
          <div>
            <button
              onClick={(e)=>{handleClick(e)}}
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
                   onClick={(e)=>{remove(e,indx)}} 
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