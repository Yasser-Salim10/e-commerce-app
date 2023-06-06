import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInputs from '../components/CustomInputs'

const Forgotpassword = () => {
  return (
    <>
        <Meta title={'Forgot Password'}/>
        <BreadCrumb title='Forgot Password'/>
        <Container class1='login-wrapper py-5 home-wrapper-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'>Reset Your Password</h3>
                                <p className=' text-center my-2 mb-3'>
                                We will send you an email to reset your password
                                </p>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <CustomInputs type='email' name='email' placeholder='Your Email'/>
                                    
                                    <div>
                                        
                                    </div>
                                    <div className=' d-flex justify-content-center flex-column gap-15 align-items-center'>
                                        <button className='button border-0' type='submit'>Submit</button>
                                        <Link to="/login" >Cancel</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                </div>
        </Container>
    </>
  )
}

export default Forgotpassword