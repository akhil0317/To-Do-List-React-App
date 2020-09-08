import React, {Fragment,useState} from "react";
import ReactDOM from"react-dom";
import Navbar from "./Navbar"
const App =()=>{

    const [newTask, setNewTask] = useState("");
    const onInputChange =(event)=>{
        setNewTask(event.target.value)
    }
        var [navbarProps,setnavbarProps] = useState({completed:1, pending :2, high:1, low:1,medium:1})
    const [newPriority, setNewPriority] = useState("low");
    const onPriorityChange =(event)=>{
        
        setNewPriority(event.target.value)
    }
    
    const [task,setTasks] =useState([
        {task:"wash the car",isComplete:false,priority:"low"},
        {task:"Do gardening",isComplete:true,priority:"medium"},
        {task:"Buy Groceries",isComplete:false,priority:"high"}
    ])

    const addTask = ()=>{
        if(newPriority =='low')
        {
        navbarProps.low =navbarProps.low+1;
     
        }
        else if(newPriority=='medium')
        {
        navbarProps.medium = navbarProps.medium+1;
     
        }
        else 
        {
        navbarProps.high=navbarProps.high+1;
        
        }
        navbarProps.pending = navbarProps.pending+1;
        
       
        setnavbarProps(navbarProps)
            const taskObject = {task:newTask,priority:newPriority,isComplete:false};
                setTasks([...task,taskObject]);
    }

    const toogleTask= (index,event)=>{
        console.log(event.target.nodeName);
        if(event.target.nodeName=='LI')
        {
               
           if(task[index].isComplete)
           {
           navbarProps.completed = navbarProps.completed-1;
           navbarProps.pending = navbarProps.pending+1
           }
          
           else
           {
           navbarProps.pending = navbarProps.pending-1
           navbarProps.completed = navbarProps.completed+1
           }

                setTasks(
                    task.map((task,taskIndex)=>{
                        if(taskIndex===index)
                        {
                            return {
                                ...task,
                                isComplete: !task.isComplete
                            }
                        }
                        return task;
                    })
                )
        }
        else if(event.target.nodeName=='SPAN')
        {
            
            if(task[index].priority=='low')
            {
           var taskObject1 = {task:task[index].task,priority:task[index].priority='medium',isComplete:task[index].isComplete};
           navbarProps.low = navbarProps.low-1;
           navbarProps.medium = navbarProps.medium+1;
            }
            else if(task[index].priority=='medium')
            {
            var taskObject1 = {task:task[index].task,priority:task[index].priority='high',isComplete:task[index].isComplete};
            navbarProps.medium = navbarProps.medium-1;
           navbarProps.high = navbarProps.high+1;
            }
            else 
            {
            var taskObject1 = {task:task[index].task,priority:task[index].priority='low',isComplete:task[index].isComplete};
            navbarProps.high = navbarProps.high-1;
            navbarProps.low = navbarProps.low+1;      
            }

            task.splice(index,1,taskObject1);
            setTasks([...task]);
        }
        else
        {
            if( task[index].priority =='low')
            navbarProps.low = navbarProps.low-1
            else if(task[index].priority =='high')
            navbarProps.high = navbarProps.high-1
            else
            navbarProps.medium = navbarProps.medium-1
            
           if(task[index].isComplete)
           navbarProps.completed = navbarProps.completed-1;
           else
           navbarProps.pending = navbarProps.pending-1
            
               setTasks(task.filter((taskItem,taskIndex)=>{
                   return index!=taskIndex
               }) 
     
               )
               
        }
    }

    return (
        <Fragment>
            <h1>To Do List App</h1>
            <Navbar value ={navbarProps} />
            <input type ="text" value ={newTask} onChange={onInputChange} placeholder="add new task"></input>
            <select name="priority" id="priority" value ={newPriority} onChange ={onPriorityChange}>
  <option value="low">low</option>
  <option value="medium">medium</option>
  <option value="high">high</option>

</select>
            <button onClick={addTask}>Add</button>
            <ul>
                {
                    task.map((taskObject,index)=>{
                        const clickedTask = (event)=>{
                            
                            toogleTask(index,event);
                        }
                    return <li key ={index} onClick ={clickedTask}>{taskObject.task} -  {taskObject.isComplete? "completed":"pending"}- <span>{taskObject.priority}</span>  <button>Delete Task</button></li>
                    })
                }
            </ul>
        </Fragment>
    )
}


ReactDOM.render(<App />,document.querySelector("#app-root"));