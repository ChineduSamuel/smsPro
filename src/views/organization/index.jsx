import React from 'react'
import Single from './single_organization'
import Organization from './organizations'
import MainLayout from '../../components/MainLayout/MainLayout'
export default function OrganizationIndex() {
    return (
        <MainLayout>
            <Single />
            <br />
            <br />
            <Organization />

            
        </MainLayout>
    )
}
