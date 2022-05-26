const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views') , 'layouts'),
    partialDir: path.join(app.get('views') , 'partials'),
    extnam: '.hbs'
}));
app.set('view engine', '.hbs')

//const routerProductos = express.Router();
//app.use('/api/productos', routerProductos);

const productos = [{
    nombre: "auto",
    precio: 2000,
    url: "www"
}]








app.get('', (req, res) => {
    res.render('index');
    //res.json(productos);
});

app.get('/productos', (req, res) => {
    res.render('productos');
    res.json(productos);
});




const server = app.listen(8080, () => {
    console.log(`Servidor Http escuchando en el puerto ${server.address().port}`)
})