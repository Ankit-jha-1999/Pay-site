import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-10 mx-auto'>
                    <div className='row'>
                        <div className='col-6 col-lg-3'>
                            <h2>Company</h2>
                            <ul>
                                <li><a href='#'>About</a></li>
                                <li><a href='#'>System</a></li>
                                <li><a href='#'>History</a></li>
                                <li><a href='#'>Team</a></li>
                            </ul>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <h2>Support</h2>
                            <ul>
                                <li><a href='#'>Leader</a></li>
                                <li><a href='#'>Tech</a></li>
                                <li><a href='#'>Working Hour</a></li>
                                <li><a href='#'>Management</a></li>
                            </ul>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <h2>Services</h2>
                            <ul>
                                <li><a href='#'>About</a></li>
                                <li><a href='#'>Easy Pay</a></li>
                                <li><a href='#'>Smooth System</a></li>
                                <li><a href='#'>Easy Resolve</a></li>
                            </ul>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <h2>Follow Us</h2>
                             <div className='row'>
                                <div className='col-lg-3 mx-auto'>
                                
                                    <i className='fab fa-facebook fontawesome-style'></i>
                                 
                                </div>
                                <div className='col-lg-3 mx-auto'>
                                 
                                    <i className='fab fa-instagram fontawesome-style'></i>
                                
                                </div>
                                <div className='col-lg-3 mx-auto'>
                                 
                                    <i className='fab fa-twitter fontawesome-style'></i>
                                 
                                </div>
                                <div className='col-lg-3 mx-auto'>
                                 <a href='https://github.com/Ankit-jha-1999?tab=repositories' target='_ankit'>
                                    <i className='fab fa-github fontawesome-style'></i>
                                 </a>
                                </div>
                             </div>
                        </div>
                    </div>
                    <hr/>
                    <div className='mt-5'>
                        <p className='main-hero-para text-center w-100'>Copyright @ 2022 Ankitpay. All right reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer