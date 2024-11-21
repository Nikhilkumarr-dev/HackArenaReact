import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Components
import LoanApplication from './components/LoanApplication';
import AcademicProgress from './components/AcademicProgress';
import LoanRepayment from './components/LoanRepayment';
import CertificateManagement from './components/CertificateManagement';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/loan-application">Loan Application</Link></li>
              <li><Link to="/academic-progress">Academic Progress</Link></li>
              <li><Link to="/loan-repayment">Loan Repayment</Link></li>
              <li><Link to="/certificate-management">Certificate Management</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
            <Route path="/loan-application">
              <LoanApplication user={user} onLogin={handleLogin} />
            </Route>
            <Route path="/academic-progress">
              <AcademicProgress user={user} />
            </Route>
            <Route path="/loan-repayment">
              <LoanRepayment user={user} />
            </Route>
            <Route path="/certificate-management">
              <CertificateManagement user={user} />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </main>

        <footer>
          <p>&copy; 2023 Higher Education Financing</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to Higher Education Financing</h1>
      <p>
        Our platform helps students secure loans for higher education and
        provides tools to manage their academic progress and loan repayment.
      </p>
    </div>
  );
}

export default App;
