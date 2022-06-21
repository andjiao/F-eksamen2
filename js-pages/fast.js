import { URL } from "../settings.js"
import { handleHttpErrors } from "../fetchUtils.js"
const riderURL = URL + "/riders"

export function fastHandlers() {
    document.getElementById("fastest-time").onclick = getFast
}

function getFast() {
    try {
        fetch(riderURL)
            .then(res => handleHttpErrors(res))
            .then(data => {
                data = data.sort((a, b) => a.time - b.time)
              const rows =data.map(r => `
        <tr>
        <td>${r.riderName}</td>
        <td>${r.teamName}</td>
        <td>${r.time}</td>
        </tr>
        `).join("\n")
                document.getElementById("tbl-body").innerHTML = rows
            }
            )
    } catch (err) {
        alert(err.message)


    }
}

