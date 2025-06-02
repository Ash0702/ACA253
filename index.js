const express = require('express');
const { createServer } = require('node:http');

const LoginPath = require(`./routes/Login`);
const SignupPath = require(`./routes/Signup`);
// const { Sign } = require('node:crypto');



const app = express();
const server = createServer(app);
app.use(express.json());

app.use(`/api/Login_routes`, LoginPath);
app.use(`/api/Login_routes` , SignupPath);

app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT =  3000;
server.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:3000`);
});
