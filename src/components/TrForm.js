import React,{useState,useEffect} from 'react';
import Header from './Header'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function TrForm(){
    
    const [income,setIncome] = useState(0);
    const [expense,setExpense] = useState(0)

    return(
        <>
        <Header income={income} expense={expense}/>
        <Form>
        <FormGroup>
        <Label for="exampleEmail">Description</Label>
        <Input type="text" name="tr_note"  placeholder="enter note" />
        </FormGroup>
        <FormGroup>
        <Label for="exampleEmail">Value</Label>
        <Input type="number" name="tr_value"  placeholder="value" />
        </FormGroup>
        <Button color="primary">Add Transaction</Button>
        
        
        </Form>
        </>
    )
}

export default TrForm;