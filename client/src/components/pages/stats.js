import React from 'react'

const Stats = props => (
    <div style={{height: 500}}>
        Check out and adjust Stats
        <br />
        <p>
            Your {props.enemiesKilled} kills are giving the enemy {props.enemiesKilled * 5} bonus health, and giving you {props.enemiesKilled * 2.5} extra health.
            Your deaths grant you toughness, giving you {props.playerDeaths*5} shielding.
            Your deaths and kills grant the enemy Fury, giving them {Math.ceil((props.playerDeaths*.5)+(props.enemiesKilled*0.21))} bonus damage.
        </p>
    </div>
)

export default Stats;