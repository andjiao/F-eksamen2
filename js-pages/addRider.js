import {URL} from "../settings.js"
import {handleHttpErrors} from "../fetchUtils.js"
import { showPage } from "../utils.js"
import { makeOptions } from "../fetchUtils.js"
const riderURL = URL + "/riders"




export function addRiderHandlers() {
    document.getElementById("btn-add-rider").onclick = addRider
  }

  async function addRider() {
    
    const rider = {}
    rider.riderName = document.getElementById("input-riderName").value
    rider.teamName = document.getElementById("input-teamName").value

    try{
      await fetch(riderURL, makeOptions("POST", rider)).then(res=>handleHttpErrors(res))
      showPage("page-show-riders")
       
    } catch(err){
      console.log("fejl ved addRider")
      alert(err.message)
    }
  }
