let highT;
let lowT;
let temp;
let hum;
function setup() {
  let url =
    "http://api.openweathermap.org/data/2.5/weather?q=Beijing,cn&units=metric&APPID=e5b8e9ce6b1c1e70bb0990f2db188331";
  loadJSON(url, gotWeather);
  createCanvas(720, 400);
  noCursor();
}
function gotWeather(weather) {
  highT = weather.main.temp_max;
  lowT = weather.main.temp_min;
  temp = weather.main.temp;
  hum = weather.main.humidity;
  console.log(weather);
}

function draw() {
  background(50, 50, temp * 10);
  stroke(255);
  line(0, 250, 170, 150);
  line(170, 150, 170, 80);
  line(200, 150, 520, 150);
  line(width, 250, width - 170, 150);
  line(width - 170, 150, width - 170, 80);
  line(50, height, 50, 300);
  line(width - 50, height, width - 50, 300);
  noStroke();
  fill(
    50 + map(sin(frameCount / 30), 0, 1, lowT * 5 + 5, highT * 5),
    20,
    210 - map(sin(frameCount / 30), 0, 1, lowT * 5 + 5, highT * 5)
  );

  h = map(sin(frameCount / 30), 0, 1, height - 20 * lowT, height - 15 * highT);
  r = map(sin(frameCount / 30), 0, 1, 10 * lowT + 30, 10 * highT);
  ellipse(width / 2, h, r, r);
  for (i = 0; i < (360 * hum) / 100; i++) {
    stroke(30, 90, 200);
    line(
      width / 2,
      height,
      width / 2 - sin(radians(i)) * r * random(2.2, 2.5),
      cos(radians(i)) * r * random(2.1, 2.2) + height
    );
  }
}
