import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"; 

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const INIT_URL ="https://images.unsplash.com/photo-1594492215832-a299f28a00c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    // let info = {
    //     city : "Delhi",
    //     feels_like: 38.56,
    //     humidity: 38,
    //     temp: 36.05,
    //     tempMax: 36.05,
    //     tempMin: 36.05,
    //     weather: "haze",
    // }
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fFJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
        {/* <h1>Weather Info - {info.weather}</h1> */}
        <div className='cardContainer'>
        
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city }{
                        info.humidity > 80 
                        ? <ThunderstormIcon/> 
                        : info.temp > 15 
                        ? <WbSunnyIcon/> 
                        : <AcUnitIcon/>
                    }
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                <p>Temparature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}%</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>Max Temp = {info.tempMax}&deg;C</p>
                <p>The Weather can be described as <b>{info.weather}</b> and  feels like {info.feels_like}&deg;C</p>
                </Typography>
            </CardContent>
            </Card>
        </div>
    </div>
  )
}
