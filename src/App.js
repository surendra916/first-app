
import { Link,Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <h1>
          Surendra Reddy Seelam
        </h1>
        <h1>Star Seller's Bookkeeper</h1>
        <br></br>
        <h3>This is an Amazing Books shop</h3>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>

      <Outlet />

      </header>
    </div>
  );
}

export default App;
