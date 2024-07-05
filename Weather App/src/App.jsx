//import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import WeatherApp from './WeatherApp';



// function App() {
//   let handleButton = ()=>{
//     console.log("Button was clicked");
//   }
//   return (
//     <>
//       <h1>Material UI Demo</h1>
//       <Button variant="text" onClick={handleButton}>Click me1!</Button>&nbsp;&nbsp;
//       <Button variant="contained" onClick={handleButton}>Click me2!</Button>&nbsp;&nbsp;
//       <Button variant="outlined" onClick={handleButton}>Click me3!</Button>&nbsp;&nbsp;
//       <Button disabled onClick={handleButton}>Click me4!</Button>&nbsp;&nbsp;
//       <Button variant="contained" color='error' onClick={handleButton}>Click me5!</Button>&nbsp;&nbsp;
//       <Button variant="contained" color='success' size="small" onClick={handleButton}>Click me5!</Button>&nbsp;&nbsp;
//       <br /><br />
//       <Button variant="contained"  startIcon={<DeleteIcon />}>
//         Delete
//       </Button>
//       <Alert severity="error">Delete option is given</Alert>
//     </>
//   )
// }




function App() {
  return (
    <>
    <WeatherApp />
    </>
  )
}

export default App
