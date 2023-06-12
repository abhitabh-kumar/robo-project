import { Grid } from '@mui/material';
import './App.css';
import { Build } from './components/Build';
import { Header } from './components/Header';
import { Learn } from './components/Learn';

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container style={{height:"89vh"}}>
        <Grid item xs={12} md={5} lg={4}>
        <Learn/>
        </Grid>
        <Grid item xs={12} md={7} lg={8}>
          <Build/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
