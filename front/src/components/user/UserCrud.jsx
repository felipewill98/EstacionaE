import React, { Component } from 'react'

import Main from '../template/Main'

const headerProps = {
    icon: 'shield',
    title: 'Administrador',
    subtitle: 'Gerenciamento das vagas de estacionamento'
}


export default class UserCrud extends Component {

    

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Tempo Vaga Ratotativa</label>
                            <input type="text" className="form-control"
                                name="name"
                                
                                
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                  {/* <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value=""
                                
                                placeholder="Digite o e-mail..." />
                        </div>
        </div>*/}
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            >
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    
  
  
    
    render() {
        return (
            <div>
                {this.renderForm()}
            </div>
                
                
           
        )
    }
}