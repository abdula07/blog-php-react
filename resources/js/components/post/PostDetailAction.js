import {Link} from "react-router-dom";
import PostDelete from "./PostDelete";

function PostDetailAction(props) {
    let post = props.post;
    let user = props.user;
    function checkAuth() {
        if (user !== undefined) {
            return (<PostDelete postObject={post}/>);
        }
    }

    return (
        <div>
            <div className='bg-light p-3'>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <Link to='/post/create'><button className='btn btn-primary me-2'>Create Post</button></Link>
                    {checkAuth()}
                    <Link to='/posts'><button className='btn btn-primary ms-2'>Posts</button></Link>
                </div>
            </div>
        </div>
    )
}

export default PostDetailAction;
