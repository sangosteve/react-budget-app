import React from 'react';
import  './Header.css';

function Header(props){
    return(
        <div className="Header">
            <div><h4>Available Balance</h4></div>
            <div className="tr-type-totals">
                <span className="tr-type income"><h5>Income: {props.totalIncome}</h5></span>
                <span className="tr-type expense"><h5>Expense: {props.totalExpense}</h5></span>
            </div>
            
        </div>
    )
}

export default Header