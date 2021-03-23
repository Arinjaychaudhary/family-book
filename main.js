var images=["father.jpg","vinita.jpg","aanya.jpg","divyan.jpg","arinjay.jpg"];
var text=["Father:Sanjay Chaudhary" , "Mother:Vinita Chaudhary" , "Sister:Aanya Chaudhary" , " Sister:Divyanshi Chaudhary","Me:Arinjay Chaudhary"];
var i=0;
function change(){
if (i == 5){
    i=0;
}
document.getElementById("image").src=images[i];
document.getElementById("name").innerHTML=text[i];
i++;
}