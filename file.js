
let body = document.querySelector(`#body`)
let container = document.querySelector(`#container`)

let div = [];

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

let number = parseInt(prompt(`How many boxes would you like? Choose a number under 100`))

while(number > 100 || !number){
  number = parseInt(prompt(`How many boxes would you like? Choose a number under 100`))
}

for(i = 1; i <= number; i++){
  div[i] = document.createElement(`div`)
  let loopDiv = div[i]
  container.appendChild(loopDiv)
  loopDiv.classList.add(`squareDivs`)
}

let blackness = 0.0

div.forEach((div) => {
  div.addEventListener(`mouseenter`, function(){
    blackness += 0.1
    whiteness = 1.0
    let color = random_rgba();
    let borderColor = random_rgba();
    div.classList.add(`squareDivsHovered`)
    div.classList.remove(`squareDivsRemove`)
    if(!(div.style.backgroundColor) || div.style.backgroundColor == `black`){
      div.style.backgroundColor = color
      div.style.borderColor = borderColor;
      if(blackness > 1.0){
        blackness = 0
      }
      div.style.opacity = `${whiteness - blackness}`
    }
  })
});


let btn = document.querySelector(`#btn`)
btn.addEventListener(`click`, clear)

function clear(){
  div.forEach((div) => {
    div.classList.remove(`squareDivsHovered`)
    div.classList.add(`squareDivsRemove`)
    div.style.backgroundColor = `black`
    div.style.borderColor = `black`
    div.style.opacity = `1.0`
    blackness = 0
  });
}
