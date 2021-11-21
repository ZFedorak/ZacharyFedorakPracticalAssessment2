import makeElement from "../../utils/makeElement"
import todolist from "../../components/cards/todolist"
import todo from "../../components/cards/todo"
import { getStore } from "../../redux/store"
import { Router } from "../../routes/router"
import link from "../../components/ui/link"
 
let createPage = true;
 
 

const todoListing = function(){

  const page = document.createElement('div')
  const todoContainer = todolist(); 


  function cleanUp( ){
     const todos = todoContainer.querySelectorAll('aside') 
     todos.forEach((todo)=>{
          todo.removeEventListener('click', onDeleteTodo)
     })
  }


 // EVENT HANDLER FUNCTION FOR REMOVING AN EMPLOYEE
  function onDeleteTodo (e){
        const todoId = e.currentTarget.dataset.key
        const todo = getStore().filter((todo) => todo.id === todoId)
        cleanUp()
        Router('/delete', todo[0])

  }
  function onEditTodo (e){
    const todoId = e.currentTarget.dataset.key
    const todo = getStore().filter((todo) => todo.id === todoId)
    cleanUp()
    Router('/editPage', todo)
  }
   function render (){ 
    
      const todos = getStore()
      const div =  todoContainer.querySelector('#todos')       
      // create li from the store data
      const todoElements =  getStore().map(emp=> todo(emp))
      todoElements.forEach(element => {        
        element.querySelector('#delete').addEventListener('click', onDeleteTodo)
        element.querySelector('#edit').addEventListener('click', onEditTodo)
        div.append(element)
      });
       page.append(todoContainer)
   
  
   }

  
  

      render()
      
    return page
     
     
  
    
     
   
     
    
}

export default todoListing


 