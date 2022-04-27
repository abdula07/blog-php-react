import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './post/Post';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostDetail from "./post/PostDetail";
import PostCreate from "./post/PostCreate";
import './css/app.css';
import LoginForm from "./login/LoginForm";

function Main() {
    let [isLogin, SetIsLogin] = useState(false);
    let [user, setUser] = useState();
    return (
        <div className="container">
            <h1 className="bg-primary display-2 border-bottom text-white p-3 rounded fw-bold">My Blog</h1>
            <Routes>
                <Route path="*" element={<Post isLogin={isLogin} SetIsLogin={SetIsLogin}/>}/>
                <Route path='/post/create' element={<PostCreate user={user}/>}/>
                <Route path="/post/:postId" element={<PostDetail user={user}/>}/>
                <Route path='/login/form' element={<LoginForm setIsLogin={SetIsLogin} setUser={setUser}/>}/>
            </Routes>
        </div>
    );
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<BrowserRouter> <Main/> </BrowserRouter>,
        document.getElementById('root'));
}
