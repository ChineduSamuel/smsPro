import React from 'react'
import MainLayout from '../../../components/MainLayout/MainLayout'
import arrowup from '../../../img/arrow-up.png';
import './API_integration.scss';




function API_integration() {
    return (
        <MainLayout>
            <h4>Integrations</h4>
            <h4>Home / Overview</h4>
            <div className="card sam_apiintegration_container">

                <div className="card-body">
                    <h3>API Integrations</h3>
                    <img src={arrowup} className="sam_apiintegration_arrowup" />
                    <h4>Kindly contact Admin for all developemnt purposes.</h4>
                    <button type="button" class="btn btn-warning">
                        Proceed Here
              </button>

                </div>
            </div>
        </MainLayout>
    )
}

export default API_integration
