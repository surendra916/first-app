
import { Link,Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <p> This is a Cool workbook shop </p>
        <h1>
          Surendra Reddy Seelam
        </h1>
        <h1>Bookkeeper</h1>
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
