import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import SideNav from './sideNav'
import { supabase } from '../../Client'
import '/src/css/createTeam.css'
import { Link } from 'react-router-dom';

function DetailedTeamView(props) {
    const [teamDetails, setTeamDetails] = React.useState([])
    const {teamId} = useParams();

    useEffect(() => {
        const getTeamDetails = async () => {
            console.log( {teamId})
            
            const { data } = await supabase
                .from('OverCookedTeams')
                .select()
                .eq('id', teamId) 

                setTeamDetails(data)
                console.log(data)
        }

        getTeamDetails().catch(console.error)
    }, [])


    return (
        <div>
            <div>
                <SideNav />
            </div>
            <div className='whole-page'>
                <div>
                <div>
                    {teamDetails && teamDetails.length > 0 ? (teamDetails.map((team) =>
                    <div>

                        <h1>Team Name: {team.team_name}</h1>
                        <h1>Stats:</h1>
                        <h2>Head Chef: {team.head_chef}</h2>
                        <h2>Color: {team.team_color}</h2>
                        <h2>Number of Members: {team.number_of_members}</h2>
                        <br></br>

                        {team.number_of_members >= 5 ? (<h3>Great! This team has required number of members. 🎉🥳</h3>) :
                            (<h3>Oh no! This team does not have required number of members. 😔😭</h3>)}

<Link to={`/edit/${team.id}`}><input type="submit" value="Make changes to the team!" className="button-style" /></Link>
                    </div>
                        
                    )) : (<div></div>)}
                </div>
                </div>
            </div>

        </div>
    )
}

export default DetailedTeamView
