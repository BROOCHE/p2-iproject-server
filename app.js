require("dotenv").config();

const express = require(`express`);
const app = express();
const port = 3000;
const cors = require(`cors`);
const Cont = require(`./controllers/controllers`);
const authe = require(`./middlewares/authe`);
const autho = require(`./middlewares/autho`);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post(`/register`, Cont.register);
app.post(`/login`, Cont.login);
app.get(`/home`, authe, Cont.getbackdrop);
app.post(`/home`, authe, autho, Cont.createbackdrop);

app.listen(port, () => {
  console.log(`listnon to ${port}`);
});
