import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const LogIn = () => {
    const { signInUser } = useContext(AuthContext);
    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        signInUser(email,password)
        .then(res=>{
            console.log(res.user);
            if(!res.user.emailVerified){
                alert("Not email verify")
            }
        }).catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">LogIn now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignIn}>
                                <fieldset className="fieldset">
                                    {/* Email field */}
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />
                                    {/* Passwowrd field */}
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />

                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">LogIn</button>
                                </fieldset>
                                <div className='font-bold text-xl'>
                                    New to our website ? please
                                    <Link to={'/registation'} className='text-blue-700 font-bold text-xl underline'> Registation </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;