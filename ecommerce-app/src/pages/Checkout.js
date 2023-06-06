import React from 'react'
import { Link } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi'
import  watch  from '../images/watch.jpg';
import Container from '../components/Container';
const Checkout = () => {
  return (
    <>
        <Container class1='checkout-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-7'>
                        <div className='checkoutt-left-data'>
                            <h3 className='websitename'> Dev Corner</h3>
                            <nav 
                            style={{"--bs-breadcrumb-divider":">" }}
                            aria-label="breadcrumb"
                            >
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/cart" className='text-dark'>
                                            Cart
                                        </Link>
                                    </li>
                                    &nbsp; / &nbsp;
                                    <li className ="breadcrumb-item total-price active" aria-current="page">
                                        Information
                                    </li>
                                    &nbsp;/
                                    <li className="breadcrumb-item total-price active">
                                        Shipping
                                    </li>
                                    &nbsp;/
                                    <li className ="breadcrumb-item total-price active" aria-current="page">
                                        Payment
                                    </li>
                                </ol>
                            </nav>
                            <h4 className='title'>Contact Information</h4>
                            <p className='user-data'>
                                Navdeep Dahiya (monud0232@gmail.com)
                            </p>
                            <h4 className='mb-3'>Shipping Address</h4>
                            <form action=''className='d-flex gap-15 flex-wrap justify-content-between'>
                                <div className='w-100'>
                                    <select 
                                    name='' 
                                    className='form-control form-select' 
                                    id=''
                                    >
                                        <option value="" selected disabled>
                                            Select Country
                                        </option>
                                    </select>
                                </div>
                                <div className=' flex-grow-1'>
                                    <input type="text" placeholder='First Name' class="form-control"/>
                                </div>
                                <div className=' flex-grow-1'>
                                    <input type="text" placeholder='Last Name'  class="form-control" />
                                </div>
                                <div className='w-100'>
                                    <input type="text" placeholder='Address' class="form-control" />
                                </div>
                                <div className='w-100'>
                                    <input type="text" placeholder='Apartment, Suite ,etc' class="form-control" />
                                </div>
                                <div className=' flex-grow-1'>
                                    <input type="text" placeholder='City' class="form-control" />
                                </div>
                                <div className=' flex-grow-1'>
                                    <select 
                                    name='' 
                                    className='form-control form-select' 
                                    id=''
                                    >
                                        <option value="" selected disabled>
                                            Select State
                                        </option>
                                    </select>
                                </div>
                                <div className=' flex-grow-1'>
                                    <input type="text" placeholder='Zipcode' class="form-control" />
                                </div>
                                <div className='w-100'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Link to="/cart" className='text-dark'>
                                            <BiArrowBack className='mt-2'/>
                                            Return to Cart
                                        </Link>
                                        <Link to="/cart" className='button'>Continue to Shipping</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='border-bottom py-4'>
                            <div className='d-flex align-items-center gap-10 mb-2'>
                                <div className='w-75 d-flex gap-10'>
                                    <div className='w-25 position-relative'>
                                        <span 
                                        style={{top:"-2px",right:"2px"}}
                                        className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>
                                            1
                                        </span>
                                        <img className='img-fluid' src={watch} alt='product'/>
                                    </div>
                                    <div>
                                        <h5 className='total-price'>ghdhdg</h5>
                                        <p className='total-price'>mamdkls</p>
                                    </div>
                                </div>
                                <div className=' flex-grow-1'>
                                    <h5 className='total-price'>$100</h5>
                                </div>
                            </div>
                        </div>
                        <div className='border-bottom py-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total'>Subtotal</p>
                                <p className='total-price'>$ 10000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total mb-0'>Shipping</p>
                                <p className='total-price mb-0'>$ 10000</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h4 className='total'>Total</h4>
                            <h5 className='total-price'>$ 10000</h5>
                        </div>
                    </div>
                </div>
        </Container>
    </>
  )
}

export default Checkout