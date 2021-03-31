import React from 'react';
import wallet from '../../img/wallet.png'
import promo_bonus from '../../img/promo_bonus.png'
import bulk_bonus from '../../img/bulk_bonus.png'
import refferal_earnings from '../../img/refferal_earnings.png'
import total_resent from '../../img/total_resent.png'
import total_failed from '../../img/total_failed.png'
import customers from '../../img/customers.png'
import messages from '../../img/messages.png'
import campaigns_made from '../../img/campaigns_made.png'
import campaigns_failed from '../../img/campaigns_failed.png'
import MainLayout from '../../components/MainLayout/MainLayout'
import totallinks from '../../img/total-links.png'
import messagesDelivered from '../../img/messages_delivered.png'


export default function Dashboard () {
  return (
    <MainLayout>
      <div className="Dashboard-page ">
      <div className="text-right mb-5">
               <h4>Home / Overview</h4>
           </div>
        <div
          class="alert alert-info alert-dismissible fade show mb-5"
          role="alert"
        >
          {' '}
          <p className="paragraph">Hi Lekan, Welcome to your PROJECT SMS Dashbaord, You have been given a free wallet fund of N50(41.22 Units). Click here to get familiar with the service offers and start sending messages to your customers now.</p>

          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="row">
            <div className="col-1-of-4">
                <div className="inner-content">
                <p className="dashboard-paragraph">Main Wallet</p>
                <div className="">
                <p><span className="heading-primary-naira">&#x20A6;50.00</span> <small className="heading-primary-units">41.22 units</small></p>
                <p className="img-right"><img src={wallet} alt=""/></p>
                </div>
                </div>
            </div>
            <div className="col-1-of-4">
            <div className="inner-content">
                <p className="dashboard-paragraph">Promo Bonus</p>
                <div className="">
                <p><span className="heading-primary-naira">&#x20A6;50.00</span> <small className="heading-primary-units">41.22 units</small></p>
                <p className="img-right"><img src={promo_bonus} alt=""/></p>
                </div>
                </div>
            </div>
            <div className="col-1-of-4">
            <div className="inner-content">
                <p className="dashboard-paragraph">Bulk Bonus</p>
                <div className="">
                <p><span className="heading-primary-naira">&#x20A6;50.00</span> <small className="heading-primary-units">41.22 units</small></p>
                <p className="img-right"><img src={bulk_bonus} alt=""/></p>
                </div>
                </div>
            </div>
            <div className="col-1-of-4">
            <div className="inner-content">
                <p className="dashboard-paragraph">Refferal Earnings</p>
                <div className="">
                <p><span className="heading-primary-naira">&#x20A6;00</span> <small className="heading-primary-units">41.22 units</small></p>
                <p className="img-right"><img src={refferal_earnings} alt=""/></p>
                </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-1-of-4">
            <div className="inner-content">
                <p className="dashboard-paragraph">SMS Credit</p>
                <div className="">
                <p><span className="heading-primary-naira">&#x20A6;50</span> <small className="heading-primary-units">41.22 units</small></p>
                <p className="img-right"><img src={wallet} alt=""/></p>
                </div>
                </div>
            </div>
            <div className="col-1-of-4">
            <div className="inner-content">
                <p className="dashboard-paragraph">Total Campaigns Made</p>
                <div className="">
                <p><span className="heading-primary-naira">2</span> <small className="heading-primary-units">41.22 units</small></p>
                <p className="img-right"><img src={campaigns_made} alt=""/></p>
                </div>
                </div>
            </div>
            <div className="col-1-of-4">
            <div className="inner-content">
                <p className="dashboard-paragraph">Total Messages Sent</p>
                <div className="">
                <p><span className="heading-primary-naira">82</span> <small className="heading-primary-units">41.22 units</small></p>
                <p className="img-right"><img src={messages} alt=""/></p>
                </div>
                </div>
            </div>
            <div className="col-1-of-4">
            <div className="inner-content">
                <p className="dashboard-paragraph">Total Campaigns Failed </p>
                <div className="">
                <p><span className="heading-primary-naira">&#x20A6;16</span> <small className="heading-primary-units">41.22 units</small></p>
                <p className="img-right"><img src={total_failed} alt=""/></p>
                </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-1-of-4">
            <div className="inner-content">
                <p className="dashboard-paragraph">Total Customers</p>
                <div className="">
                <p><span className="heading-primary-naira">&#x20A6;80</span> <small className="heading-primary-units">41.22 units</small></p>
                <p className="img-right"><img src={customers} alt=""/></p>
                </div>
                </div>
            </div>
            <div className="col-1-of-4">
            <div className="inner-content">
                <p className="dashboard-paragraph">Total Links Shortened</p>
                <div className="">
                <p><span className="heading-primary-naira">00</span> <small className="heading-primary-units">41.22 units</small></p>
                <p className="img-right"><img src={totallinks} alt=""/></p>
                </div>
                </div>
            </div>
            <div className="col-1-of-4">
            <div className="inner-content">
                <p className="dashboard-paragraph">Total Resent</p>
                <div className="">
                <p><span className="heading-primary-naira">00</span> <small className="heading-primary-units">41.22 units</small></p>
                <p className="img-right"><img src={total_resent} alt=""/></p>
                </div>
                </div>
            </div>
            <div className="col-1-of-4">
            <div className="inner-content">
                <p className="dashboard-paragraph">Total Messages Delivered</p>
                <div className="">
                <p><span className="heading-primary-naira">00</span> <small className="heading-primary-units">41.22 units</small></p>
                <p className="img-right"><img src={messagesDelivered} alt=""/></p>
                </div>
                </div>
            </div>
        </div>

        <div className="graph">
            <div className="graph-sheet">
                <p className="graph-header">So far</p>
                <div className="graph-sub-header d-flex justiy-content align-items-center">
                <div className="graph-sub-header">as of 25 May 2020</div>
                <select className="ml-3"><option></option></select>
                <div className="pl-2">9:41pm</div>
                </div>
            </div>
        </div>
     
      </div>

    </MainLayout>
  );
}
