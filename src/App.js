import "./App.css";
import FacebookIcon from "@mui/icons-material/Facebook";
// import { Avatar } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

//? letter avatar
//? icon
//? image
//? instgram story
//? avatra grp

function App() {
  return (
    <div className="App">
      <h1>Material UI</h1>
      <Avatar
        sx={{
          bgcolor: "transparent",
          border: "3px solid blue",
          color: "blue",
          fontWeight: 600,
        }}
        variant="rounded"
      >
        N
      </Avatar>
      <Avatar>
        <FacebookIcon />
      </Avatar>
      <Avatar
        src="https://images.news18.com/ibnlive/uploads/2021/07/1627377451_nature.jpg"
        alt="React"
        sx={{
          width: 150,
          height: 150,
          border: "3px solid red",
          padding: 0.5,
        }}
        imgProps={{ style: { borderRadius: "50%" } }}
        // variant="circular"
      />
      <AvatarGroup max={3} spacing={15} sx={{ width: "300px" }}>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>
    </div>
  );
}

export default App;
