import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from './../components/Container';
import CustomInputs from '../components/CustomInputs';

const Signup = () => {
  return (
    <>
        <Meta title={'Sign Up'}/>
        <BreadCrumb title='Sign Up'/>
        <Container class1='login-wrapper py-5 home-wrapper-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'>Sign Up</h3>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <CustomInputs type='text' name='name' placeholder='Your Name'/>
                                    <CustomInputs type='email'name='email' placeholder='Your Email'/>
                                    <CustomInputs type='tel' name='mobile' placeholder='Your Mobile Number'/>
                                    <CustomInputs className='mt-1' type='password' name='password' placeholder='Enter Your Password'/>
                                    <div className=' d-flex justify-content-center gap-15 align-items-center'>
                                        <button className='button border-0'>Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                </div>
        </Container>
    </>
  )
}

export default Signup