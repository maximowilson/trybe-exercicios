let speed = 190;
// const speedCar = (speed) => {
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }
// };

let speedCar = speed >= 120? `Você ultrapassou o limite de velocidade`: `Você está na velocidade permitida`;

console.log(speedCar);