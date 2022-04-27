import {Link} from "react-router-dom";
import PostSearch from "./PostSearch";
import PostOrder from './PostOrder';

function PostAction(props) {
    let SetValue = props.SetValue;
    let SetFieldsOrder = props.setFieldsOrder;
    let isLogin = props.isLogin;
    let SetIsLogin = props.SetIsLogin;

    function checkAuth() {
        if (!isLogin) {
            return <Link to='/login/form'>
                <button className='btn btn-primary me-2'>Login</button>
            </Link>;
        } else {
            return <button onClick={() => SetIsLogin(false)} className='btn btn-primary me-2'>Login in</button>
        }
    }

    return (
        <div>
            <div className='bg-light p-3'>
                <Link to='/post/create'>
                    <button>Create Post</button>
                </Link>
                {checkAuth()}
            </div>
            <PostSearch setValue={SetValue}/>
            <PostOrder setFieldsOrder={SetFieldsOrder}/>
        </div>
    );
}

export default PostAction;
