import React from "react"
import {useState} from "react";
import Button from '@mui/material/Button';
import { Dialog, DialogContent } from "@mui/material";
import DialogActions from '@mui/material/DialogActions';

import DialogTitle from '@mui/material/DialogTitle';
import {createTheme,ThemeProvider} from '@mui/material/styles';

export default function Navbar (props) {
    
    const {mode, pomodoro, setPomodoro, shortBreak, setShortBreak, longBreak, setLongBreak } = props;

    

    const[open,setOpen] = useState(false);
    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    function mainColor () {
        if (mode === "hocusFocus") {
            return '#560d9b';
        } 

        if (mode === "Break") {
            return '#ff8a33';
        }
        
        if (mode === "Long") {
            return '#ffb133';
        }
    };
    const theme = createTheme({
        palette: {
            primary: {
                main: mainColor(),
                contrastText: "#ffffff"
            },
        },
    });


    return (

        <ThemeProvider theme={theme}>
            <div className="nav--container">
           <div className="nav--center">
                <div className="nav--logo">
                    <img className="nav--image" src="/images/icon.png" alt ="#"/>
                    <h1 className="nav--description">hocusFocus</h1>
                </div>
                <div className="nav--buttons">
                    {/* <button>Report</button> */}
                    
                        <Button variant="contained" color ="primary" onClick={handleClickOpen}>Settings</Button>
                   
                    
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Settings</DialogTitle>
                        <DialogContent className= "dialogContainer">
                            <label for="pomodoro" className="settings-label">Pomodoro</label>
                            <label for="shortBreak" className="settings-label">Short Break</label>
                            <label for="longBreak" className="settings-label">Long Break</label>

                            <input 
                                className="settings-button"
                                id="pomodoro"
                                name="pomodoro"
                                type="number" 
                                value={pomodoro} 
                                onChange ={(event) => setPomodoro(event.target.value)}
                            ></input>
                            <input 
                                className="settings-button"
                                id="shortBreak"
                                name="shortBreak"
                                type="number" 
                                value={shortBreak}
                                onChange ={(event) => setShortBreak(event.target.value)}
                            ></input>

                            <input
                                className="settings-button"
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

        </ThemeProvider>
        
    )
}
