import {URL} from "../settings.js"
import {makeOptions,handleHttpErrors} from "../fetchUtils.js"
import { showPage } from "../utils.js"
const riderURL = URL + "/riders"

export async function deleteRiderHandler(){
  const id = sessionStorage.getItem("deleteId")

  try{
    const r= await fetch(riderURL + `/${id}`)
    .then(res=>handleHttpErrors(res))
    const html = `
    <tr>
    <td>${r.riderName}</td>
    <td>${r.teamName}</td>
    <td>${r.time}</td>
 
  </tr> `

  document.getElementById("tbl-body").innerHTML = html
  
  } catch(err){

  }
  
  

 document.getElementById("delete-btn").onclick= deleteRider
}

async function deleteRider(){
  const id = sessionStorage.getItem("deleteId")
  try{
    await fetch(riderURL +`/${id}`, makeOptions("DELETE")).then(res=>handleHttpErrors(res))
    showPage("page-show-riders")
     
  } catch(err){
    console.log("fejl ved addRider")
    alert(err.message)
  }
}