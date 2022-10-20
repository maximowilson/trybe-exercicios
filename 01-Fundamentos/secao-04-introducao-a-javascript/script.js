const firstAngle = 50
const secondAngle = 50
const thirdAngle = 80

let sumAngles = firstAngle + secondAngle + thirdAngle;

let positivesAngles = firstAngle > 0 && secondAngle > 0 && thirdAngle > 0;

if (positivesAngles) {
    if (sumAngles === 180) {
        console.log(true)
    }
    else {
        console.log(false)
    };

}
else {
    console.log('Erro, números não correspondem à um triângulo')
}