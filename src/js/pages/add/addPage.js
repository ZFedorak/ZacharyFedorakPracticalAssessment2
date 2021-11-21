import makeElement from "~/src/js/utils/makeElement"
import button from "../../components/ui/button"
import {Router} from './../../routes/router'
import { getStore } from "../../redux/store"
import reducer from './../../redux/reducers'
import * as styles from './styles.module.scss'
 

const cancelButton = button("cancel")
const deleteButton = button("add")

 
const addPage = function(props){
        

    const page = document.createElement('div') 

    function cleanUp (){
        cancelButton.removeEventListener('click', onCancelDelete)  
        deleteButton.removeEventListener('click', onRemoveTodo) 
    }
 
    //Cancel Delete Event Handler
    // Call the cleanUp method
    function onCancelDelete (e){
        cleanUp()
        Router('/todolist')
    }

    // DELETE EMPLOYEE EVENT HANDLER
    function onRemoveTodo (e){ 
        cleanUp()
        Router('/todolist')
       

       
        
    }
    
    let headerTemplate = `
        <header >
            <h1 >Zachary Fedorak Todo List</h1>
            <h2>Don't Be Late!</h2>
            <h3>Add a Todo</h3>
            <span class="flex">
            <span>
            <label>ID
            <input type="text"/>
            </label>
            </span>
            <span>
            <label>Completed
            <input type="checkbox"/>
            </label>
            </span>
            <span>
            <label>Category
            <input type="text"/>
            </label>
            </span>
            <span>
            <label>To Do
            <input type="text"/>
            </label>
            </span>
            <span>
            <label>Start Date
            <input type="text"/>
            </label>
            </span>
            <span>
            <label>End Date
            <input type="text"/>
            </label>
            </span>
            <span>
            <label>Start Time
            <input type="text"/>
            </label>
            </span>
            </span>
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

export default addPage