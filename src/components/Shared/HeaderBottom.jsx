import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/isp.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const HeaderBottom = () => {

    const { user, logOut } = useContext(AuthContext);

    const handlesignOut = () => {
        logOut()
            .then(res => { })
            .catch(err => { })
    }

    return (
        <div className="navbar bg-base-100 pb-8 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Home</Link></li>
                        <li><Link>Packages</Link></li>
                        <li tabIndex={1}>
                            <Link className="justify-between">
                                Services
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><Link>Residential</Link></li>
                                <li><Link>Business</Link></li>
                            </ul>
                        </li>
                        <li><Link>About Us</Link></li>
                    </ul>
                </div>
                <div className="flex items-center normal-case text-3xl font-bold text-purple-700">
                    <img src={img} className='w-1/6' alt='logo' />
                    <Link to='/' >Ultra<span className='text-gray-700'>Net</span></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link>Packages</Link></li>
                    <li tabIndex={0}>
                        <Link>
                            Services
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2">
                            <li><Link>Residential</Link></li>
                            <li><Link>Business</Link></li>
                        </ul>
                    </li>
                    <li><Link>About Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ?
                        <Link onClick={handlesignOut} to='/log-in' className="btn btn-outline btn-primary rounded capitalize mr-3">Log out</Link>
                        :
                        <Link to='/log-in' className="btn btn-outline btn-primary rounded capitalize mr-3">Log in</Link>
                }

                {user?.email ?
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://thumbs.dreamstime.com/b/cute-boy-face-cartoon-cute-boy-face-cartoon-vector-illustration-graphic-design-110654225.jpg" alt='profile' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>
                    :
                    <></>
                }

            </div>
        </div>
    );
};

export default HeaderBottom;