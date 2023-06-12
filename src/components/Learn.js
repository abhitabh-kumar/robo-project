import React from 'react'
import '../css/learn.css'
import { Avatar } from '@mui/material'
import head from "../img/head.png"

export const Learn = () => {
    return (
        <div className='Learn'>
            <div className="heading">
            <Avatar
                alt="Remy Sharp"
                src={head}
                sx={{ width: 35, height: 35 }}
                variant='square'
                style={{marginLeft:"2rem"}}
            />
            <p>Learn</p>
            </div>
            <div className="content">
                <p>1. Set the starting position: Drag and place the sprite on the stage to set its initial position.Click and drag the sprite to position it where you want it to start</p>
                <p>2. Add movement blocks: In the block palette on the left side of the screen, locate the "Motion" category.You will find blocks like "Move 10 steps","Turn 15 degrees". and "Go to x:[] y:[]".</p>
                <p>3. Use the "Go to x:[] y:[]" block:Drag the "Go to x:[] values of the block to the coordinates of target position you want the sprite to move to position (200,100), set the x value to 200 and the y value to 100.</p>
            </div>
        </div>
    )
}
