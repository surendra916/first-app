import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Routes,  Route } from 'react-router-dom'
import Expenses from './Expenses';
import Invoices from './Invoices';
import Invoice from './Invoice';

ReactDOM.render(
  <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                
                {/* 
                //Real time Scenario 
                1) As we have App as Starting/root component that renders all child elements
                consider,
                2) rendering LoginComponent/SignupComponent & Common Shared components like NavHeader,Sidebar etc..,
                3) All remaining Components/Modules should be lazy loaded 


                  Here the take away is:

                  Same like angular, we are using Nesting of Routes along with "Outlet"

                  ThumbRule: If some Component has child components, 
                  then, Parent Component should have <Outlet /> within it to render the child/sub components

                */}

                <Route path="expenses" element={<Expenses />} />
                <Route path="invoices" element={<Invoices />}>

                      <Route
                        index
                        element={
                          <main style={{ padding: "1rem" }}>
                            <p>Select an invoice</p>
                          </main>
                        }
                      />

                      <Route path=":invoiceId" element={<Invoice />} />

                </Route>

            </Route>
        </Routes>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
