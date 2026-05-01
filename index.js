import express from 'express';

const app = express();
const port = process.env.PORT ?? 8000;

app.get('/', (req, res) => {
    return res.json({
        message: 'Hello World this is Sheren'
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port} v4`);
});