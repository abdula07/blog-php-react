import {useState} from "react";
import {
    useNavigate,
} from "react-router-dom";

function LoginForm(props) {
    let SetIsLogin = props.setIsLogin;
    let setUser = props.setUser;
    let [email, SetEmail] = useState('admin');
    let [password, SetPassword] = useState('admin');
    let navigate = useNavigate();

    function handleChange(event) {
        let stateObject = {'email': SetEmail, 'password': SetPassword};
        let func = stateObject[event.target.name];
        func(event.target.value);
    }

    function handleSubmit(event) {
        let data = {'email': email, 'password': password}
        axios({
                url: '/api/login/form',
                method: 'post',
                data: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        ).then((res) => {
            if (JSON.parse(res['data']['status']) === true) {
                navigate("/");
            } else {
                alert('Hello');
            }
            setUser(res['data']['user']);
            SetIsLogin(res['data']['status']);
        });
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       name='email' onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name='password'
                       onChange={handleChange}/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default LoginForm;
