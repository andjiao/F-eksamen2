import {URL} from "../settings.js"
import {handleHttpErrors} from "../fetchUtils.js"
const riderURL = URL + "/riders"

export function getCertainTeamHandlers() {
  document.getElementById("certainTeam-btn").onclick = getCertainTeam
}

function getCertainTeam() {

  const certainTeam = document.getElementById("input-certainTeam").value

  try {
    fetch(riderURL)
      .then(res => handleHttpErrors(res))
      .then(data => {
        if (certainTeam === "") {
          const rows = data.map(r => `
        <tr>
          <td>${r.riderName}</td>
          <td>${r.teamName}</td>
          <td>${r.time}</td>
        </tr>
     `).join("")
          document.getElementById("tbl-body").innerHTML = rows

        } else {
          const rows = data.filter(function (rider) {
            let newRider = rider.teamName.replaceAll(" ", "");
            let newSearch = certainTeam.replaceAll(" ", "");
            return newRider.toLowerCase() === newSearch.toLowerCase()
          }).map(r => `
        <tr>
        <td>${r.riderName}</td>
        <td>${r.teamName}</td>
        <td>${r.time}</td>
        </tr>
        `).join("\n")
          document.getElementById("tbl-body").innerHTML = rows
        }
      })
  }
  catch (err) {
    alert(err.message)

  }

}
