import {useParams} from "react-router-dom";
import {useState} from "react";

function ComentForm() {
    let {postId} = useParams();
    let [name, setName] = useState();
    let [email, setEmail] = useState();
    let [message, setMessage] = useState();


    function handleChange(event) {
        let object = {'name': setName, 'email': setEmail, 'message': setMessage}
        let func = object[event.target.name];
        func(event.target.value);
    }

    function handleSubmit(event) {
        let data = {'postId': postId, 'name': name, 'email': email, 'message': message}
        axios('/api/comment/create', {
            method: 'POST',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        event.preventDefault();
    }

    return (
        <div className="blog-form-section section-top-gap-70">
            <div className="box-wrappper">
                <div className="form-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="comment-area">
                                    <h4 className="title mb-30">Leave a comment</h4>
                                    <form className="default-form" action="#" method="post" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-6 mb-20">
                                                <div className="default-form-single-item">
                                                    <input name='name' onChange={handleChange} type="text"
                                                           placeholder="Name" defaultValue='' required/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-20">
                                                <div className="default-form-single-item">
                                                    <input name='email' type="email" onChange={handleChange}
                                                           placeholder="Email" defaultValue='' required/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="default-form-single-item">
                                                    <input name='message' placeholder="Massage"
                                                           onChange={handleChange}></input>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 text-center">
                                                <input className="btn btn-primary mt-3" type="submit" value="Submit"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComentForm;
