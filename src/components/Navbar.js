import React from "react"
import {useState, createRef} from "react";
import Button from '@mui/material/Button';
import { Dialog, DialogContent } from "@mui/material";
import DialogActions from '@mui/material/DialogActions';

import DialogTitle from '@mui/material/DialogTitle';


export default function Navbar (props) {
    
    const {pomodoro, setPomodoro, shortBreak, setShortBreak, longBreak, setLongBreak } = props;

    const pomoInput = createRef;
    const shortBreakInput = createRef;
    const longBreakInput = createRef; 

    const[open,setOpen] = useState(false);
    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div className="nav--container">
           <div className="nav--center">
                <div className="nav--logo">
                    <img className="nav--image" src="/images/icon.png" alt ="#"/>
                    <h1 className="nav--description">hocusFocus</h1>
                </div>
                <div className="nav--buttons">
                    {/* <button>Report</button> */}
                    <Button variant="outlined" onClick={handleClickOpen}>Settings</Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Settings</DialogTitle>
                        <DialogContent>
                            <label for="pomodoro">Pomodoro</label>
                            <input 
                                id="pomodoro"
                                name="pomodoro"
                                type="number" 
                                value={pomodoro} 
                                onChange ={(event) => setPomodoro(event.target.value)}
                            ></input>
                            <label for="shortBreak">Short Break</label>

                            <input 
                                id="shortBreak"
                                name="shortBreak"
                                type="number" 
                                value={shortBreak}
                                onChange ={(event) => setShortBreak(event.target.value)}

                            ></input>
                            <label for="longBreak">Long Break</label>

                            <input
                                id="longBreak"
                                name="longBreak"
                             type="number" 
                             value={longBreak}
                             onChange ={(event) => setLongBreak(event.target.value)}

                            //  ref = {longBreakInput}
                             ></input>
                        </DialogContent>

                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleClose}>Save</Button>
                        </DialogActions>
                    </Dialog>
                    {/* <button>Login</button> */}
                </div>

           </div>      
        </div>
    )
}
