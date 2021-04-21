import React from 'react';
import uparrow from '../../assets/arrow-up.png'
import sortdown from '../../assets/sort-down.png';
import addicon from '../../assets/addicon.jpg';
import nocontact from '../../assets/contact-icon.png';
import './ContactCategory.css';




function ContactCategory() {
    return (
        <div>
            <div className="mainbg-container">
                <div className="contactcategory-container">
                    <h3 className="h3-contactcat1">Category Name:</h3>
                    <img src={uparrow} className="uparrow" />
                    <div className="categoryname-options" >
                        <img src={sortdown} className="sort-down" />
                        <h5 className="h5-sort">Touchcore</h5>
                    </div>
                    <form className="filter-form">
                        <img src={sortdown} className="sort-filter" />

                        <div className="fiter-container">
                            <label for="filter">Filter:</label>
                            <input
                                id="filter"
                                name="filter"
                                placeholder="Select Field"
                                type="text"

                            />
                        </div>
                        <button className="search" type="submit">SEARCH</button>
                    </form>


                    <div className="search-container">
                        <label for="filter"></label>
                        <input
                            id="filter"
                            name="filter"
                            placeholder="Search"
                            type="text"

                        />

                    </div>

                </div>
                <div className="contactlist-box">
                    <img src={uparrow} className="uparrow" />
                    <h5 className="h5-contlist">Contact List</h5>
                    <div className="addcustomer-box">
                        <img src={addicon} className="add-icon" />
                        <h5 className="h5-addcust1">Add Customer</h5>
                    </div>
                    <img src={nocontact} className="nocontact-found" />
                    <p className="p-nocontact">No contact found in this category Add</p>
                </div>
            </div>
        </div >
    )
}

export default ContactCategory
