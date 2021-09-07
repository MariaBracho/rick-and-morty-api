export class Burguer{
	constructor(inicio=document.getElementById("inicio"),burguer=document.getElementById("burguer"),burguerButton=document.getElementById("burguerBotton")){
		this.burguer=burguer
		this.burguerButton=burguerButton
		this.inicio=inicio
	}

	getInicio(){
		this.inicio.innerHTML=`
		<ul class="lista">
			<li class="lista--sub"><a href="Index.html" class="lista--link">Inicio</a></li>
			<li class="lista--sub"><a href="juego.html" class="lista--link">Juego</a></li>
			<li class="lista--sub"><a href="card.html" class="lista--link">Cards</a></li>
		</ul>`

	}
	getBurguer(){
		this.burguer.innerHTML=`
		<div class="listBurguer">
		 <ul class="listContainer">
         <li class="list1 list"><a href="Index.html" class="burguer--link">Inicio</a></li>
         <li class="list2 list"><a href="juego.html" class="burguer--link">Juego</a></li>
         <li class="list3 list"><a href="card.html" class="burguer--link">Cards</a></li>
         </ul>
         </div>`
	}
	hideInicio(){
		this.inicio.innerHTML=``
	}
	button(){
		this.burguerButton.innerHTML=`<div class="burguerFull"><div class="buttonBurguer" id="buttonBurguer"></div></div>`
	}
	hideButton(){
		this.burguerButton.innerHTML=``
	}
	hideBurguer(){
		this.burguer.innerHTML=``
	}
}