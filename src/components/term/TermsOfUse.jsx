import React from 'react';
import './TermsOfUse.scss';

const TermsOfUse = () => {
  return (
    <div className="terms-wrapper">
      <header className="terms-header">
        <nav className="legal-nav">
          <a href="#terms" className="active">TERMS AND CONDITIONS OF USE</a>
          <a href="#privacy">INTERNET SALES POLICY</a>
          <a href="#privacy">TERMS OF USE</a>
        </nav>
        <h1 className="legal-title">LEGALS</h1>
      </header>

      <main className="terms-content">
        <section className="legal-column">
          <div className="policy-block">
            <h3>1. Payment</h3>
            <p>
              Unless otherwise provided in writing on the Proforma Invoice or Invoice, fifty percent (50%) of the 
              payment price for the DUCHATEAU Flooring is due when the DUCHATEAU Flooring is ordered by customer. 
              The remaining fifty percent (50%) is due upon receipt at the DUCHATEAU Flooring.
            </p>
          </div>

          <div className="policy-block">
            <h3>2. Shipping</h3>
            <p>
              Unless otherwise provided in writing, delivery shall be made F.O.B. the place of business 
              where DUCHATEAU Flooring is manufactured. Customer is responsible for risk of loss after delivery.
            </p>
          </div>
        </section>

        <section className="legal-column">
          <div className="policy-block">
            <h3>3. Inspection and Acceptance</h3>
            <p>
              Customer shall inspect the Products within 24 hours after receipt. Customer shall within 48 hours 
              of receipt give written notice to B&M Noble Co. specifying any alleged defect or dissatisfaction.
            </p>
          </div>

          <div className="policy-block">
            <h3>4. Return Policy</h3>
            <p>
              Except as provided in this paragraph, Products which are not accepted by customer and for which 
              customer provided timely notice are not subject to return or exchange.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TermsOfUse;