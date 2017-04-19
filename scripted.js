$(document).ready(function(){
   
  var array = ["most likely", "try again", "unlikely", "probably"];
   $("button").click(function(){
      var number= Math.floor(Math.random() * array.length); 
      $("#fortune").html(array[number])
   });
   
   
   
    
});