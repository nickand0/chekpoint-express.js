// Importation du module Express
const express = require('express')
const path = require('path');

const app = express()

// Importation de l'intergiciel personnalisé
const middleware = require('./middleware')

// Configuration d'Express pour utiliser EJS comme moteur de modèle
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuration du répertoire statique pour les fichiers CSS, JS, etc.
app.use(express.static(path.join(__dirname, 'public')));

// Utilisation de l'intergiciel pour vérifier les heures de travail
app.use(middleware.heureTravailDisponible)

//routes

app.get('/',function(req,res){
    res.render('index')
})

app.get('/services',function(req,res){
    res.render('services')
})

app.get('/contact',function(req,res){
    res.render('contact')
})

//démarrer le serveur
app.listen(3000,function(){
    console.log("le serveur est demarré sur lle port 3000");
    console.log("http://localhost:3000")
})
