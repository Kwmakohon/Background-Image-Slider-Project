
const pics = [
'contBcg-0.jpeg',
'contBcg-1.jpeg',
'contBcg-2.jpeg',
'contBcg-3.jpeg',
'contBcg-4.jpeg'
]; 

const buttons = document.querySelectorAll('.btn');
const imageDiv = document.querySelector('.img-container');
let counter = 0; 

buttons.forEach(button => {
  button.addEventListener("click", e => changePic(e, button))
});

function changePic(e, button){
  
  if (button.classList.contains('btn-left')){
    counter --
    if (counter < 0) {
      counter = pics.length - 1
    }
  } else{
    counter ++
    if (counter > pics.length - 1){
      counter = 0
    } 
  }
  imageDiv.style.background = `url("../img/${pics[counter]}")`
};
