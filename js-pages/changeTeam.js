import {URL} from "../settings.js"
import {makeOptions,handleHttpErrors} from "../fetchUtils.js"
import { showPage } from "../utils.js"
const riderURL = URL + "/riders"

export async function changeTeamHandlers() {
    document.getElementById("btn-done-changing").onclick = changeTeam
   
    const id = sessionStorage.getItem("riderId")
    if (id) {
      try {
     getRiderChange(id)
      } catch (error) {
        alert(error)
  }
}

async function getRiderChange(riderId) {
    const rider= await fetch(riderURL + `/${riderId}`)
  
    .then(res => handleHttpErrors(res))
    
    document.getElementById("input-teamName").value= rider.teamName
    
  
  }

  async function changeTeam() {
    const riderId = sessionStorage.getItem("riderId")
  
    const riderToChange = {}
    riderToChange.id = riderId
    const teamName = document.getElementById("input-teamName").value 
  
  try{
   await fetch(riderURL + `/${riderId}/${teamName}`, makeOptions("PATCH", false))
   .then(res=>handleHttpErrors(res))
    showPage("page-show-riders")
  }catch(err){
    alert(err.message)
    
  }
  }
}