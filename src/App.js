import "./App.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import IconButton from "@mui/material/IconButton";

//? 1)predefined
//? 2)style
//? 3)sx

//! IconButton

function App() {
  return (
    <div className="App">
      <h1>Material UI</h1>
      <IconButton sx={{ color: "red" }}>
        <FacebookIcon color="warning" fontSize="large" />
      </IconButton>
      <IconButton>
        <WhatsAppIcon style={{ color: "green", fontSize: 70 }} />
      </IconButton>
      <IconButton>
        <YouTubeIcon sx={{ color: "red", fontSize: 70 }} />
      </IconButton>
    </div>
  );
}

export default App;
