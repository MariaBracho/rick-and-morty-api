import {
	Burguer
} from "../../UI/nav.js"

let menu=new Burguer()
let count=0

let burguer=window.matchMedia(`(max-width:991px)`)
burguer.addListener(function(event){
  console.log("evento",event)
  if(burguer.matches)
   menu.button()
   menu.hideInicio()
   if(burguer.matches===false){
    menu.hideButton()
    menu.getInicio()
    menu.hideBurguer()

   }
})

if(burguer.matches){
  menu.button()
  console.log("Esta funcionando")
}

document.getElementById("burguerBotton").addEventListener("click",(event)=>{
console.log("evento del boton",event)  
 menu.getBurguer()
 count=count+1
 if(count%2===0){
  menu.hideBurguer()
 }
})
