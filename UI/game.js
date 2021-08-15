import {
  GAME_ACTION_OPTIONS
} from '../utils/constants/gameActionOptions.js'

const {
  STONE,
  PAPER,
  SCISSORS,
} = GAME_ACTION_OPTIONS

export class GameUI {
  constructor(root = document.getElementById('root'), formId = 'gameForm') {
    this.root = root
    this.formId = formId
  }

  render() {
    this.root.innerHTML = `
      <section class="Game">
        <div class="Game__Title">
          <h1>INICIA EL JUEGO</h1>
        </div>
        <div class="ListOfOptions">
          <div class="ListOfOptions__OptionCard" id="${STONE.id}">
            <h3>PIEDRA</h3>
          </div>
          <div class="ListOfOptions__OptionCard" id="${PAPER.id}">
            <h3>PAPEL</h3>
          </div>
          <div class="ListOfOptions__OptionCard" id="${SCISSORS.id}">
            <h3>TIJERA</h3>
          </div>
        </div>
      </section>
    `
  }
  
}