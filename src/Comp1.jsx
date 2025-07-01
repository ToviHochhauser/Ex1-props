import { useState } from "react";
import { TextField } from "@mui/material";
import Comp2 from "./Comp2";
function Comp1() {
  const [userInput, setUserInput] = useState("");
  return (
    <div style={{ backgroundColor: "red", height: "350px", width: "300px" }}>
      <h5 style={{paddingTop:"5px"}}>Comp1</h5>
      <TextField
        id="outlined-basic"
        label="inser text"
        variant="standard"
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
      <Comp2 info={userInput} />
    </div>
  );
}
export default Comp1;
