import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Container from './../components/Container';
import CustomInputs from '../components/CustomInputs';

const Resetpasword = () => {
  return (
    <>
        <Meta title={'Reset Password'}/>
        <BreadCrumb title='Reset Password'/>
        <Container class1='login-wrapper py-5 home-wrapper-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'>Reset Password</h3>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <CustomInputs type='password' name='confpassword' placeholder='Your Password'/>
                                    <CustomInputs type='password' name='conpassword' placeholder='Confirm Password'/>

                                    <div>
                                    </div>
                                    <div className=' d-flex justify-content-center gap-15 align-items-center'>
                                        <button className='button border-0'>Ok</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                     </div>
        </Container>
    </>
  )
}

export default Resetpasword