import React from 'react'
import Single from './single_organization'
import Organization from './organizations'
import MainLayout from '../../components/MainLayout/MainLayout'
import MyOrganization from './my_organizations'
export default function OrganizationIndex() {
    return (
        <MainLayout>
            <Single />
            <br />
            <br />
            <Organization />
            <br />
            <br />
            <MyOrganization />

            
        </MainLayout>
    )
}
