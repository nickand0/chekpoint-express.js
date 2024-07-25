module.exports.heureTravailDisponible = function(req,res,next){
    const now = new Date();
    const jour = now.getDay()
    const heure =now.getHours()

    if((jour>=1 && jour<=5)&&(heure>=9 && heure<17)){
        next()
    }else{
        res.send("L'application web est disponible uniquement du lundi au vendredi, de 9 h à 17 h.")
    }
}