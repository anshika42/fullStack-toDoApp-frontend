import axios from 'axios';

// backend
// const baseUrl = 'http://localhost:5000'

// after upload on render
const baseUrl = 'https://fullstack-todoapp-backend-q45u.onrender.com'

const getAllToDo = (setToDo)=>{
    axios.get(baseUrl).then(({data})=>{
        console.log(`data -->` ,data);
        setToDo(data);
    })
    .catch((err)=>console.log(err));
}

const addToDo = (text,setText , setToDo) =>{

    axios.post(`${baseUrl}/save` , {text}).then((data)=>{
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err));
    

}

const updateToDo = (toDoId , text, setText , setToDo , setIsUpdating) =>{

    axios.post(`${baseUrl}/update` , {_id:toDoId,text}).then((data)=>{
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err));

}

const deleteToDo = (toDoId,  setToDo ) =>{

    axios.post(`${baseUrl}/delete` , {_id:toDoId}).then((data)=>{
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err));

}


export {getAllToDo,addToDo,updateToDo,deleteToDo}