import {URL} from "../settings.js"
import {handleHttpErrors} from "../fetchUtils.js"
import { showPage } from "../utils.js"
const riderURL = URL + "/riders"

export async function getRiders(){
    try{
     const riders = await fetch(riderURL)
     .then(res=>handleHttpErrors(res))
      
     const rows = riders.map(r=>`
        <tr>
          <td>${r.riderName}</td>
          <td>${r.teamName}</td>
          <td>${r.time}</td>
          <td> <button id="btn-edit-rider###${r.id}"type="button" value= "${r.id}">Edit Rider</button></td>
        </tr>
     `).join("")

     document.getElementById("tbl-body").innerHTML = rows

     document.getElementById("tbl-body").onclick = editRider

    } catch(err){
        console.log(err.message)
    }

    function editRider(evt){
      const id = evt.target.id
      if(id.startsWith("btn-edit-rider")){
        const parts = id.split("###")
        const btnId = parts[1]
        sessionStorage.setItem("editId",btnId)
        showPage("page-edit-rider")
      }  
}

document.getElementById("certainTeam-btn").onclick = getCertainTeam
function getCertainTeam(){
  
  const certainTeam = document.getElementById("input-certainTeam").value

      try{
          fetch(riderURL)
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

}