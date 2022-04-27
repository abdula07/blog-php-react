import {useState} from "react";
import Modal from './Modal';
import {Link} from "react-router-dom";

function PostCreate(props) {
    const [title, SetTitle] = useState();
    const [body, SetBody] = useState();
    let user = props.user;
    if (user === undefined) {
        return (
            <Link to='/login/form'>
                <button className='btn btn-primary me-2'>Login</button>
            </Link>
        );
    }

    let stateObject = {'SetTitle': SetTitle, 'SetBody': SetBody}

    function handleChange(event) {
        let func = stateObject[event.target.name];
        func(event.target.value);
    }

    function handleSubmit(event) {
        let data = {'title': title, 'body': body, 'user_id': user.id}
        axios('/api/post/create', {
            method: 'POST',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        event.preventDefault();
    }

    return (
        <div className='p-3'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input onChange={handleChange} name='SetTitle' value={title} type="title" className="form-control"
                       id="exampleFormControlInput1" placeholder="Title"/>
                <label htmlFor="exampleFormControlInput1" className="form-label">Body</label>
                <input onChange={handleChange} name='SetBody' value={body} type="body" className="form-control"
                       id="exampleFormControlInput1" placeholder="Body"/>
                <input className="btn btn-primary mt-3" data-bs-toggle="modal"
                       data-bs-target="#exampleModal" type="submit" value="Submit"/>
                <Modal postBody={body} postTitle={title}/>
            </form>
        </div>
    );
}

export default PostCreate;
