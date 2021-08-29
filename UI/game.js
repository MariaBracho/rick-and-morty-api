
import { Game } from '../containers/game/game.js'
import {
  GAME_ACTION_OPTIONS
} from '../utils/constants/gameActionOptions.js'


const {
  STONE,
  PAPER,
  SCISSORS,
} = GAME_ACTION_OPTIONS

export class GameUI {
  constructor(root = document.getElementById('root'),rootSub= document.getElementById('rootSub'),formId = 'gameForm') {
    this.root = root
    this.rootSub = rootSub
    this.formId = formId
    
  }

  render() {
    this.root.innerHTML = `
      <section class="Game">
        <div class="Game__Title">
          <h1>PAPEL, PIEDRA O TIJERA</h1>
        </div>
        <div class="ListOfOptions">
          <div class="ListOfOptions__OptionCard card_juego_1" id="${STONE.id}">
            <h3>PIEDRA</h3>
          </div>
          <div class="ListOfOptions__OptionCard card_juego_2" id="${PAPER.id}">
            <h3>PAPEL</h3>
          </div>
          <div class="ListOfOptions__OptionCard card_juego_3" id="${SCISSORS.id}">
            <h3>TIJERA</h3>
          </div>
        </div>
      </section>
    `
  }
  modaltexto(texto){
    this.rootSub.innerHTML = `
      <section>
        <div>
          ${texto}
        </div>
      </section>
    `
  }
  
}

 export class ModalCard{
  constructor(modalInfo = document.getElementById('modalInfo'), showModal = false){
    this.modalInfo=modalInfo
    this.showModal = showModal

  }
  getModal(texto,ganador){
   this.modalInfo.innerHTML=`<div class="full-Card"><div class="cardWin"><div class="button-full"><button class="button" id="button">X</button></div> <div class="wintext"><div class="wintext-full"><h1 class="Win"> Enhorabuena ganador: "${ganador}"</h1><p class="resultWin"> ${texto}</p></div></div> </div></div>`
  }

  hideModal() {
    this.modalInfo.innerHTML= ""
  }

 }


 export class Machine{
  constructor(machine=document.getElementById("machine")){
  this.machine=machine

 }
 getImage(img,ataque){
  this.machine.innerHTML=`<div class="skillMachine" ><img src="${img}"></img><p class="skill">${ataque}</p></div>`
 }
}
