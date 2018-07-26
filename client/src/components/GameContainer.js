import React, { Component } from "react";
import NavTabs from './navtabs'
import Game from './pages/game'
import { enemy } from '../images/enemyPool'
import Contact from './pages/contact'
import { Gear } from './pages/gear'
import Stats from './pages/stats'


class GameContainer extends Component {
  state = {
    currentPage: "Game",
    enemyHealth: 100,
    enemyDamage: 1,
    playerHealth: 50,
    enemiesKilled: 0,
    playerDeaths:0,
    bossesBeat:0,
    bossFight: false,
    actions: []
  };
  remove = (items, index) => {
    return [...items.slice(0, index),
    ...items.slice(index + 1, items.length)];
  };
  attack = dmg => {
    let playerFullDmg =dmg + Math.ceil(this.state.enemiesKilled*2)
    let enemyMinDmg = Math.floor(((this.state.enemyDamage+Math.floor(this.state.enemiesKilled*0.5))+(this.state.playerDeaths*0.5))-(Math.floor(this.state.bossesBeat*0.5)))
    let enemyFullDmg = Math.floor(Math.random()*(enemyMinDmg*1.1)+enemyMinDmg)
    if(this.state.enemiesKilled>=5&&this.state.enemiesKilled % 5 === 0){
      this.setState({bossFight:true})
      enemyFullDmg=Math.ceil(enemyFullDmg*1.5)
    }
    this.setState({ enemyHealth: this.state.enemyHealth - playerFullDmg, playerHealth: this.state.playerHealth - enemyFullDmg, actions: [...this.state.actions, `|| Attacked enemy for ${playerFullDmg}, Enemy hit you for ${enemyFullDmg}`] })
    if (this.state.enemyHealth <= playerFullDmg) {
      this.setState({ enemiesKilled: this.state.enemiesKilled + 1})
      this.setState({ enemyHealth: 100 + (this.state.enemiesKilled * 5),playerHealth: 50+(Math.ceil(this.state.enemiesKilled*2)), actions: [...this.state.actions, `|| Killed the Enemy!`] })
      enemy()
      if(this.state.bossFight===true){
        this.setState({bossFight:false, bossesBeat:this.state.bossesBeat+1})
      }
    }
    if (this.state.playerHealth <= enemyFullDmg) {
      this.setState({playerDeaths: this.state.playerDeaths+1})
      this.setState({enemyHealth: 100+(this.state.enemiesKilled * 5),playerHealth:50+(Math.ceil(this.state.enemiesKilled*2))+(Math.ceil(this.state.playerDeaths*5)), actions:[...this.state.actions, '||The Enemy Killed you!']})
    }
    if (this.state.actions.length >= 5) {
      this.setState({ actions: this.remove(this.state.actions, 0) })
    }
  }
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  returnState = () => {
    return this.state.enemiesKilled;
  }
  renderPage = () => {
    switch (this.state.currentPage) {
      case "Game":
        return <Game
          actions={this.state.actions}
          playerHealth={this.state.playerHealth}
          playerDeaths={this.state.playerDeaths}
          enemiesKilled={this.state.enemiesKilled}
          bossesBeat={this.state.bossesBeat}
          enemyHealth={this.state.enemyHealth}
          attack={this.attack} />
      case "Gear":
        return <Gear
          bossesBeat={this.state.bossesBeat}
          enemiesKilled={this.state.enemiesKilled}
          playerDeaths={this.state.playerDeaths} />
      case "Stats":
        return <Stats
          enemiesKilled={this.state.enemiesKilled}
          playerDeaths={this.state.playerDeaths} />
      default:
        return <Contact />
    }
  };
  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}


export default GameContainer;
