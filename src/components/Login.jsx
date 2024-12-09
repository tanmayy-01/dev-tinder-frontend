import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginForm((prevForm) => ({
          ...prevForm,
          [name]: value,
        }));
    };

    const handleLogin = async () => {
        try {
            const res = await axios.post(BASE_URL + 'login',{
                emailId: loginForm.email.trim(),
                password: loginForm.password.trim()
            },{withCredentials: true})
            const {status, data} = res.data;
            if(status) {
                dispatch(addUser(data));
                return navigate('/')
            }
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div className="flex justify-center m-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email ID</span>
              </div>
              <input
                type="email"
                name="email"
                value={loginForm.email}
                onChange={handleInputChange}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                name="password"
                value={loginForm.password}
                onChange={handleInputChange}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <div className="card-actions justify-center mt-10">
            <button onClick={handleLogin} className="btn btn-primary w-full max-w-xs">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
