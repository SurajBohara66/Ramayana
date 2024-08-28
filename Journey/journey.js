let hampi = document.querySelector(".animatedImg4");
let ashokVatika = document.querySelector(".animatedImg5");
let rameswaram = document.querySelector(".animatedImg6");
let ramPng = document.querySelector(".RamPng");
let position = 0;
hampi.addEventListener("click" , ()=>{
   
        ramPng.style.transform = "translateX(600px)"

     ramPng.style.transition = '1s'
     console.log("moved")
    
    

})
ashokVatika.addEventListener("click" , ()=>{
   
    ramPng.style.transform = "translateY(100px)"

 ramPng.style.transition = '1s'
 console.log("moved")



})
rameswaram.addEventListener("click" , ()=>{
   
    ramPng.style.transform = "translateY(200px)"

 ramPng.style.transition = '1s'
 console.log("moved")



})