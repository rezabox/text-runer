const text= ['طراح وب','توسعه دهنده وب','برنامه نویس فرانت اند'];

var count=0;
var index=0;
var currentText = "";
var letter = "";


(function type(){
    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);
   document.querySelector('.type').textContent = letter;
   
   if(letter.length === currentText.length){
      count++;
      index = 0;
   }

   setTimeout(type,200);
})()