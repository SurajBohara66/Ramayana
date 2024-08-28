
    let grass = document.querySelector('.grass');
    let ram = document.querySelector('.ram');
    let ravan = document.querySelector('.ravan');
   let cont = document.querySelector('.container');
let wish = document.querySelector('.wish')
    window.addEventListener('scroll' , () =>{
      let value = window.scrollY;
      wish.style.marginTop = value * -2.3  + 'px'
      ram.style.left = value * -2.3  + 'px'
      ravan.style.right = value * -2.3  + 'px'
    })
