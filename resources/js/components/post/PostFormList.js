import {Link} from "react-router-dom";
import dateFormat, { masks } from "dateformat";

function PostFormList(props) {
    let post = props.post;
    let now = new Date(post.created);
    return (
        <div key={post.id} className='col rounded mt-3 mb-3'>
            <Link to={`/post/${post.id}`}>
                <div className='text-dark p-3'>
                    <h1>{post.title.slice(0, 10)}</h1>
                    <p>{dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                </div>
            </Link>
        </div>
    )
}

export default PostFormList;
