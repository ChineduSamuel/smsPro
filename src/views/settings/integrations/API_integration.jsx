import React from 'react'
import MainLayout from '../../../components/MainLayout/MainLayout'
import arrowup from '../../../img/arrow-up.png';
import './API_integration.scss';




function API_integration() {
    return (
        <MainLayout>
            <h4 className="sam_apih4-1">Integrations</h4>
            <h4 className="sam_apih4-2">Home / Overview</h4>
            <div className="card sam_apiintegration_container">

                <div className="card-body">
                    <h3 className="sam_apih3-1">API Integrations</h3>
                    <img src={arrowup} className="sam_apiintegration_arrowup" />
                    <h4 className="sam_apih4-3">Kindly contact Admin for all developemnt purposes.</h4>
                    <button type="button" className="btn btn-primary integration_btn" >
                        <h4 className="sam_apih4-4">Contact Admin</h4>
                    </button>

                </div>
            </div>
        </MainLayout>
    )
}

export default API_integration
