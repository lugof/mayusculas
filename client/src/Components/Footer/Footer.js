import React, { Component } from "react";
import './footer.css';

export default class Footer extends Component{ 
  render() { 
    return (
      <div>
        <footer className="text-center footer-style">
          <div className="container">
            <div className="col-md-12 footer-col">

              <a target="_blank" href="#" className="btn-social btn-outline">
                <i class="fa fa-fw fa-facebook"></i>
              </a>        
                                
              <a target="_blank" href="#" className="btn-social btn-outline">
                <i class="fa fa-fw fa-twitter"></i>
              </a>
                                      
              <a target="_blank" href="#" className="btn-social btn-outline">
                <i class="fa fa-fw fa-instagram"></i>
              </a>
                                    
  
                            
              
            </div>
                <div className="row mt-4 mb-4">
                    <div className="col-md-3 footer-col">
                        <h3>Dirección</h3>
                        <p>
                            Monterrey <br />
                            carrasco 1234
                        </p>
                    </div>
                    <div className="col-md-3 footer-col">
                        <h3>Productos</h3>
                        <ul className="list-inline">
                            lorem
                        </ul>
                    </div>
                    <div className="col-md-3 footer-col">
                        <h3>legales</h3>
                        <p>lorem impus</p>
                    </div>
                    <div className="col-md-3 footer-col">
                        <h3>Sobre nosotros</h3>
                        <p>lorem</p>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    );
  }
}