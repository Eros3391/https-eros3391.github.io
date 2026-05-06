const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = {
  x: 400,
  y: 300,
  size: 20,
  speed: 4
};

let keys = {};

document.addEventListener("keydown", (e) => {
  keys[e.key.toLowerCase()] = true;
});

document.addEventListener("keyup", (e) => {
  keys[e.key.toLowerCase()] = false;
});

function update() {
  if (keys["w"]) player.y -= player.speed;
  if (keys["s"]) player.y += player.speed;
  if (keys["a"]) player.x -= player.speed;
  if (keys["d"]) player.x += player.speed;
}

function draw() {
  ctx.clearRect(0, 0, 800, 600);
  ctx.fillStyle = "lime";
  ctx.beginPath();
ctx.fillStyle = "lime";
ctx.arc(player.x, player.y, player.size / 2, 0, Math.PI * 2);
ctx.fill();
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
