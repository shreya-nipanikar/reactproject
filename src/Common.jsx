import React from 'react';
import {NavLink} from 'react-router-dom';
import './Home.css';


const Common = (props) => {
    return (
        <>
        <section id="header" className="d-flex justify-content-center">
            <div className="container-fluid nav_bg  pt-lg-4">
                <div className="row">
                    <div className="col-11  mx-auto pt-lg-10">
                    <div className="row">
                        <div className="col-md-6 pt-5 ps-5 pt-lg-10 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                            <h1>
                               {props.name}
                            </h1>
                            <h5 className="my-3">
                              We are team of developers who help you grow!
                            </h5>
                        
                        <div className="mt-3">
                        <button type="button" class="btn">
                        <NavLink exact className="nav-link" to={props.visit} >
                        {props.btname}
                        </NavLink>
                        </button>
                        </div>
                    </div>


                    <div className="col-lg-6 order-1 order-lg-2">
                        <img src={props.imgsrc} className="img-fluid animated" alt="mypic" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        

        </>
    )
}

export default Common;