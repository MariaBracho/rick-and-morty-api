import {
  aleatorio
} from '../../utils/maths.js'
import {
  GAME_ACTION_OPTIONS
} from '../../utils/constants/gameActionOptions.js'

const listOfAction = Object.values(GAME_ACTION_OPTIONS)

export class Game {
  constructor(initialLife = 3) {
    this.listOfAction = listOfAction
    this.lifePoints = 1

    this.userLife = initialLife
    this.machineLife = initialLife

    this.userNickName = 'usuario'
    this.machineNickName = 'La maquina'

    this.finallyWin = null
    this.finalGame=null

    this.ActionMachine=null
  }

  getUserLife() {
    return this.userLife
  }

  substractUserLifePoints() {
    this.userLife = this.userLife - this.lifePoints
    return this.userLife
  }

  getMachineLife() {
    return this.machineLife
  }

  substractMachineLifePoints() {
    this.machineLife = this.machineLife - this.lifePoints
    return this.machineLife
  }

  getAction(id) {
    return this.listOfAction.find((action) => action.id === id)
  }

  getStatus() {
    return this
  }
  newGame(){
    this.machineLife=3
    this.userLife=3
    this.finallyWin=null
    this.finalGame=null

  }

  getActionMachine(){
      return this.ActionMachine
  }

  playGame(idUserAction, nickName = null) {
    console.log('START GAME!!!')

    if (nickName) {
      this.userNickName = nickName
    }

    let idMachineAction = aleatorio(1, 3)

    const userAction = this.getAction(idUserAction)
    const machineAction = this.getAction(idMachineAction)
    this.ActionMachine=machineAction

    if (userAction && machineAction) {
      const sumResults = machineAction.id + userAction.id

      const userWin = userAction.win === sumResults
      const machineWin = machineAction.win === sumResults

      if (!(this.getUserLife() === 0 && this.getMachineLife() === 0)) {
        if (userWin) {
          console.log("User win")
          this.substractMachineLifePoints()
          this.finallyWin = `Ganador: "${this.userNickName}"`
        } else if (machineWin) {
          console.log(machineAction.url)
          console.log("Machine win")
          this.substractUserLifePoints()
          this.finallyWin =` Ganador: "${this.machineNickName}"`
        } else {
          this.finallyWin = 'GAME TIE :('
        }
      }
      if (this.getUserLife() === 0) {
        console.log("gano la maquina")
         this.finalGame=`Intentalo de nuevo :(, ganador: "${this.machineNickName}"`

      } else if (this.getMachineLife() === 0) {
        console.log("gano el usuario")
        this.finalGame=`Enhorabuena ganador: "${this.userNickName}"`
      }

      return this.finallyWin
    }

    return this
  }

}