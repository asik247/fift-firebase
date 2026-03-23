import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
const Registation = () => {
    const { createUser } = useContext(AuthContext);
    // Error and success message state here;
    const [error,setError] = useState(false);
    const [success,setSuccess] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        // Reset erro and success;
        setError(false);
        setSuccess('');
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                setSuccess(res.user)

            }).catch(error => {
                console.log(error.message);
                setError(error.message)
            })

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
                                    {/* Email field */}
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />
                                    {/* password field */}
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />
                                    <button className="btn btn-neutral mt-4">Registaion</button>
                                    {/* Error and success message code here */}
                                    {
                                        success &&  <p className='text-green-600 text-xl font-bold'>SuccessFully Account Create!</p>
                                    }
                                    {error && <p className='text-red-600 text-xl font-bold'>{error}</p>}
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registation;