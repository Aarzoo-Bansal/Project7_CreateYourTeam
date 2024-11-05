import React from 'react'
import '/src/css/teamCard.css'
import { Link } from 'react-router-dom'

function teamCardView(props) {

  return (
    <>
    <div className='team-container'>
        <div id={props.teamColor} className='team-card'>
            <Link to={`/team/${props.id}`} key={props.id}><img className='team-img' src="src/assets/character.png" /></Link>
            <h3>Team Name: <span>{props.teamName}</span></h3>
            <h3>Head Chef: <span>{props.headChef}</span></h3>
            <h3>Team Color: <span>{props.teamColor}</span></h3>
            <h3>Number of Members: <span>{props.numberOfMembers}</span></h3>
            <Link to={`/edit/${props.id}`}><input type="submit" value="Make changes to the team!" className="button-style" /></Link>
            </div>
      
    </div>
    </>
    
  )
}

export default teamCardView
