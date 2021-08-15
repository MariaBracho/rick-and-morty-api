import { GameUI } from '../../UI/game.js'
import { Game } from './game.js'
import {
  GAME_ACTION_OPTIONS
} from '../../utils/constants/gameActionOptions.js'


const gameUi = new GameUI()
gameUi.render()

const game = new Game()

game.substractUserLifePoints()

const listOfActions = Object.values(GAME_ACTION_OPTIONS)

const userNickName = 'Mi mor peshosha'

listOfActions.forEach((gameAction) => {
  const action = document.getElementById(gameAction.id)

  action.addEventListener('click', () => {
    game.playGame(gameAction.id, userNickName)
    console.log(game.getStatus())
  })

  console.log('action', action)
})
