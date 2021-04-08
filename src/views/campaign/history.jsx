import React from 'react'
import FormSelect from '../../components/Forms/FormSelect'
import MainLayout from '../../components/MainLayout/MainLayout'
import Table from '../../components/Table/Table'

export default function History() {
    return ( 
        <MainLayout> 
        <div>
        <div className="campaign-history">
        <div className="table">
          <div className="campaign-history-top">
            <p className="title text-general">Campaigns</p>
            <p className="text-general pr-4 pt-5">Campaigns</p>

            <FormSelect placeholder="Select" className="select-normal" />
            <div className="pt-5 pr-4 pl-4"> - </div>
            <FormSelect placeholder="Select" className="select-normal" />
          </div>
          <div className="campaign-history-subtop">
            <FormSelect
              classStyle="search"
              placeholder="Search your campagin history"
              className="select-normal"
            />
            <div className="d-flex justify-content-between align-items-center">
              <p>User: All Accounts</p>
              <p>User: All Accounts</p>
              <p className="pr-5">User: All Accounts</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="table-part">
          
          <Table />
      </div>
      </div>
      </MainLayout>
    )
}
