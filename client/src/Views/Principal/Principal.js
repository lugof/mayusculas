import React, { Component } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
//Reactstrap
import {
    
    CardBody,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardText,
} from 'reactstrap'

export default class Principal extends Component{
    constructor(props) {
        super(props);
        this.state ={
          word: ""
        }
      }

      onChange=(e)=>{
        this.setState({word:e})
      }

    render(){
        const { getCapitals, convertedWord}=this.props
        const { word } = this.state
        return(
            <div className="container">
            <Card>
            <Card.Header as="h5">Click the button</Card.Header>
            <Form>
            <Form.Label>{convertedWord}</Form.Label>
              <Form.Control type="text" placeholder="hola" value={word} onChange={(e)=>this.onChange(e.target.value)} />
            </Form>
            <Card.Body>
         
                <Card.Text>
                {convertedWord}
                </Card.Text>
   
                <Button onClick={()=>getCapitals(word)}> Helicon</Button>
            </Card.Body>
            </Card>
                      
                      
                    
               
            </div>
            
        );
    }

}