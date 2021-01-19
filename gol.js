const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

var resolution = 10;
canvas.width = window.innerHeight;
canvas.height = window.innerHeight;
// canvas.width = 800;
// canvas.height = 800;

var COLS = Math.floor(canvas.width / resolution);
var ROWS = Math.floor(canvas.height / resolution);

function buildGrid() {
  return new Array(COLS)
    .fill(null)
    .map(() =>
      new Array(ROWS).fill(null).map(() => Math.floor(Math.random() * 2))
    );
}

let grid = buildGrid();

requestAnimationFrame(update);

function update() {
  if(canvas.width != window.innerWidth || canvas.height != window.innerHeight){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if(canvas.width > 900){
        resolution = Math.floor((canvas.height) * 1/75);
        console.log(resolution);
    }
    COLS = Math.floor(canvas.width / resolution);
    ROWS = Math.floor(canvas.width / resolution);
    grid = buildGrid();
  }

  grid = nextGen(grid);
  render(grid);
  requestAnimationFrame(update);
}

function nextGen(grid) {
  const nextGen = grid.map((arr) => [...arr]);

  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];
      let numNeighbours = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (i === 0 && j === 0) {
            continue;
          }
          const x_cell = col + i;
          const y_cell = row + j;

          if (x_cell >= 0 && y_cell >= 0 && x_cell < COLS && y_cell < ROWS) {
            const currentNeighbour = grid[col + i][row + j];
            numNeighbours += currentNeighbour;
          }
        }
      }

      // rules
      if (cell === 1 && numNeighbours < 2) {
        nextGen[col][row] = 0;
      } else if (cell === 1 && numNeighbours > 3) {
        nextGen[col][row] = 0;
      } else if (cell === 0 && numNeighbours === 3) {
        nextGen[col][row] = 1;
      }
    }
  }
  return nextGen;
}

function render(grid) {
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];

      ctx.beginPath();
      ctx.rect(col * resolution, row * resolution, resolution, resolution);
      ctx.fillStyle = cell ? "white" : "#091833";
      ctx.fill();
      // ctx.stroke();
    }
  }
}
