import { URL } from "../settings.js"
import { handleHttpErrors } from "../fetchUtils.js"
import { showPage } from "../utils.js"
const riderURL = URL + "/riders"

export async function getRiders() {
  try {
    const riders = await fetch(riderURL)
      .then(res => handleHttpErrors(res))

    const rows = riders.map(r => `
        <tr>
          <td>${r.riderName}</td>
          <td>${r.teamName}</td>
          <td>${r.time}</td>
          <td> <button id="btn-edit-rider###${r.id}"type="button" value= "${r.id}">Edit Rider</button></td>
          <td> <button id="btn-delete-rider###${r.id}"type="button" value= "${r.id}">Delete Rider</button></td>
          <td> <button id="btn-change-team###${r.id}"type="button" value= "${r.id}">Change Team</button></td>
         
        </tr>
     `).join("")

    document.getElementById("tbl-body").innerHTML = rows


    document.getElementById("tbl-body").onclick = function(evt){
      editRider(evt)
      deleteRider(evt)
      changeTeam(evt)
    }


  } catch (err) {
    console.log(err)
  }
}


function editRider(evt) {
  const id = evt.target.id
  if (id.startsWith("btn-edit-rider")) {
    const parts = id.split("###")
    const btnId = parts[1]
    sessionStorage.setItem("editId", btnId)
    showPage("page-edit-rider")
  }
}

function deleteRider(evt) {
  const id = evt.target.id
  if (id.startsWith("btn-delete-rider")) {
    const parts = id.split("###")
    const btnId = parts[1]
    sessionStorage.setItem("deleteId", btnId)
    showPage("page-delete-rider")
  }
}


function changeTeam(evt) {
  const rId = evt.target.id
  if (rId.startsWith("btn-change-team")) {
    const parts = rId.split("###")
    const btnId = parts[1]
    sessionStorage.setItem("riderId", btnId)
    showPage("page-change-team")
  }
}

