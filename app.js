function generate() {
    var who = ['El perro', 'Mi madre', 'El cartero', 'Mi pájaro'];
    var action = ['comió', 'pisó', 'aplastó', 'rompió'];
    var what = ['mi tarea', 'mi teléfono', 'el auto'];
    var when = ['antes de la clase', 'cuando dormía', 'mientras hacía ejercicio', 'durante el almuerzo', 'mientras oraba'];
   
    var rand_who = Math.floor(Math.random() * who.length);
    var rand_action = Math.floor(Math.random() * action.length);
    var rand_what = Math.floor(Math.random() * what.length);
    var rand_when = Math.floor(Math.random() * when.length);

    document.getElementById('result').innerHTML = "<h1>Excusa</h1><div class='alert alert-success'><h2>" 
    + who[rand_who] + " " + action[rand_action] + " " + what[rand_what] + " " + when[rand_when] + "</h2></div>";
}