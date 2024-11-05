import React from 'react'
import { useState } from 'react'
import SideNav from './sideNav'
import { useParams } from "react-router-dom";
import '/src/css/editTeam.css'

function editTeam() {
    const [teams, setTeams] = useState({ teamName: '', headChef: '', teamColor: '' });
    const {teamId} = useParams();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTeams((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    return (
        <div>
            <div>
                <SideNav />
            </div>
            <div className='whole-page'>
                <div>
                    <h1>Update your Team!</h1>
                    <img src="/src/assets/createTeam.png" />
                    <h2>Current Team Info:</h2>
                    <div className='info-container'> 
                        
                        <h3>Name: </h3>
                        <h3>Head Chef: </h3>
                        <h3>Team Color: </h3>
                        <h3>Number of Members: </h3>
                    </div>
                </div>

            </div>

            <form className="form-container">
                <div className='mini-container'>
                    <label>
                        <h3>Team Name:</h3>
                    </label>
                    <input className="input-style" type="text" name="teamName" placeholder='Enter your team name' onChange={handleChange} />
                </div>
                <div className='mini-container'>
                    <label>
                        <h3>Head Chef:</h3>
                    </label>
                    <input className="input-style" type="text" name="headChef" placeholder='Enter the name of head chef' onChange={handleChange} />
                </div>
                <div className='mini-container'>
                    <label>
                        <h3>No. of Members:</h3>
                    </label>
                    <input className="input-style" type="text" name="teamMemberCount" placeholder='Enter the number of team members' onChange={handleChange} />
                </div>
                <div className='mini-container'>
                    <label>
                        <h3>Team Color:</h3>
                    </label>

                    <ul onChange={handleChange}>
                        <li>
                            <input type="radio" id="Red" name="teamColor" value="Red" />
                            <label for="red">Red</label>
                        </li>

                        <li>
                            <input type="radio" id="Green" name="teamColor" value="Green" />
                            <label for="green">Green</label>
                        </li>

                        <li>
                            <input type="radio" id="Blue" name="teamColor" value="Blue" />
                            <label for="blue">Blue</label>
                        </li>

                        <li>
                            <input type="radio" id="Purple" name="teamColor" value="Purple" />
                            <label for="purple">Purple</label>
                        </li>

                        <li>
                            <input type="radio" id="Yellow" name="teamColor" value="Yellow" />
                            <label for="yellow">Yellow</label>
                        </li>

                        <li>
                            <input type="radio" id="Orange" name="teamColor" value="Orange" />
                            <label for="orange">Orange</label>
                        </li>

                        <li>
                            <input type="radio" id="Pink" name="teamColor" value="Pink" />
                            <label for="pink">Pink</label>
                        </li>

                        <li>
                            <input type="radio" id="Brown" name="teamColor" value="Brown" />
                            <label for="brown">Brown</label>
                        </li>

                    </ul>


                </div>

            </form>
            <input type="submit" value="Create your Team!" className="button-style" />

        </div>
    )
}

export default editTeam
