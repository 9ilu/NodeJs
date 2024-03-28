const express = require("express"); //to get express

const app = express(); //initialize express

app.use(express.json()); //use express

const port = 8081;

const toDoList = ["learn", "apply things", "succed"];

app.get('/todos', (req, res) => {
    res.status(200).send(toDoList);
});

app.post('/todos', (req, res) => {
    let newToDoItem = req.body.name;
    toDoList.push(newToDoItem);
    res.status(201).send({ message: "Task added successfully" });
});

app.delete('*', (req, res) => {
    const deleteThisItem = req.body.name;
    toDoList.find((elem, index) => {
        if (elem === deleteThisItem) {
            toDoList.splice(index, 1);
        }

    });
    res.status(202).send({ message: `Deleted item  ${req.body.name}` });
});

app.all("/todo", (req, res) => {
    res.status(501).send();
});

app.listen(port, () => {
    console.log(`NoseJs server Running on Port ${port}`);
});



// app.post('/todos', (req, res) => {});

// app.delete('/todos', (req, res) => {});