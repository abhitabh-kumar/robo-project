import React, { useEffect, useState } from 'react'
import '../css/build.css'
import ConstructionIcon from '@mui/icons-material/Construction';
import { Container } from './Container';
import Implement from './Implement';
import { Avatar, Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import EastIcon from '@mui/icons-material/East';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ReplayIcon from '@mui/icons-material/Replay';
import WestIcon from '@mui/icons-material/West';
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';
import Badge from '@mui/material/Badge';
import ClearIcon from '@mui/icons-material/Clear';

export const Build = () => {
    const [step, setStep] = useState(["", "", "", "", "", "", "", "", "", "", "", "", "", ""]);
    const [icons, setIcons] = useState([
        <WestIcon style={{ color: "black" }} />,
        <NorthIcon style={{ color: "black" }} />,
        <SouthIcon style={{ color: "black" }} />,
        <EastIcon style={{ color: "black" }} />
    ]);
    const [start, setStart] = useState("");
    const [finish, setFinish] = useState("");
    const [play, setPlay] = useState(false);
    const [reset, setReset] = useState(false);

    useEffect(() => {
        if (finish != "") {
            let arr = step;
            arr[finish] = start;
            setStep(arr);
            setFinish("");
            setStart("");
        }
    }, [finish])


    const cross = (e) => {
        let id = e.target.id
        setFinish(id);
    }

    const touchStart = (e) => {
        e = e.target;
        while (e.id == null || e.id == '') {
            e = e.parentNode;
        }
        setStart(e.id)
    }

    return (
        <div className='Build'>
            <div className="buildHeading">
                <ConstructionIcon style={{ fontSize: "2rem" }} />
                <p>Build</p>
            </div>
            <div className="contentFirst">
                <Container step={step} play={play} reset={reset} setReset={setReset} />
                <Implement step={step} play={play} reset={reset} setPlay={setPlay} />
            </div>
            <div className="logic">
                <p>Logic Panel</p>
                <div className="icons">
                    {
                        step.map((item, ind) => {
                            return item == "" ? <Avatar id={ind} onDrop={(e) => setFinish(e.target.id)} onDragOver={(e) => e.preventDefault()} key={ind} sx={{ bgcolor: grey[300], width: 35, height: 35 }} variant="rounded">
                                <></>
                            </Avatar> :
                                <Avatar key={ind} sx={{ bgcolor: grey[300], width: 35, height: 35 }} variant="rounded">
                                    <span id={ind} className='cross' onClick={(e) => cross(e)}>x</span>
                                    {
                                        icons[parseInt(item)]
                                    }
                                </Avatar>
                        })
                    }
                </div>
            </div>
            <div className="direction">
                {icons.map((item, ind) => {
                    return <Avatar id={ind} key={ind} onTouchEnd={(e) => setFinish(document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY).id)} draggable="true" onTouchStart={(e) => touchStart(e)} onDragStart={(e) => setStart(e.target.id)} sx={{ bgcolor: grey[400], width: 35, height: 35 }} variant="rounded" className='icon1'>
                        {item}
                    </Avatar>
                })}
                <Button id='play' variant="contained" style={{ color: "rgb(26 36 122)", backgroundColor: "rgb(255 218 0)" }} onClick={() => {
                    setReset(true);
                    setPlay(true);
                }}><PlayArrowIcon /> Play</Button>
                <Button id='reset' variant="contained" style={{ color: "rgb(26 36 122)", backgroundColor: "rgb(255 218 0)" }} onClick={() => {
                    setReset(true);
                    setPlay(false);
                }}><ReplayIcon /></Button>
            </div>
        </div>
    )
}
