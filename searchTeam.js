import {URL} from "../settings.js"
import {makeOptions,handleHttpErrors} from "../fetchUtils.js"
import { showPage } from "../utils.js"
const riderURL = URL + "/riders"


export function getCertainTeamHandlers() {
    document.getElementById("certainTeam-btn").onclick = getCertainTeam

  }

async function getCertainTeam(){

    const certainTeam = document.getElementById("input-certainTeam").value

        try{
            await fetch(riderURL)
            .then(res=>handleHttpErrors(res))
            .then(data => {
                
                const rows = data.filter(function(rider) {return rider.teamName === certainTeam}).map(r => `
          <tr>
          <td>${r.riderName}</td>
          <td>${r.teamName}</td>
          <td>${r.time}</td>
          </tr>
          `).join("\n")
          document.getElementById("tbl-body").innerHTML = rows
            })
        }
        catch(err){
        alert(err.message)
             
           }

    }
