

import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Login = () => {

    const handlerLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');


        console.log(email, password)
    }



    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-3xl my-10 text-center'>Please Login</h2>
            <form onSubmit={handlerLogin} className="card-body w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>

                <p className='text-center'>Don't have an account <Link className='text-blue-600 font-bold' to='/register'>Register</Link></p>
            </form>

        </div>
    );
};

export default Login;