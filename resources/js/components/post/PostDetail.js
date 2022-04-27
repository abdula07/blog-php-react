import { useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PostDetailAction from "./PostDetailAction";
import ComentForm from "../coment/ComentForm";
import Comments from "../coment/Comments";

function PostDetail(props) {
    let user = props.user;
    const [post, setPost] = useState(Object);
    const { postId } = useParams();
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            fetch(`/api/post/${postId}`)
                .then((res) => res.json())
                .then((result) => setPost(result)
                )
        }
        return () => isMounted = false;
    }, [])
    return (
        <div className=''>
            <div className="row">
                <div className="col">
                    <h1 className='p-3'>{post.title}</h1>
                    <p className='p-3'>{post.body}</p>
                    <Comments postId={postId}/>
                    <ComentForm user={user}/>
                </div>
                <div className="col">
                    <PostDetailAction post={post}/>
                </div>
            </div>
        </div>
    )
}

export default PostDetail;
