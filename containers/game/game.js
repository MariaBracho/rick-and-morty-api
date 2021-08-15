import { aleatorio } from '../../utils/maths.js'
import { GAME_ACTION_OPTIONS } from '../../utils/constants/gameActionOptions.js'

const listOfAction = Object.values(GAME_ACTION_OPTIONS)

export class Game {
  constructor(initialLife = 1) {
    this.listOfAction = listOfAction
    this.lifePoints = 3

    this.userLife = initialLife
    this.machineLife = initialLife

    this.userNickName = 'Mr. Pene'
    this.machineNickName = 'I am a robot :)'

    this.finallyWin = null
  }

  getUserLife() {
    return this.userLife
  }

  substractUserLifePoints() {
    this.userLife = this.lifePoints - this.userLife
    return this.userLife
  }

  getMachineLife() {
    return this.machineLife
  }

  substractMachineLifePoints() {
    this.machineLife = this.lifePoints - this.machineLife
    return this.machineLife
  }

  getAction(id) {
    return this.listOfAction.find((action) => action.id === id)
  }

  getStatus() {
    return this
  }

  playGame(idUserAction, nickName = null) {
    console.log('START GAME!!!')

    if (nickName) {
      this.userNickName = nickName
    }

    let idMachineAction = aleatorio(1, 3)

    const userAction = this.getAction(idUserAction)
    const machineAction = this.getAction(idMachineAction)

    if (userAction && machineAction) {
      const sumResults = machineAction.id + userAction.id

      const userWin = userAction.win === sumResults
      const machineWin = machineAction.win === sumResults

      if (userWin) {
        console.log("User win")
        this.substractMachineLifePoints()
        this.finallyWin = this.userNickName
      } else if (machineWin) {
        console.log("Machine win")
        this.substractUserLifePoints()
        this.finallyWin = this.machineNickName
      } else {
        this.finallyWin = 'GAME TIE :('
      }

      console.log('WIN => ', this.finallyWin)
    }

    return this
  }

}
