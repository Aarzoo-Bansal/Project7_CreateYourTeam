import React, { useEffect } from 'react'
import { useState } from 'react'
import { supabase } from '../../Client'
import TeamCard from './teamCardView'
import SideNav from '/src/Components/sideNav'

function teamsView() {

    const [teams, setTeams] = useState([])

    useEffect(() => {

        const fetchTeams = async () => {
            const { data } = await supabase
                .from('OverCookedTeams')
                .select()
                .order('created_at', { ascending: true })

            setTeams(data)
            console.log(data);

        }

        fetchTeams().catch(console.error)

    }, []);

    return (

        <>
            <div>
                <SideNav />
            </div>
            <div>
                <h1>Your Team Gallery!!</h1>
                <div>
                    {teams && teams.length > 0 ? (teams.map((team) =>
                        <TeamCard teamColor={team.team_color} teamName={team.team_name} headChef={team.head_chef} numberOfMembers={team.number_of_members} id={team.id}/>)) : (<div></div>)}
                </div>
            </div>

        </>


    )
}

export default teamsView
