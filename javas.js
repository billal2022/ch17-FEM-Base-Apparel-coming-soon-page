const btn = document.querySelector("button")
const alertt = document.querySelector("#alert")
const input = document.querySelector("input")


btn.addEventListener("click",()=>{
      
      let valid= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[hotmail||yahoo||outlook||gmail||icloud]+(?:\.[com]+)*$/;
    
      if (input.value.match(valid)) {
       
        alertt.style.display="none"
      } else {
        alertt.style.display="flex"
  
      }
    
    }
  

)
