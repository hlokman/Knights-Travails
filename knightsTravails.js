function knightMoves(start, end) {
  const moves = [
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [-1, 2],
  ];

  const queue = [[start]];
  const visited = [[...start]];

  while (queue.length > 0) {
    const path = queue.shift();
    const currentPosition = path[path.length - 1];

    if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
      return path;
    }

    moves.forEach((move) => {
      const nextPosition = [
        currentPosition[0] + move[0],
        currentPosition[1] + move[1],
      ];

      const isVisited = visited.some((arr) => {
        return (
          Array.isArray(arr) &&
          arr.every((item, index) => item === nextPosition[index])
        );
      });

      if (
        nextPosition[0] >= 0 &&
        nextPosition[0] < 8 &&
        nextPosition[1] >= 0 &&
        nextPosition[1] < 8 &&
        !isVisited
      ) {
        queue.push([...path, nextPosition]);
        visited.push(nextPosition);
      }
    });
  }
  return null;
}

function pathPrinter(pathArray) {
  console.log(
    `You made it in ${pathArray.length - 1} moves!  Here's your path:`
  );
  for (let i = 0; i < pathArray.length; i++) {
    console.log(pathArray[i]);
  }
}

pathPrinter(knightMoves([3, 3], [4, 3]));
