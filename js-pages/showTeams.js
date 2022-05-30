import {URL} from "../settings.js"
import {handleHttpErrors} from "../fetchUtils.js"
const teamURL = URL + "/teams"


export async function getTeams(){
    try{
     const teams = await fetch(teamURL)
     .then(res=>handleHttpErrors(res))
      
     const rows = teams.map(t=>`
        <tr>
          <td>${t.teamName}</td>
          <td>${t.numbMembers}</td>
        </tr>
     `).join("")

     document.getElementById("tbl-body").innerHTML = rows


    } catch(err){
        console.log(err.message)
    }
    


   
}