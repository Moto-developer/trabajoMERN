import React, { Component } from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = {
            title:'',
            description:'',
            tasks:[]

        };
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    };

    addTask(e) {
        fetch('/api/tasks',{
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                M.toast({html: 'Tarea guardada'});
                this.setState({title: '', description: ''});
                this.fetchTask();

            })

            .catch(err => console.error(err));


        e.preventDefault();
    };
    
    componentDidMount(){
        this.fetchTask();
    }
    
    fetchTask() {
        fetch('/api/tasks')
        .then(res => res.json())
        .then(data => {
            this.setState({tasks: data});
            console.log(this.state.tasks);
        });
    };

    deleteTask(id){
        if(confirm('Seguro que quiere eliminar la tarea?')){
            fetch(`/api/tasks/${id}`,{
                method: 'DELETE',
                headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=> {
                console.log(data);
                M.toast({html: 'Tarea eliminada'});
                this.fetchTask();
            });
        }
    };

    handleChange(e){
    const {name, value} = e.target;
        this.setState({
            [name]: value
        });
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
                                                <input name='title' type="text" placeholder='Nombre Tarea' onChange={this.handleChange} value={this.state.title}/>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='input-field col s12'>
                                                <textarea name='description' placeholder='Descripción de la tarea' className='materialize-textarea' onChange={this.handleChange} value={this.state.description}></textarea>
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
                            <table>
                                <thead>
                                    <tr>
                                        <th>Título</th>
                                        <th>Descripción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks.map(task =>{
                                            return(
                                                <tr key={task._id}>
                                                    <td>{task.title}</td>
                                                    <td>{task.description}</td>
                                                    <td>
                                                        <button className='btn light-blue darken-4' style={{margin: '4px'}} onClick={()=> this.deleteTask(task._id)}>
                                                            <i className='material-icons'>delete</i>
                                                        </button>
                                                        <button className='btn light-blue darken-4' style={{margin: '4px'}}>
                                                        <i className='material-icons'>edit</i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default App;