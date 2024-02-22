<script type="text/javascript"> 

window.onscroll = function() {myFunction()}; 

var header = document.getElementById("myHeader"); 
var sticky = header.offsetTop; 

function myFunction()
{ 
if (window.pageYOffset > sticky) { 
header.classList.add("sticky"); 
} else { 
header.classList.remove("sticky"); 
} 
} 

</script> 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> 

<script> 
$(document).ready(function(){ 
$(".menu-icon").click(function(){ 
$("nav").slideToggle(); 
}); 
}); 
</script> 
