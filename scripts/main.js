function option(human) {

  const resultText = [ 'YOU DROP', 'YOU WIN', 'LOOOOOOOSER!!!']
  //  const name = ["stone", "paper", "scissors", "lizard", "spoke"]

  const game = [

    [0,1,2,2,1],
    [2,0,1,1,2],
    [1,2,0,2,1],
    [1,2,1,0,2],
    [2,1,2,1,0]

  ]

  const mac = Math.floor((Math.random() * 5))
  const result = game[mac][human]

  //console.log("human: " + name[human]);
  //console.log("mac: " + name[mac])
  //console.log(resultText[result])
  document.getElementById('result').innerHTML = resultText[result]
}
