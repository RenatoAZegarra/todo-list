import React, {useState} from 'react'

const Form = (props) =>{
    // Set initial states for the tasks
    const [message, setMessage] = useState("");
    const [id, setId] = useState(2)

    // Function to handle form submission
    const formSubmit = (e) =>{
        e.preventDefault()

        // Create a new task 
        const newMessage = {
            id: id,
            message: message,
            completed: false,
        }

        // Pass the new task object to the parent component
        props.updateThing(newMessage);
        setId(id + 1);
        setMessage("");
}

return (
    <div>
        <form onSubmit ={formSubmit}>
            <p>Todo: 
            <input onChange ={(e) => setMessage(e.target.value)} value={message} />
            </p>
            <button>Add Todo</button>
        </form>
    </div>
)
}

export default Form