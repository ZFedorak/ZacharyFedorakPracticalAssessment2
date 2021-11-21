
import makeElement from "~/src/js/utils/makeElement"
import button from "../../components/ui/button"
import {Router} from './../../routes/router'
import { getStore } from "../../redux/store"
import reducer from './../../redux/reducers'
import * as styles from './styles.module.scss'
 

const cancelButton = button("cancel")
const deleteButton = button("delete")

 
const deletePage = function(props){
        

    const page = document.createElement('div') 

    function cleanUp (){
        cancelButton.removeEventListener('click', onCancelDelete)  
        deleteButton.removeEventListener('click', onRemoveTodo) 
    }
 
    //Cancel Delete Event Handler
    // Call the cleanUp method
    function onCancelDelete (e){
        cleanUp()
        Router('/directory')
    }

    // DELETE EMPLOYEE EVENT HANDLER
    function onRemoveTodo (e){ 
     
      
           if(props !== null){           
            Router('/directory')
               const removeTodo = props
               const index = getStore().findIndex(todo => todo.id === removeTodo.id)
               const action  = {
                type:"delete",
                payload:{index},
                cb:()=> Router('/directory')
            }
            reducer(action)
            cleanUp()
           }
    
       

       
        
    }
    
    let headerTemplate = `
        <header>
            <h1>Zachary Fedorak Todo List</h1>
            <h2>Don't Be Late!</h2>
            <p>Delete a todo or cancel to go back to todo list.</p> 
            <div></div>
        </header>
    `
    const pageHeader = makeElement(headerTemplate) 
    pageHeader.querySelector('div').innerHTML = ''
    cancelButton.addEventListener('click', onCancelDelete)  
    deleteButton.addEventListener('click', onRemoveTodo) 
    pageHeader.querySelector('div').append(cancelButton, deleteButton)
    page.append(pageHeader)

  
    return page
    
    
}

export default deletePage