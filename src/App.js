
import { Link,Outlet } from 'react-router-dom';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">

        <Header />
        <p>This is crazy from </p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis mi arcu, et dapibus nunc congue sit amet. Nullam ac pharetra augue, ut accumsan libero. Aenean ac libero vehicula, accumsan arcu vel, efficitur elit. Aliquam erat volutpat.
           Nunc ligula sem, commodo vitae elit at, gravida pulvinar elit. Cras quis tortor tincidunt, venenatis elit ut, malesuada enim. Nam libero nisi, pulvinar eget tempus sed, sodales sed mauris. Aenean non rutrum eros, sed gravida nibh.</p>

          <p> This is a Cool workbook shop </p>
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
