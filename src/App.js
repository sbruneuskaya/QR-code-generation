import './App.css';
import QRCode from "react-qr-code";
import {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function App() {

    const [inputValue, setInputValue]=useState("")
  return (
   <div className={"wrapper"}>
       <div className="container">
           <h1>your link to generate a QR code</h1>
           <div className={"link"}>
               <Box
                   sx={{
                       width: '100%',
                   }}
               >
                   <div>
                       <TextField
                           id="fullWidth"
                           label="your link"
                           fullWidth
                           maxRows={4}
                           onChange={(e)=>setInputValue(e.target.value)}
                       />
                   </div>
               </Box>
           </div>

           <div className="wrapperCode">
               <QRCode
                   size={256}
                   style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                   value={inputValue}
                   viewBox={`0 0 256 256`}
               />
           </div>
       </div>
   </div>
  );
}

export default App;
