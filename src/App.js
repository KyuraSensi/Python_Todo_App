import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (currentTask !== "") {
      setTasks([...tasks, currentTask]);
      setCurrentTask("");
    } else{
      setCurrentTask("Add task here...")
    }
  };

  const handleTaskChange = (e) => {
    setCurrentTask(e.target.value);
  };

  const handleClear = () => {
    setCurrentTask(""); // Clear the current input field
  };
  
  const handleDelete = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
};

  return (
    <Box className="App">
      <h1> Todo List:</h1>
      <Grid sx={{ marginBottom: "20px", width: "100%" }}>
        <form onSubmit={handleAdd}>
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="Add Task..."
            sx={{
              marginBottom: "20px",
              width: "50%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  color: "white",
                  border: "5px solid white", // set border color here
                },
                "&:hover fieldset": {
                  borderColor: "Blue", // hover border color
                  color: "white",
                },
                "&.Mui-focused fieldset": {
                  border: "5px solid white", // focus border
                  color: "white",
                },
                "& input": {
                  color: "white", // text color
                },
                "& input:placeholder": {
                  color: "white !important", // placeholder color
                },
              },
            }}
            onChange={handleTaskChange}
            value={currentTask}
          />
          <Grid container spacing={8} sx={{ paddingLeft: "10px" }}>
            <Grid item xs={5}>
              <Button
                variant="outlined"
                sx={{
                  border: "3px solid blue",
                  fontWeight: "700",
                  "&:hover": {
                    border: "3px solid blue", // hover border color same as default border color
                  },
                  width: "100px",
                }}
                onClick={handleClear}
              >
                Clear
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Button
                variant="contained"
                sx={{
                  border: "3px solid blue",
                  fontWeight: "700",
                  width: "100px",
                }}
                type="submit"
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </form>

        {tasks.map((task, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "center", width: '800px' }}>
            <Grid item xs={5} sx={{width: '800px', borderBottom: '1px solid white', marginTop: '20px'}}>
              <Checkbox
                id={`Task-${index}`}
                sx={{ color: "white", width: '70px', height: '70px', "&:hover": { borderColor: "white" } }}
              />
              <label
                htmlFor={`Task-${index}`}
                style={{ cursor: "pointer", color: "white", fontSize: "20px" }}
              >
                {task}
              </label>
            </Grid>
            <Grid item xs={30}>
              <Button variant="outlined" onClick={() => handleDelete(index)}>
              
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </Button>
            </Grid>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default App;
