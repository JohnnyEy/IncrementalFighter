import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import chiptune from '../music/Chiptune_Nobility.mp3';

const NavTabs = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Game")}
        className={
          props.currentPage === "Game" ? "nav-link active" : "nav-link"
        }
      >
        Game
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Gear")}
        className={
          props.currentPage === "Gear" ? "nav-link active" : "nav-link"
        }
      >
        Gear
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Stats")}
        className={
          props.currentPage === "Stats" ? "nav-link active" : "nav-link"
        }
      >
        Stats
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Contact")}
        className={
          props.currentPage === "Contact" ? "nav-link active" : "nav-link"
        }
      >
        Contact
      </a>
    </li>
    <ReactAudioPlayer src={chiptune} autoPlay loop controls/>
  </ul>
);

export default NavTabs;
