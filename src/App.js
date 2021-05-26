import React from 'react'
import Header from './Components/Header';

import Balance from './Components/Balance';
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import {Container, Row, Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  return (
    
        <GlobalProvider>
        <Header/> 
            <Container>
                <Row>
                    <Col sm="12" lg="6" md="12">
                        <Balance/>
                        <IncomeExpenses/>
                        <AddTransaction/> 
                    </Col>
                    <Col sm="12" lg="6" md="12">
                        <TransactionList/>  
                    </Col>
                </Row>  

            </Container>
        </GlobalProvider>
  );
}

export default App;
