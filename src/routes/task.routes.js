const express = require('express');
const router = express.Router();

const Task = require('../models/task');

//MOSTAR U OBTENER TODAS LAS TAREAS
router.get('/', async (req, res) =>{
    const tasks = await Task.find();
    res.json(tasks);
});

//OBTENER O RETORNAR UNA UNICA TAREA
router.get('/:id', async (req, res) =>{
    const task = await Task.findById(req.params.id);
    res.json(task);
});


//AGREGAR UNA TAREA
router.post('/', async (req, res) =>{
    const { title, description}=req.body;
    const task = new Task({title, description});
    await task.save();
    // console.log(req.body);
    res.json({status:'Tarea guardada'});
});

//ACTUALIZAR UNA TAREA
router.put('/:id', async (req, res) =>{
    const { title, description}=req.body;
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status:'Tarea actualizada'});
});

//ELIMINAR UNA TAREA
router.delete('/:id', async (req, res) =>{
    await Task.findByIdAndRemove(req.params.id);
    res.json({status:'Tarea eliminada'});
});




module.exports = router;
