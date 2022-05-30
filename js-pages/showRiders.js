import {URL} from "../settings.js"
import {handleHttpErrors} from "../fetchUtils.js"
const riderURL = URL + "/riders"


export async function getRiders(){
    try{
     const riders = await fetch(riderURL)
     .then(res=>handleHttpErrors(res))
      
     const rows = riders.map(r=>`
        <tr>
          <td>${r.riderName}</td>
          <td>${r.teamName}</td>
        </tr>
     `).join("")

     document.getElementById("tbl-body").innerHTML = rows


    } catch(err){
        console.log(err.message)
    }
    
}