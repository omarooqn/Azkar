const value = document.querySelectorAll(".value");
console.log(value);
const set = document.querySelectorAll(".one");
const reset = document.querySelectorAll(".bi");
const one  = document.querySelectorAll('.one');
console.log(one)
for (let i = 0; i < set.length; i++) {
  set[i].addEventListener("click", () => {
   if (value[i].innerText > 0) {
    value[i].innerText--;
   }

});
}

const morning = document.querySelectorAll('.zikr');
const night = document.querySelectorAll(".morning")[0];
const light = document.querySelector(".night");
console.log(night)
let display = night.style.display;
console.log(display)
morning.forEach(currentItem => {
    currentItem.addEventListener("click" , (eo) => {
        light.classList.toggle("show");
        night.classList.toggle("hide");
    
    })  
});


// const fun = () => {
// for (let i = 0; i < set.length; i++) {
//     one[i].addEventListener("click", () => {
//         if (value[i].innerText == 0) {
//          one[i].style.display = "none";
//         }
     
//      });
//      }

//     }

        for (let i = 0; i < set.length; i++) {
            one[i].addEventListener("click", () => {
                // if (value[i].innerText == 0) {
                //  one[i].style.display = "none";
                // }
             
                setTimeout(() => {
                    if (value[i].innerText == 0) 
                    one[i].style.display = "none";
                }, 200);
            });
            }
            
    