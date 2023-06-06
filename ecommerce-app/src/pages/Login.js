import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInputs from './../components/CustomInputs';

const Login = () => {
  return (
    <>
        <Meta title={'Login'}/>
        <BreadCrumb title='Login'/>
        <Container class1='login-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'>Login</h3>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <CustomInputs type='email' name='email' placeholder='Your Email'/>
                                    <CustomInputs className='mt-1' type='password' name='password'  placeholder='Enter Your Password'/>

                                    <div>
                                        <Link to="/forgot-password" >Forgot Password</Link>
                                    </div>
                                    <div className=' d-flex justify-content-center gap-15 align-items-center'>
                                        <button className='button border-0' type='submit'>
                                            Login
                                        </button>
                                        <Link to='/signup' className='button signup'>
                                            SignUp
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                </div>
        </Container>
    </>
  )
}

export default Login