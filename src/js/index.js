import {Router} from "./routes/router";
import { createStore} from "./redux/store";
import { dataFetcher } from "./utils/dataFetcher";



const app = document.querySelector("#app");
 


const onAppInit = async function(e){
    let todos = await dataFetcher('./static/data/todos.json')


    if(todos[0].id === undefined){
         todos = [todos]
    }

    createStore(todos)
    Router(window.location.pathname)
   
}

window.addEventListener('load', onAppInit)

 




 
 

 