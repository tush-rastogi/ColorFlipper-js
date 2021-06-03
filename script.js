 window.onload=()=>{
 
 const digits=[0,1,2,3,4,5,6,7,8,9];
 const letter=["A","B","C","D","E","F"];

    const button=document.querySelector(".btn");

      const main=document.querySelector("main");

       const color=document.querySelector("span");

       button.addEventListener("click",()=>{
          
            let string="#";

              for(let i=1;i<=6;i++)
              {
                 if(i%2!=0)  
                string+=digits[Math.floor(Math.random()*10)];
                 
                else
                string+=letter[Math.floor(Math.random()*6)];

              }
            
              main.style.backgroundColor=string;
              color.innerHTML=string;
              main.style.borderColor=string;
              color.style.color=string;

               


       });
    }