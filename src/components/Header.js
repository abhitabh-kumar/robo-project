import React from 'react'
import '../css/header.css'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import logo from '../img/logo.png'
import { Avatar } from '@mui/material';
const steps = ["1","2","3","4","5","6","7","8","9","10","11","12","13"];
export const Header = () => {
    return (
        <div className='Header'>
            <Avatar
                alt="Remy Sharp"
                src={logo}
                sx={{ width: 40, height: 40 }}
                variant='square'
                id="avatar"
            />
            <Stepper activeStep={6} alternativeLabel className='steeper'>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel></StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}
