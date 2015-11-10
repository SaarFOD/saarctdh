// Beschrijving: Functie om de image1 te laten roteren +90
var degrees = 0 
    function rotateImage() {
     console.log("click registered");
             
    if(degrees < 270 ){
                       degrees= degrees+90;
                       }
    else{
         degrees=0;
        }
            
         document.getElementById("image1").style.transform = "rotate("+degrees+"deg)"; 
     };
            
   
//Beschrijving: Functie voor de dia show

var images = [
  "http://collegechurch.org.au/wp-content/uploads/2013/07/Sermon-remember.jpg",
  "http://cdn.wonderfulengineering.com/wp-content/uploads/2014/07/HD-landscape-Photographs.png",
  "http://media.digitalcameraworld.com/wp-content/uploads/sites/123/2014/10/Mountain_landscape_photography_CAN92.lead_.IMG_9997_SOTD.jpg",
  "http://marcus.ridoutfamily.co.uk/wp-content/uploads/2013/08/e15bf849de869bac1175d68de7ca53bd.jpg",
  "http://greeklandscapes.com/data1/images/finikasbeach.jpg"
  ];
  
  
var nextImage = 1;

 function next() {
   document.getElementById("image1").src = images[nextImage];
   
   if(nextImage <(4)) {  
                       nextImage = nextImage + 1;         
                       } 
	
	else { 
	      nextImage = 0;
    	 }
   document.getElementById("image1");
};
   


//Beschrijving: Functie om de gok functie in werking te brengen
var guess = function() {
    if (degrees % 360 === 0) {
                              alert("Perfect guess!")
                             }
     else {
           alert("Sorry, guess again!")
          }
    
    
}
     
     