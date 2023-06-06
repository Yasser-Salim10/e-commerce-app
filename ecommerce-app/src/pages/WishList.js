import React from 'react'
import Meta from './../components/Meta';
import BreadCrumb from './../components/BreadCrumb';
import Container from './../components/Container';

const WishList = () => {
  return (
    <>
        <Meta title={'WishList'}/>
        <BreadCrumb title='WishList'/>
        <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <img 
                            src='images/cross.svg' 
                            alt='cross' 
                            className='position-absolute cross img-fluid'
                            />
                            <div className='wishlist-card-image'>
                                <img src='images/watch.jpg' className=' img-fluid w-100' alt='watch'/>
                            </div>
                            <div className='py-3 px-3'>
                            <h5 className='title'>
                                Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                            </h5>
                            <p className='price'>$ 100</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <img 
                            src='images/cross.svg' 
                            alt='cross' 
                            className='position-absolute cross img-fluid'
                            />
                            <div className='wishlist-card-image'>
                                <img src='images/watch.jpg' className=' img-fluid w-100' alt='watch'/>
                            </div>
                            <div className='py-3 px-3'>
                            <h5 className='title'>
                                Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                            </h5>
                            <p className='price'>$ 100</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <img 
                            src='images/cross.svg' 
                            alt='cross' 
                            className='position-absolute cross img-fluid'
                            />
                            <div className='wishlist-card-image'>
                                <img src='images/watch.jpg' className=' img-fluid w-100' alt='watch'/>
                            </div>
                            <div className='py-3 px-3'>
                            <h5 className='title'>
                                Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                            </h5>
                            <p className='price'>$ 100</p>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
    </>
  )
}

export default WishList