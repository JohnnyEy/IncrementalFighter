import React, { Component } from "react";
import API from "../../utils/API";


class Contact extends Component {

    consoleLog() {
        console.log(window.ModalLogin.state.user.email);
    }

    Save() {


        if (window.ModalLogin.state.user === undefined) {

            alert("Please log in to access the save function");

        }
        else {

            API.saveGame({
                email: window.ModalLogin.state.user.email,
                enemyHealth: window.GameContainer.state.enemyHealth,
                enemyDamage: window.GameContainer.state.enemyDamage,
                playerHealth: window.GameContainer.state.playerHealth,
                enemiesKilled: window.GameContainer.state.enemiesKilled,
                playerDeaths: window.GameContainer.state.playerDeaths,
                bossesBeat: window.GameContainer.state.bossesBeat
            })
                .then(response => {
                    console.log(response);
                })
                .catch(err => console.log(err));
            alert("Game Saved!");
        }


    };



    Load() {
        if (window.ModalLogin.state.user === undefined) {

            alert("Please log in to access the load function");

        }
        else {
            API.loadGame(window.ModalLogin.state.user.email)
                .then(res => {

                    let lastSave = res.data

                    if (res.data.length > 1) {

                        lastSave = res.data[res.data.length - 1]

                        window.GameContainer.setState({
                            currentPage: "Game",
                            enemyHealth: lastSave.enemyHealth,
                            enemyDamage: lastSave.enemyDamage,
                            playerHealth: lastSave.playerHealth,
                            enemiesKilled: lastSave.enemiesKilled,
                            playerDeaths: lastSave.playerDeaths,
                            bossesBeat: lastSave.bossesBeat
                        })
                    } 
                    else {
                        window.GameContainer.setState({
                            currentPage: "Game",
                            enemyHealth: lastSave.enemyHealth,
                            enemyDamage: lastSave.enemyDamage,
                            playerHealth: lastSave.playerHealth,
                            enemiesKilled: lastSave.enemiesKilled,
                            playerDeaths: lastSave.playerDeaths,
                            bossesBeat: lastSave.bossesBeat
                        })
                    };
                })
                .then(window.GameContainer.render())
                .catch(err => console.log(err));
            alert("Game Loaded! \n THIS WILL RESET THE OPPONENT IMAGES!")
        }

    };

    sessionSave() {
        localStorage.setItem("save", JSON.stringify({
            enemyHealth: window.GameContainer.state.enemyHealth,
            enemyDamage: window.GameContainer.state.enemyDamage,
            playerHealth: window.GameContainer.state.playerHealth,
            enemiesKilled: window.GameContainer.state.enemiesKilled,
            playerDeaths: window.GameContainer.state.playerDeaths,
            bossesBeat: window.GameContainer.state.bossesBeat
        }));
    }

    sessionLoad() {
        let data = localStorage.getItem("save");
        let lastSave = JSON.parse(data);
        window.GameContainer.setState({
            currentPage: "Game",
            enemyHealth: lastSave.enemyHealth,
            enemyDamage: lastSave.enemyDamage,
            playerHealth: lastSave.playerHealth,
            enemiesKilled: lastSave.enemiesKilled,
            playerDeaths: lastSave.playerDeaths
        });
        window.GameContainer.render();
    };



    render() {
        return (
            <div style={{height:500}}>
                Links to repo, Linkedin pages?
                <div>
                    <button onClick={this.Save} id = 'saveButton' >
                        SAVE
                    </button>
                    <button onClick={this.Load} id = 'loadButton' >
                        LOAD
                    </button>
                    {/* <button onClick={this.consoleLog}>
                        CONSOLE LOG
                    </button> */}
                </div>
            </div>
        )
    }
};
export default Contact;
