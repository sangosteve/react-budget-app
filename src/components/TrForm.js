import React,{useState,useEffect} from 'react';
import Header from './Header'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function TrForm(){
    
    let [totalIncome,setTotalIncome] = useState(0);
    let [totalExpense,setTotalExpense] = useState(0)

    const [incomeTrans,setIncomeTrans] = useState({
        tr_note:"",
        tr_value:""
    });

    const [incomeHistory,setIncomeHistory] = useState([])

    function handleInput(e){

    const inputvalues = e.target.value;
    setIncomeTrans([{...incomeTrans,[e.target.name]:inputvalues}]);
        
        
    }

    function addTransaction(){
        setIncomeHistory([incomeHistory,{...incomeTrans}]);
        console.log([...incomeHistory])
    }

    return(
        <>
        <Header totalIncome={totalIncome} totalExpense={totalExpense}/>
        <Form>
        <FormGroup>
        <Label for="exampleEmail">Description</Label>
        <Input type="text" name="tr_note"  placeholder="enter note" value={incomeTrans.tr_note} onChange={handleInput} />
        </FormGroup>
        <FormGroup>
        <Label for="exampleEmail">Value</Label>
        <Input type="number" name="tr_value"  placeholder="value" value={incomeTrans.tr_value}  onChange={handleInput}  />
        </FormGroup>
        <Button color="primary" onClick={addTransaction}>Add Transaction</Button>
        
        
        </Form>

        <div>
            <ul>
               
            </ul>
        </div>
        </>
    )
}

export default TrForm;