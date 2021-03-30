const express = require('express');
const app = express();

app.use(express.json());

const users = [
    {id: 1, user: 'ana'},
    {id: 2, user: 'bruna'},
    {id: 3, user: 'carlos'},
    {id: 4, user: 'daniel'},
]

app.get('/:id?', (req, res) => {
    const { id } = req.params;
    const { page } = req.query;

    const getUser = users.filter((item) => String(item.id) === String(id));

    if (!id || getUser.length === 0) {
        return res.status(404).json({ error: 'user not found' })
    }
    console.log(req.params);
    return res.status(200).json(getUser);
    
})

app.listen(3333, () => console.log('server started'));
