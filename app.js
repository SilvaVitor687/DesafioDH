const express = require('express');
const indexRouter = require('./router/indexRouter');



const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.use('/', indexRouter);

app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});

