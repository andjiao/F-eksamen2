import { renderTemplate, setActive, showPage } from "./utils.js"
import{getRiders} from "./js-pages/showRiders.js"
import{getTeams} from "./js-pages/showTeams.js"
import{addRiderHandlers} from "./js-pages/addRider.js"

function renderMenuItems(evt) {
    const element = evt.target
    setActive(element)
    const id = element.id;
    renderTemplate(id)  //This setups the HTML for the page
    switch (id) {
      //Here you can execute JavaScript for the selected page
      case "page-show-riders": {
        getRiders()
        break
      } 
      case "page-show-teams": {
        getTeams()
        break
      } 
      case "page-add-rider": {
        addRiderHandlers()
        break     
      }
       case "page-edit-rider": {
        
         break     
       }
       case "page-delete-rider": {
        
         break     
       }


      case "page-show-teams": {
        
        break     
      }
    }
  }
  
  document.getElementById("menu").onclick = renderMenuItems;
  showPage("homepage")
