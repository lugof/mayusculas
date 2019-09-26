import React, { Component } from 'react';
import  './navbarMenu.css';

//reactstrap
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  ButtonGroup,
  Tooltip,
  FormGroup,
  Input,
  Form
} from 'reactstrap';

export default class NavbarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activate: false,
      tooltipOpen: false,
      activateSearch: false
    };
  }



  toggleMenu = () => { 
    this.setState({
      activate: !this.state.activate
    });
  }

  toggleTooltip = () => { 
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  toggleSearch = () => { 
    this.setState({
      activateSearch: !this.state.activateSearch
    });
  }
    getInput=()=>{

    }
  render() { 
    const {getCapitals} = this.props;
    return (
      <div className="mb-4">
        <Navbar dark expand="md">
          
          <div className="container">

            <NavbarToggler onClick={this.toggleMenu}></NavbarToggler>
            
            <NavbarBrand className="mr-auto" href="/">HLCN</NavbarBrand>
            
            <Collapse isOpen={this.state.activate} navbar>
              <Nav className="ml-auto mr-auto" navbar>
                <NavItem active>
                  <Button >1st</Button>
                </NavItem>
                <NavItem>
                  <NavLink href="/">2nd</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink > Helicon</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            
            <ButtonGroup>
              <Button  color="" id="TooltipExample">
                <i className="material-icons text-light">
                  account_circle
                </i>
              </Button>
              <Tooltip placement="left" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggleTooltip}>
                Iniciar sesión
              </Tooltip>
             
              <Button color="" onClick={this.toggleSearch}>
                <i className="material-icons text-light">
                  search
                </i>
              </Button>
            </ButtonGroup>

          </div>
          
        </Navbar>
          <Collapse className="collapse-search" isOpen={this.state.activateSearch}>
            <div className=" container pb-3 pt-1">
              <Input type="text" name="text" id="exampleText" placeholder="Buscar producto"/> 
            </div>
            
          </Collapse>


      </div>

    );
  }
    
}