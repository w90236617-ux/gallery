let imageArray= [
    "./assets/pc1.webp",
    "./assets/pc-2.webp",
    "./assets/pc-3.jpeg",
    "./assets/pc-4.jpeg",
    "./assets/pc-5.jpeg",
]
let images = document.getElementById("images")
let rightArr= document.getElementById("right-arr")
let backArr = document.getElementById('left-arr')
var i= 0;

function leftArr() {
    i=i-1;
    images.src=imageArray[i]
    rightArr.style.display="inline"
    if (i==0) {
        backArr.style.display="none"
    }    
    }


function rightArrow() {
    i=i+1
    images.src=imageArray[i]
    backArr.style.display="inline"
   
   if (i==imageArray.length-1) {
    rightArr.style.display="none"
   }
}