
let picDesc = document.querySelector(".pictureDescription");
let picDesc2 = document.querySelector(".pictureDescription2");
let picDesc3 = document.querySelector(".pictureDescription3");
let viewed = 0;
picDesc.addEventListener("click" , ()=>{
    if (viewed==0) {
        picDesc.style.height = '282px';
        viewed = 1;
    }
   else{
    picDesc.style.height = '167px';
    viewed = 0;

   }
})
picDesc2.addEventListener("click" , ()=>{
    if (viewed==0) {
        picDesc2.style.height = '282px';
        viewed = 1;
    }
   else{
    picDesc2.style.height = '167px';
    viewed = 0;

   }
})