import React from 'react';
import './sidebar.css'
const Sidebar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-auto sticky-top">
                    <div className="d-flex flex-sm-column flex-row flex-nowrap align-items-center sticky-top">
                        <a href="/" className="color d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                            <img src='assets/logo.png' alt='logo'/>
                        </a>

                        {/* <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                            <li className="nav-item">
                                <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                                    <i className="bi-house fs-1"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                                    <i className="bi-speedometer2 fs-1"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                                    <i className="bi-table fs-1"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
                                    <i className="bi-heart fs-1"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                                    <i className="bi-people fs-1"></i>
                                </a>
                            </li>
                        </ul> */}

                    </div>
                </div>
                <div className="col-sm p-3 min-vh-100">
                </div>
            </div>
        </div>
    )
}

export default Sidebar;