let sum = 0;
let temp = {
  Belarus: 15,
  Spain: 14,
  Italy: 13,
  Japan: 8,
  Brazil: 23,
}
for (let i in temp) sum += temp[i];
let averagetemp = sum / Object.keys(temp).length;
console.log("Средняя температура стран: " + averagetemp);

function maxtemp(obj) {
  let max = 0;
  for (let i in obj) {
      if(max < obj[i]) max = obj[i];
  }
  return max;
}
let max = maxtemp(temp);
console.log("Максимальная температура среди стран: " + max);