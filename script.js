   /*Here a list of faces is created, and each face appears twice.*/
   const emojis = ["😍","😍","🤣","🤣","😘","😘","😢","😢","🥰","🥰","🤯","🤯","😡","😡","😎","😎"];
   
   /*This step shuffles the faces in a random order, like when you shuffle the cards before playing.*/
    var shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);

    /*Here you create little boxes (like the cards in the game) for each face, and put a face inside each box.*/
    for (var i =0; i<emojis.length; i++){
    let box = document.createElement('div')
    box.className = 'item';
    box.innerHTML = shuf_emojis[i]

   /*When you click on a box, the face inside is displayed.*/    
    box.onclick = function(){
   this.classList.add('boxOpen')
   setTimeout(function(){
   
   /*If two boxes are opened, the code checks if the faces are the same. If they are, it marks them as a match.*/
   if(document.querySelectorAll('.boxOpen').length > 1 ){
   if(document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML){
      document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
      document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')
      
      document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
      document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
      
   /*If you find all the pairs, the game tells you that you have won.*/   
   if(document.querySelectorAll('.boxMatch').length == emojis.length){
        alert('win')
      }
   /*If the two faces do not match, they are covered again so you can try again.*/   
      } else{
      document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
      document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
      }
   }
   },500)
}
/*Finally, the boxes with the faces are placed on the game board, ready for you to play.*/
document.querySelector('.game').appendChild(box);
}