import React, { Component } from 'react';
import './styles.css';

//Reactstrap


export default class Sidebar extends Component{
    constructor(props) {
        super(props);
        this.state ={         
          
        }
      }

    render(){
        return(
            <aside>
                <div class="list-group">
                <h5 class="list-group-item">Filtrar por:</h5>
                <a href="#" class="list-group-item list-group-item-action list-group-item-light">Marca</a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-light">Precio</a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-light">Cantidad</a>
                </div>
            </aside>
        )
    }
}