import React, { Component } from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = {
            title:'',
            Descrition:''
        };
        this.addTask = this.addTask.bind(this);
    };

    addTask(e) {
        console.log(this.state);
        e.preventDefault();
    };

    handleChange(e){
        console.log(e.target.value);
    };
    render() {
        return(
            <div>
                <nav className='light-blue darken-4'>
                    <div className='container'>
                        <a className='brand-logo' href="/">Rutas para Moteros - RPM</a>
                    </div>
                </nav>
                <div className='container'>
                    <div className='row'>
                        <div className='col s5'>
                            <div className='card'>
                                <div className='card-content'>
                                    <form onSubmit={this.addTask}>
                                        <div className='row'>
                                            <div className='input-field col s12'>
                                                <input name='title' type="text" placeholder='Nombre Tarea' onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='input-field col s12'>
                                                <textarea name='description' placeholder='Descripción de la tarea' className='materialize-textarea' onChange={this.handleChange}></textarea>
                                            </div>
                                        </div>
                                        <button className='btn light-blue darken-4' type="submit">
                                            Enviar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='col s7'>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default App;