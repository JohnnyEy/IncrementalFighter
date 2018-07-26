import React from 'react';
import player from '../../images/gargoyle_male.png'


const gear = props => (
    <div style={{
        height: 500
    }}>
        Check out your gear, and switch out items
        <br />
        <img src={player} alt='Player' style={{
            position: 'relative',
            top: 0,
            left: 0,
            width: '200px',
            height: '200px',
        }} />
        <br />
        <div>
            <p>
                You've killed {props.enemiesKilled} enemies, giving your weapon {Math.ceil(props.enemiesKilled * 2)} bonus damage.
                Killing Bosses gives you defense. You have {props.bossesBeat*0.5} defense.
            </p>
        </div>
    </div>

)

const MainWeapon = {
    dmg: 5
}


export const Gear = gear,
    mainWeapon = MainWeapon;
