
function RandomNumber() {
  const three = [];

  for (let i = 0; three.length < 3; ++i) {
    const number1 = Math.floor(Math.random() * 9);
    const number2 = Math.floor(Math.random() * 9);
    const number3 = Math.floor(Math.random() * 9);

    if(!three.includes(number1)){
      three.push(number1);
    }
    if(!three.includes(number2)){
      three.push(number2);
    }
    if(!three.includes(number3)){
      three.push(number3);
    }
    document.getElementById("sample1").innerHTML = [number1, number2, number3];

  }
  console.log(three);
}
