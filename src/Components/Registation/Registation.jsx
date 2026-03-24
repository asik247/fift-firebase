import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
const Registation = () => {
    const { createUser,loading } = useContext(AuthContext);
    // Error and success message state here;
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState("");
    // eye showing state here;
    const [show, setShow] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Reset erro and success;
        setError(false);
        setSuccess('');
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const terms = e.target.terms.checked;
        console.log(email, password,terms,name,photo);
        // Validation code here;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!emailRegex.test(email)) {
            alert("Invalid Email");
            return;
        }
        if (!passwordRegex.test(password)) {
            alert("Password must be 6+ char, 1 uppercase, 1 number");
            return;
        }
        if(!terms){
            alert("please accept terms")
            return;
        }
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                setSuccess(res.user)
                sendEmailVerification(res.user)
                .then(()=>{
                    alert('varify email then logIn')
                }).catch(error=>{
                    console.log(error.message);
                })
            const profile = {
                displayName:name,
                photoURL:photo
            }
            updateProfile(res.user,profile)

            }).catch(error => {
                console.log(error.message);
                setError(error.message)
            })

    }
    // eye toggling handler here;
    const handlerShowEye = (e) => {
        e.preventDefault();
        setShow(!show);
        console.log("btn eye clicked");
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Registaion now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <fieldset className="fieldset">
                                    {/* Name field */}
                                    <label className="label">Name</label>
                                    <input type="text" name='name' className="input" placeholder="Your Name" />
                                    {/* PhotoURL field */}
                                    <label className="label">Photo</label>
                                    <input type="text" name='photo' className="input" placeholder="PhotoURL" />
                                    {/* Email field */}
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />

                                    <div className='relative'>
                                        {/* password field */}
                                        <label className="label">Password</label>

                                        <input
                                            type={show ? 'text' : 'password'}
                                            name='password'
                                            className="input w-full pr-10"
                                            placeholder="Password"
                                        />

                                        {/* eye icon */}
                                        <button onClick={handlerShowEye} className='btn btn-ghost absolute right-1'>

                                            {show ? <FaEye /> : <FaEyeSlash />}
                                        </button>
                                    </div>
                                    {/* Accept Taitariya */}
                                    <div>
                                        <label className="label">
                                            <input type="checkbox"  className="checkbox" name='terms' />
                                            Accept Me!
                                        </label>
                                    </div>
                                    <button disabled={loading} className="btn btn-neutral mt-4">
                                        {loading ? "Creating...":'Register'}
                                    </button>

                                    {/* Error and success message code here */}
                                    {
                                        success && <p className='text-green-600 text-xl font-bold'>SuccessFully Account Create!</p>
                                    }
                                    {error && <p className='text-red-600 text-xl font-bold'>{error}</p>}
                                </fieldset>
                                <div className='font-bold text-xl'>
                                    Already have'n account ? please 
                                    <Link to={'/login'} className='text-blue-700 font-bold text-xl underline'> LogIn </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registation;