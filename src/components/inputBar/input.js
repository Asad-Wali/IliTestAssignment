import React from 'react'

const InputTab = () => {
    return (

        <div className="card card-body" style={{ width: "380px", height: "687px" }}>
            <div className="text-center mb-3">
                <h5 className="mb-0">Select Dates</h5>
            </div>

            <form action="index.html">
                <label>From</label>
                <div className="form-group form-group-feedback form-group-feedback-left">
                    <input type="date" className="form-control" placeholder="DD/MM/YYYY" />
                </div>

                <label>Till</label>
                <div className="form-group form-group-feedback form-group-feedback-left">
                    <input type="date" className="form-control" placeholder="DD/MM/YYYY" />
                </div>

                <h1>
                    Select Ponds
                </h1>

                <div className="card card-body" style={{ width: "332px", height: "271px", background: "#9CBF4D" }} >
                    <div className="container">
                        <div className="row mt-2">
                            <div className="col-lg-4">
                                <img src='assets/3.png' alt='3' />
                            </div>
                            <div className="col-lg-4">
                                <img src='assets/3.png' alt='3' />
                            </div>
                            <div className="col-lg-4">
                                <img src='assets/3.png' alt='3' />
                            </div>
                            <div className="col-lg-4">
                                <img src='assets/3.png' alt='3' />
                            </div>
                            <div className="col-lg-4">
                                <img src='assets/3.png' alt='3' />
                            </div>
                            <div className="col-lg-4">
                                <img src='assets/3.png' alt='3' />
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>

    )
}

export default InputTab;