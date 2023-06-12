import React from 'react'
import '../css/implement.css'
import { useEffect } from 'react';
import { useState } from 'react';
const Implement = ({ step, play, reset, setPlay}) => {

  const [timer, setTimer] = useState(14)
  const [inter2,setInter2]=useState(null);

  useEffect(() => {
    if (play) {
      let element = document.getElementById("instruction");
      let ind = 0;
      var fun2 = setInterval(() => {
        setTimer(ind+1);
        if (ind == 13) {
          const last = document.createElement("p");
          last.innerHTML = `...Robot reached the destination 🔥`;
          last.style.fontWeight = "bold";
          element.appendChild(last)
          clearTimeout(fun2);
          setPlay(false);
          setInter2(null);
        }
        else {
          let item = step[ind]
          const node = document.createElement("p");
          if (item == "0") node.innerHTML = `Robot move Left`;
          else if (item == "1") node.innerHTML = `Robot move Up`;
          else if (item == "2") node.innerHTML = `Robot move Down`;
          else if (item == "3") node.innerHTML = `Robot move Right`;
          element.appendChild(node);
        }
        ind++;
      }, 1000);
      setInter2(fun2);
    }
  }, [play]);

  useEffect(() => {
    if (reset){
      setPlay(false);
      setTimer(14);
      if(inter2!=null) clearTimeout(inter2);
      document.getElementById("instruction").innerHTML = "";
    }
  }, [reset]);
  return (
    <div className='implement'>
      <div className="implemntHeading">
        <p style={{ margin: "0.7rem 1rem" }}> <span style={{ textDecoration: "underline" }}>Instructions Implemented</span> {timer != 14 ? <span>({timer})</span> : <></>}</p>
      </div>
      <div className="content1" id='instruction'>

      </div>
    </div>
  )
}

export default Implement