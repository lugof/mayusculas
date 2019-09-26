import React, { Component } from 'react';
import ej1 from '../../Assets/ej2.jpg';
import ej2 from '../../Assets/ej2.jpg';
import ej3 from '../../Assets/ej3.jpg';
import ej4 from '../../Assets/ej4.jpg';
import './styles.css';

//Reactstrap
import {
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardText,
} from 'reactstrap'

export default class ProductoIndividual extends Component{
    constructor(props) {
        super(props);
        this.state ={
          allLiquids: [],
          
          
        }
      }

    render(){
        const {nombre, marca,precio,imageLink}=this.props.liquidInfo
        console.log("props de producto individual ", this.props)
        return(
            <div className="col-3">
                        <Card className="product-card mb-1" body outline color="secondary">
                            <CardImg src={imageLink} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>{nombre}</CardTitle>
                                <CardSubtitle>{marca}</CardSubtitle>
                                <CardText className="precio">$ {precio}</CardText>
                            </CardBody>
                        </Card>
            </div>
        )
    }
}