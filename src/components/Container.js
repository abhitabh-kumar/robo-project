import React from 'react'
import '../css/container.css'
import { Card, Grid } from '@mui/material'
import { GiRobotGolem } from 'react-icons/gi';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactDOMServer from 'react-dom/server';

export const Container = ({ step, play, reset, setReset }) => {
  const [grid, setGrid] = useState([
    [true, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ]
  );
  const [inter,setInter]=useState(null);

  useEffect(() => {
    if (play) {
      let curr1 = 0;
      let curr2 = 0;
      let ind = 0;
      const fun = setInterval(() => {
        let item = step[ind];
        document.getElementById(`${curr2.toString() + curr1.toString()}`).innerHTML = "";
        document.getElementById(`${curr1.toString() + curr2.toString()}`).innerHTML = "";
        if (item == "0" && curr2 > 0) curr2--;
        else if (item == "1" && curr1 > 0) curr1--
        else if (item == "2" && curr1 < 4) curr1++;
        else if (item == "3" && curr2 < 4) curr2++;
        document.getElementById(`${curr2.toString() + curr1.toString()}`).innerHTML = ReactDOMServer.renderToString(<GiRobotGolem className='robo' />);
        if (ind == 13){
          clearTimeout(fun);
          setInter(null);
        }
        ind++;
      }, 1000);
      setInter(fun);
    }
  }, [play])



  useEffect(() => {
    if (reset) {
      if(inter!=null) clearInterval(inter);
      if (reset) {
        let arr = [
          [true, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ];
        setGrid(arr);
        arr.forEach((item, index) => {
          item.forEach((data, ind) => {
            if (data) document.getElementById(`${index.toString() + ind.toString()}`).innerHTML = ReactDOMServer.renderToString(<GiRobotGolem className='robo' />);
            else document.getElementById(`${index.toString() + ind.toString()}`).innerHTML = "";
          })
        })
      }
      setReset(false)
    }
  }, [reset]);

  useEffect(() => {
    document.getElementById('44').classList.add("card1");
  }, [])

  return (
    <div className='container'>
      <Grid container wrap="nowrap" justify="flex-start">
        {
          grid.map((data, ind) => {
            return <Grid item key={ind}>
              {
                data.map((index, i) => {
                  return <Card variant="outlined" id={ind.toString() + i.toString()} key={ind.toString() + i.toString()} className='card'>
                    {
                      grid[ind][i] && <GiRobotGolem className='robo' />
                    }
                  </Card>
                })
              }
            </Grid>
          })
        }
      </Grid>
    </div>
  )
}
