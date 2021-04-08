import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import TableBordered from '../../components/Table/TableBordered'

export default function Categories() {
    return (
        <div>
            <MainLayout>
                <div className="cardy">
                    <div className="pt-3 text-darky">Contact Categories</div>
                    <div className="pt-5">
                        <TableBordered />
                    </div>

                </div>
            </MainLayout>
            
        </div>
    )
}
