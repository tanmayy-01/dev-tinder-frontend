import axios from "axios";
import { useState } from "react";

const Login = () => {

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginForm((prevForm) => ({
          ...prevForm,
          [name]: value,
        }));
    };

    // console.log('formdata: ', loginForm)
    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost:4444/login',{
                emailId: loginForm.email.trim(),
                password: loginForm.password.trim()
            })
            console.log('res: ', res)
        } catch (error) {
            // 
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
