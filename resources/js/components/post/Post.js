import {useEffect, useState} from "react";
import PostAction from "./PostAction";
import PostList from "./PostList";

function Post(props) {
    const [posts, setPosts] = useState([]);
    const [searchValue, setValue] = useState('');
    let isLogin = props.isLogin;
    let SetIsLogin = props.SetIsLogin;

    useEffect(() => {
        fetch('/api/posts')
            .then((res) => res.json())
            .then((result) => setPosts(result));
    }, [])
    let [fieldsOrder, SetFieldsOrder] = useState();
    if (fieldsOrder === 'created') {
        posts.sort((a, b) => a.created - b.created);
    } else if (fieldsOrder === 'title') {
        posts.sort((a, b) => a.title.length - b.title.length);
    }
    return (
        <div className="row align-items-start">
            <div className='col'>
                <PostList posts={posts} searchValue={searchValue}/>
            </div>
            <div className='col'>
                <PostAction SetValue={setValue} setFieldsOrder={SetFieldsOrder} isLogin={isLogin} SetIsLogin={SetIsLogin}/>
            </div>
            <div className="mobile-header d-block d-lg-none">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-auto">
                            <div className="mobile-logo">
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="mobile-action-link text-end">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;
