import React, { useState } from 'react';

function LoanRepayment({ user }) {
  const [loanDetails, setLoanDetails] = useState({
    loanAmount: 100000, // Sample loan amount
    emi: 10000, // EMI per month
    totalPaid: 0,
  });

  const handleRepayment = (e) => {
    setLoanDetails({
      ...loanDetails,
      totalPaid: loanDetails.totalPaid + loanDetails.emi,
    });
  };

  return (
    <div>
      <h2>Loan Repayment</h2>
      <p>Total Loan Amount: ₹{loanDetails.loanAmount}</p>
      <p>EMI per Month: ₹{loanDetails.emi}</p>
      <p>Total Paid: ₹{loanDetails.totalPaid}</p>
      <button onClick={handleRepayment}>Pay EMI</button>
    </div>
  );
}

export default LoanRepayment;
