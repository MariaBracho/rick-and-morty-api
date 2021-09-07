
import{
  Machine
} from '../../UI/game.js'
import {
  GameUI
} from '../../UI/game.js'
import {
  Game
} from './game.js'
import {
  GAME_ACTION_OPTIONS
} from '../../utils/constants/gameActionOptions.js'
import{
  ModalCard
}from'../../UI/game.js '
let showModal
const modaltarget=new ModalCard()
const gameUiSub = new GameUI()
gameUiSub.render()
const machine= new Machine()

const game = new Game()
const listOfActions = Object.values(GAME_ACTION_OPTIONS)


let userNickName = ""

document.getElementById("nickname").addEventListener("change", (evt) => {
  userNickName = evt.target.value
})



listOfActions.forEach((gameAction) => {
  const action = document.getElementById(gameAction.id)

  action.addEventListener('click', () => {
    game.playGame(gameAction.id, userNickName)
    showModal=game.getUserLife() === 0 || game.getMachineLife() === 0
    console.log(game.getStatus())
    machine.getImage(game.getActionMachine().url,game.getActionMachine().name)
    gameUiSub.modaltexto(`<div class="winfinaly" >${game.finallyWin} </div><div class="container" > <br> <div class="contadorUser"><p class="lifeUser"> vida de usuario: </p><p class="lifeUserSub">${game.getUserLife()}</div></p>
     <div class="contadorMachine"><p class="lifeMachine"> vida de la maquina: <p class="lifeMachineSub">${game.getMachineLife() }</p></div></p></div>`)
    if (showModal===true) {
    modaltarget.getModal(`vida de usuario: ${game.getUserLife()} y vida de maquina:${game.getMachineLife()}`, game.finalGame)
    let button=document.getElementById("button").addEventListener("click",()=>{
    game.newGame()
    modaltarget.hideModal()
     gameUiSub.modaltexto(`<div class="container" > <br> <div class="contadorUser"><p class="lifeUser"> vida de usuario: </p><p class="lifeUserSub">${game.getUserLife()}</div></p>
     <div class="contadorMachine"><p class="lifeMachine"> vida de la maquina: <p class="lifeMachineSub">${game.getMachineLife() }</p></div></p></div>`)
    console.log(game.getMachineLife())
})
  }     
  })
  console.log('action', action)

})

let id=document.getElementById("modalInfo")




