import './App.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Button } from '@mui/material';

function App() {
  return (
    <div className='App'>
      <h1>Material UI</h1>
      <Button disableElevation variant='text' color='error'>
        react
      </Button>
      <Button disableElevation variant='contained' color='warning'>
        react
      </Button>
      <Button disableElevation variant='contained' color='success'>
        react
      </Button>
      <Button
        variant='contained'
        sx={{
          background: 'blue',
          ':hover': {
            background: 'red',
          },
          textTransform: 'capitalize',
          fontWeight: '700',
        }}
        disableElevation
        // disableRipple
        startIcon={<FacebookIcon />}
        // endIcon={<FacebookIcon />}
        size='large'
        disabled
      >
        facebook
      </Button>
    </div>
  );
}

export default App;
