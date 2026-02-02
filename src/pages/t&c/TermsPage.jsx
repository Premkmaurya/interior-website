import React from 'react';
import './TermsPage.scss';

const TermsPage = () => {
  return (
    <div className="legal-container">
      <header className="legal-header">
        <aside className="legal-sidebar">
          <nav>
            <a href="#" className="active">TERMS AND CONDITIONS OF USE</a>
            <a href="#">INTERNET SALES POLICY</a>
            <a href="#">TERMS OF USE</a>
          </nav>
        </aside>
        <h1 className="main-title">LEGALS</h1>
      </header>

      <main className="legal-content">
        <section className="legal-section">
          <h2>1. Payment</h2>
          <p>
            Unless otherwise provided in writing on the Proforma Invoice or Invoice, fifty percent (50%) 
            of the payment price for the DUCHATEAU Flooring is due when the DUCHATEAU Flooring is 
            ordered by customer or when the invoice is issued, whichever is earlier.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Shipping</h2>
          <p>
            Unless otherwise provided in writing, delivery shall be made F.O.B. the place of business where 
            DUCHATEAU Flooring is manufactured. Customer is responsible for risk of loss after delivery. 
            All claims by customer for loss or damage occurring after delivery must be brought against carrier.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Inspection and Acceptance</h2>
          <p>
            Customer shall inspect the Products within 24 hours after receipt. Customer shall within 48 hours 
            of receipt give written notice to B&M Noble Co. specifying any alleged defect, dissatisfaction with, 
            or other proper objection to the Products.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Return Policy</h2>
          <p>
            Except as provided in this paragraph, Products which are not accepted by customer and for which 
            customer provided timely notice are not subject to return or exchange. For standard orders, 
            customer may return any portion of the Products provided a 15% restocking fee is paid.
          </p>
        </section>
      </main>
    </div>
  );
};

export default TermsPage;