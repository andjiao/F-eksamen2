import {URL} from "../settings.js"
import {makeOptions,handleHttpErrors} from "../fetchUtils.js"
import { showPage } from "../utils.js"
const riderURL = URL + "/riders"

export async function editRiderHandlers() {
 
    document.getElementById("btn-done-editing").onclick = editRider
    const id = sessionStorage.getItem("editId")
    if (id) {
      try {
     getRiderEdit(id)
    
      } catch (error) {
        alert(error.message)
  }
}

async function getRiderEdit(editId) {
    const rider= await fetch(riderURL + `/${editId}`)
    .then(res => handleHttpErrors(res))
    
    document.getElementById("input-riderName").value = rider.riderName
    document.getElementById("input-teamName").value= rider.teamName
    document.getElementById("input-time").value=rider.time 
    return rider
  }

  async function editRider() {
    const editId = sessionStorage.getItem("editId")
    const riderToEdit = {}
    riderToEdit.id = editId
    riderToEdit.riderName = document.getElementById("input-riderName").value
    riderToEdit.teamName = document.getElementById("input-teamName").value
    riderToEdit.time = document.getElementById("input-time").value
  
  try{
   await fetch(riderURL + `/${editId}`, makeOptions("PUT", riderToEdit))
   .then(res=>handleHttpErrors(res))
    showPage("page-show-riders")
  }catch(err){
    alert(err.message)
    
  }
  }
}

