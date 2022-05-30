import {URL} from "../settings.js"
import {handleHttpErrors} from "../fetchUtils.js"
import { showPage } from "../utils.js"
const riderURL = URL + "/riders"

document.getElementById("sort-time").onclick = getFastest


export async function getFastest() {

    try{
        const riders = await fetch(riderURL)
        .then(res=>handleHttpErrors(res))
        .then(data =>{
            const rows = res.filter(function(rider) {return rider.time > time}).map(rider => 
                `
                <tr>
                <td>${r.riderName}</td>
                <td>${r.teamName}</td>
                <td>${r.time}</td>
                <td> <button id="btn-edit-rider###${r.id}"type="button" value= "${r.id}">Edit Rider</button></td>
              </tr>
           `).join("")
           document.getElementById("table-body").innerHTML = rows;
        })
           .catch(err => {
            document.getElementById("error").innerText = err
        }
    }
  
