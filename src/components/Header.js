import React from 'react';
import  './Header.css';

function Header(props){
    return(
        <div className="Header">
            <div><h4>Available Balance</h4></div>
            <div className="tr-type-totals">
                <span class="tr-type income"><h5>Income: {props.income}</h5></span>
                <span class="tr-type expense"><h5>Expense: {props.expense}</h5></span>
            </div>
            
        </div>
    )
}

export default Header