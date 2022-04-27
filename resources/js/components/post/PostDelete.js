import Modal from "./Modal";

function PostDelete(props) {
    let id = props.postObject.id;
    let data = {'id': id};
    function Delete() {
        axios('/api/post/delete', {
            method: 'DELETE',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }
    return (
        <div>
            <button className='btn-danger btn' data-bs-toggle="modal"
                    data-bs-target="#exampleModal" onClick={Delete}>Delete</button>
            <Modal postBody={props.postObject.body} postTitle={props.postObject.title}/>
        </div>
    )
}

export default PostDelete;
