import {URL} from "../settings.js"
import {handleHttpErrors} from "../fetchUtils.js"
import { showPage } from "../utils.js"
const riderURL = URL + "/riders"

export function addRiderHandlers() {
    document.getElementById("btn-add-rider").onclick = addRider
  }

  async function addRider(evt) {
    evt.preventDefault()
    const rider = {}
    rider.riderName = document.getElementById("input-riderName").value
    rider.teamId = document.getElementById("input-teamName").value

    try{
      await fetch(riderURL, makeOptions("POST", rider)).then(res=>handleHttpErrors(res))
      showPage("page-show-rider")
       
    } catch(err){
      alert(err.message)
    }
  }
