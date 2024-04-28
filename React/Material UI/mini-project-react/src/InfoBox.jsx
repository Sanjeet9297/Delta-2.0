import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox(info) {
    const INIT_URL =
      "data:image/jpeg;base64,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";
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={INIT_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The Weather can be described as <i>{info.weather}</i> and Feels
                Like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
