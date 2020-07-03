const display = document.querySelector('.display');

document.querySelectorAll ('.digits button' )
  .forEach(button => button.addEventListener('click',digitPressed));
  function digitPressed (event){
      display.value += event.target.innerText;
  }

  document.querySelectorAll ('.operations button' )
  .forEach(button => button.addEventListener('click', operationsPressed));
  function operationsPressed (event){
      display.value += event.target.innerText;
  }

  document.querySelector('.eq').addEventListener('click', calculate)
  function calculate(){
      display.value = eval (display.value);
  }
 
  document.querySelector('.del').addEventListener('click', remove)
  function remove () {
      display.value = ""; 
 }

document.querySelector('.contrary').addEventListener('click', changeSign)

function changeSign(){
//   if(display.value>=0){
//      display.value='-'+display.value
//     }
//     else{
//         display.value=display.value*(-1)
//     }

    display.value = display.value*(-1);
 }

document.querySelector('.decimal').addEventListener('click' , decimal)
function decimal() {
    display.value+='.'
}

document.querySelector('.left').addEventListener('click' , left)
function left() {
    display.value = display.value + "(";
}

document.querySelector('.right').addEventListener('click' , right)
function right() {
    display.value = display.value + ")";
}

document.querySelector('.sqrt').addEventListener('click' , sqrt)
function sqrt() {
    display.value = Math.sqrt(display.value);
}

document.querySelector('.back').addEventListener('click' , back)
function back() {
   display.value = display.value.pop;
}
